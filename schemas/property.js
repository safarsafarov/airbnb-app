export default {
    name: 'property',
    title: 'property',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },

        {
            name: 'location',
            title: 'Location',
            type: 'geopoint'
        },

        {
            name: 'propertyType',
            title: 'Property Type',
            type: 'string',
            options: {
                last: [
                    { title: 'House', value: 'house' },
                    { title: 'Flat', value: 'flat' },
                    { title: 'Bed and Breakfast', value: 'bed-and-breakfast' },
                    { title: 'Botique Hotel', value: 'botique-hotel' },
                ],
                layout: 'radio'
            }
        },
        {
            name: 'mainImage',
            title: 'Images',
            type: 'array',
            of: [{ type: 'propertyImage' }]
        },
        {
            name: 'pricePerNight',
            title: 'Price Per Night',
            type: 'number',
        },
        {
            name: 'bedrooms',
            title: 'Bedrooms',
            type: 'number',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100,
            },
        },
        {
            name: 'id',
            title: 'ID',
            type: 'number'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'host',
            title: 'host',
            type: 'host',
        },
        {
            name: 'review',
            title: 'Reviews',
            type: 'array',
            of: [{ type: 'review' }]

        }

    ]
}