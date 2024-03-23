import { find } from 'lodash';

const pluginsToImport = [
  'Heading',
  'Bold',
  'Italic',
  'Link',
  'Image',
  'BlockQuote',
  'BulletedList',
  'OrderedList',
  'MediaEmbed',
  'CodeSnippet' // Add CodeSnippet plugin
];

const plugins = pluginsToImport.map(pluginName =>
  require(`@ckeditor/ckeditor5-${pluginName.toLowerCase()}-plugin`)
);

export default ({ findPlugin }) => {
  const editorConfig = {
    plugins,
    toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'imageUpload',
      'blockQuote',
      'bulletedList',
      'numberedList',
      'mediaEmbed',
      'codeSnippet' // Add CodeSnippet button to the toolbar
    ],
    language: 'en',
    image: {
      toolbar: [
        'imageTextAlternative',
        '|',
        'imageStyle:alignLeft',
        'imageStyle:full',
        'imageStyle:alignRight'
      ],
      styles: [
        'full',
        'alignLeft',
        'alignRight'
      ]
    },
    codeSnippet_languages: {
      go: 'Go' // Configure Go language for CodeSnippet plugin
    }
  };

  return findPlugin(editorConfig, find);
};
