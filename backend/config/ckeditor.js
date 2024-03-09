module.exports = {
  settings: {
    editor: {
      plugins: ['CodeMirror'],
      toolbar: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        'blockQuote',
        'code',
      ],
      codeMirror: {
        theme: 'monokai', // Change the theme as needed
        tabSize: 2,
        modes: ['xml', 'css', 'htmlmixed', 'javascript', 'python', 'ruby', 'sass'],
      },
    },
  },
};
