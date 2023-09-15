import client from "../client";

// Run this script from within your project folder in your terminal with: `sanity exec --with-user-token migrations/setFigurePreLoadToTrue.js`

const fetchDocuments = () =>
    client.fetch(
        `*[_type == 'page' && false in section[].preload]{
            _id,
            _rev,
            section
        }`
    )

const buildPatches = docs =>
    docs.map(doc => {
        return {
            id: doc._id,
            patch: {
                set: { "section[_type==\"figure-block\"].preload": true },
                // this will cause the transaction to fail if the documents has been
                // modified since it was fetched.
                ifRevisionID: doc._rev // <-- This doesn't work properly for some reason, throwing errors randomly for no reason
            }
        }
    })

const createTransaction = patches =>
    patches.reduce((tx, patch) => tx.patch(patch.id, patch.patch), client.transaction())

const commitTransaction = tx => tx.commit()

const migrateNextBatch = async () => {
    const documents = await fetchDocuments()
    const patches = buildPatches(documents)
    if (patches.length === 0) {
        console.log('No more documents to migrate!')
        return null
    }
    console.log(
        `Migrating batch:\n %s`,
        patches.map(patch => `${patch.id} => ${JSON.stringify(patch.patch)}`).join('\n')
    )
    const transaction = createTransaction(patches)
    await commitTransaction(transaction)
    return migrateNextBatch()
}

migrateNextBatch().catch(err => {
    console.error(err)
    process.exit(1)
})
