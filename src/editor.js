import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"
import {exampleSetup} from "prosemirror-example-setup"

const schema = new Schema({
  nodes: {
    text: {
      group: "inline",
    },
    paragraph: {
      group: "block",
      content: "inline*",
      toDOM() { 
        return [
          'div',
          {style: 'display: flex'}, 
          ['div'],
          ['p', 0]
        ]
      },
      parseDOM: [{tag: "p"}]
    },
    doc: {
      content: "block+"
    }
  }
})

window.view = new EditorView(document.querySelector("#editor"), {
  state: EditorState.create({
    doc: DOMParser.fromSchema(schema).parse(document.querySelector("#content")),
    plugins: exampleSetup({schema})
  })
})