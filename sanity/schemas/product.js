import { defineArrayMember } from "sanity";

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
      validation: Rule => [
        Rule.required(),
        Rule.min(5),
      ]
    },
    {
      name: 'sku',
      type: 'string',
      title: 'Product SKU',
      validation: Rule => [
        Rule.required(),
        Rule.min(5),
      ]
    },
    {
      name: 'categories',
      title: 'Product Categories',
      type: "array",
      of: [
        defineArrayMember({
          name: "category",
          title: "Product Category",
          type: "reference",
          to: [{ type: "category" }],
        }),
      ],
      validation: Rule => [
        Rule.required(),
        Rule.unique()
      ]
    },
    {
      title: 'Product Description',
      name: 'description',
      type: 'text',
      validation: Rule => [
        Rule.required(),
        Rule.min(100)
      ]
    },
    {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          validation: Rule => [
            Rule.required(),
            Rule.min(5),
          ]
        }
      ],
      validation: Rule => [
        Rule.required()
      ]
    },
    {
      name: 'manufacturer',
      type: 'reference',
      title: 'Manufacturer',
      to: [{type: 'manufacturer'}],
      validation: Rule => [
        Rule.required()
      ]
    },
    {
      name: 'manufacture_date',
      type: 'date',
      title: 'Manufacture Date',
      validation: Rule => [
        Rule.required()
      ]
    },
  ],
}