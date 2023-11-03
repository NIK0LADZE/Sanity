import { FaImage } from "react-icons/fa";

export default {
    name: 'figure-block',
    type: 'image',
    title: 'Figure Block',
    icon: FaImage,
    options: {
        hotspot: true,
        storeOriginalFilename: false
    },
    fields: [
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative text'
        },
        {
            name: 'preload',
            type: 'boolean',
            title: 'Pre-Load image'
        }
    ],
    validation: Rule => [
        Rule.required()
    ],
    initialValue: {
        preload: false
    }
};
