export default {
  name: 'manufacturer',
  type: 'document',
  title: 'Manufacturer',
  fields: [
    {
      name: 'manufacturer',
      type: 'string',
      title: 'Manufacturer',
      validation: Rule => [
        Rule.required(),
        Rule.min(2),
      ]
    },
  ],
}