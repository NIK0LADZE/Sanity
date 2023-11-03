import { CustomTextArea } from '../components/customTextArea';
import { FaHeading } from "react-icons/fa";

export default {
    name: 'text-block',
    type: 'object',
    title: 'Text Block',
    icon: FaHeading,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Text Title',
            validation: (Rule) => [
                Rule.required(),
            ],
        },
        {
            title: 'Text Description',
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
    ]
};
