<template>
  <node-view-wrapper style="margin: 10px;">
    <div style="display: flex">
      <div></div>
      <node-view-content as="p" />
    </div>
  </node-view-wrapper>
</template>

<script>
import { NodeViewWrapper, NodeViewContent, nodeViewProps } from '@tiptap/vue-3'

export default {
  components: {
    NodeViewWrapper,
    NodeViewContent,
  },
  props: nodeViewProps,
}
</script>
