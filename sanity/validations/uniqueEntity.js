import client from '../client';

export default (Rule, name, customErrorText = '') => {
    return Rule.custom(async (value, context) => {
        const { document: { _id } } = context;
        const docs = await client.fetch(`*[${name} == $value]`, { value });
        const errorText = customErrorText ? customErrorText : `This ${name} already exists`;
        return docs.length > 0 && _id.includes('drafts') ? errorText : true;
    });
};
