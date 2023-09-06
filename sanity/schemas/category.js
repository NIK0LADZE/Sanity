export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      validation: Rule => [
        Rule.required(),
        Rule.min(3),
      ]
    },
  ],
}