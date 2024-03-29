import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'featured category',
      type: 'string',
      validation: (Rule)=> Rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule)=> Rule.max(200)
    }),
    defineField({
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [{type: "reference", to: [{type: "restaurant"}]}]
    }),
   
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
