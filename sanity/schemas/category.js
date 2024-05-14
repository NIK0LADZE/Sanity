import uniqueEntity from "../validations/uniqueEntity";

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
        uniqueEntity(Rule, 'category'),
      ]
    },
  ],
}