import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'press',
  title: 'Press',
  type: 'document',
  fields: [
    defineField({
      name: 'stitle',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'string',
        }),
        defineField({
          name: 'fr',
          title: 'French',
          type: 'string',
        }),
        defineField({
          name: 'ar',
          title: 'Arabic',
          type: 'string',
        }),
      ],
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'object',
        fields: [
          defineField({
            name: 'en',
            title: 'English',
            type: 'text',
          }),
          defineField({
            name: 'fr',
            title: 'French',
            type: 'text',
          }),
          defineField({
            name: 'ar',
            title: 'Arabic',
            type: 'text',
          }),
        ],
      }),
      defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options : {
            hotspot : true
        }
      })
  
  ],
})