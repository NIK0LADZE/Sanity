import { FaImage } from 'react-icons/fa';
import { CustomTextArea } from '../components/customTextArea';

export default {
    name: 'banner-block',
    type: 'object',
    title: 'Banner Block',
    icon: FaImage,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Banner Title',
            validation: (Rule) => [
                Rule.required(),
            ],
        },
        {
            title: 'Banner Description',
            name: 'description',
            type: 'text',
            components: {
                input: CustomTextArea
            },
            validation: Rule => [
                Rule.required(),
                Rule.max(1000)
            ]
        },
        {
            name: 'image',
            type: 'image',
            title: 'Banner Image',
            options: {
                hotspot: true,
                storeOriginalFilename: false
            },
            validation: Rule => [
                Rule.required()
            ]
        },
    ],
};
