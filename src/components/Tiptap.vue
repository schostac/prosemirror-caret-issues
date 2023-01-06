<template>
  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import { Paragraph as TiptapParagraph } from '@tiptap/extension-paragraph'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import Component from '../components/Paragraph.vue'

export const Paragraph = TiptapParagraph.extend({ 
  name: 'p',
  addNodeView() {
    return VueNodeViewRenderer(Component)
  },
})

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      content: `
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      `,
      extensions: [
        Document,
        Paragraph,
        Text
      ],
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>