import Icon from 'react-icons/lib/md/build'

export default {
  type: 'document',
  name: 'tool',
  icon: Icon,
  title: 'Tool',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'type',
      type: 'reference',
      to: [{ type: 'toolType' }],
      title: 'Type of Tool',
    },
    {
      name: 'intro',
      type: 'simplePortableText',
      title: 'Intro',
    },
    {
      name: 'description',
      type: 'simplePortableText',
      title: 'Long description',
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image',
    },
    {
      name: 'file',
      type: 'file',
      title: 'Downloadable File',
      description:
        'If there are multiple files, zip them first. Always use filetypes that are widely supported.',
      fields: [
        {
          name: 'filename',
          type: 'string',
          title: 'Filename',
        },
      ],
    },
    {
      name: 'url',
      type: 'link',
      title: 'URL to tool',
      description: 'If the tool is not a downloadable file, link to it instead',
    },
    {
      name: 'priority',
      type: 'number',
      title: 'List priority',
      description: 'Higher number makes the tool come higher up in the list',
    },
    {
      name: 'authors',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'person' } }],
      title: 'Authors',
    },
    {
      name: 'sources',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'data' } }],
      title: 'Data sources / references',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'label',
      media: 'image',
    },
    prepare({ heading, media }) {
      return {
        title: `${heading}`,
        subtitle: 'Tool',
        media,
      }
    },
  },
}
