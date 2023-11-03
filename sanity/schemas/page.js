import { CustomTextArea } from '../components/customTextArea';
import uniqueEntity from '../validations/uniqueEntity';
import { FaGlobe } from "react-icons/fa";

export default {
    name: 'page',
    type: 'document',
    title: 'Page',
    icon: FaGlobe,
    groups: [
        {
            name: 'content',
            title: 'Content',
            default: true
        },
        {
            name: 'seo',
            title: 'SEO & metadata',
        },
    ],
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Page Title',
            group: ['content', 'seo'],
            validation: (Rule) => [
                Rule.required(),
                uniqueEntity(Rule, 'title', 'Page with this title already exists'),
            ],
        },
        {
            name: 'url',
            type: 'string',
            title: 'Page URL',
            group: 'seo',
            validation: (Rule) => [
                Rule.required(),
                uniqueEntity(Rule, 'url', 'Page with this URL already exists'),
            ],
        },
        {
            name: 'favicon',
            type: 'image',
            title: 'Favicon',
            options: {
                hotspot: true,
                storeOriginalFilename: false
            },
            group: 'seo',
            validation: Rule => [
                Rule.required()
            ]
        },
        {
            title: 'Page Description',
            name: 'description',
            type: 'text',
            group: 'seo',
            components: {
                input: CustomTextArea
            },
            validation: Rule => [
                Rule.required(),
                Rule.max(500)
            ]
        },
        {
            name: 'section',
            title: 'Page Section',
            type: "array",
            group: 'content',
            of: [{type: 'text-block'},{type: 'banner-block'},{type: 'figure-block'}],
            validation: Rule => [
              Rule.required()
            ]
          },
    ],
}
