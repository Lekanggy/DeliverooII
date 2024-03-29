import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
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
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image'
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number',
     
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: ' Address of the Restaurant',
      type: 'string',
      validation: (Rule)=> Rule.required()
    }),
    defineField({
      name: 'rating',
      title: 'Enter a rating from 1 to 5 (1-5)',
      type: 'number',
      validation:
      (Rule)=> Rule.required()
        .min(1)
        .max(5)
        .error("Please Enter a number from 1 to 5")
    }),

    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule)=> Rule.required()
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}] }],
    }),
   
  ]
})
