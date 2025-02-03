const editor = new EditorJS({
  holderId: 'editorjs',
  placeholder: 'Описание товара',

  tools: {
    header: Header,
    list: EditorjsList,
  },
});
