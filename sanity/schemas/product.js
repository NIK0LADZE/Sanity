import { defineArrayMember } from "sanity";
import { CustomTextArea } from "../components/CustomTextArea";
import uniqueEntity from "../validations/uniqueEntity";

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
        uniqueEntity(Rule, 'name', 'Product with this name already exits'),
      ]
    },
    {
      name: 'sku',
      type: 'string',
      title: 'Product SKU',
      hidden: ({ document: { name } }) => !name,
      validation: Rule => [
        Rule.required(),
        Rule.min(5),
        uniqueEntity(Rule, 'sku', 'Product with this SKU already exits'),
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
      components: {
        input: CustomTextArea
      },
      validation: Rule => [
        Rule.required(),
        Rule.max(500)
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