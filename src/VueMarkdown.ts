import Vue, { PropType, VNode, Component } from 'vue'
import MarkdownIt, { Options as MarkdownItOptions } from 'markdown-it'
export { Options } from 'markdown-it'

const VueMarkdown: Component = Vue.extend({
  name: 'VueMarkdown',
  props: {
    source: {
      type: String,
      required: true,
    },
    options: {
      type: Object as PropType<MarkdownItOptions>,
      required: false,
    },
  },
  data() {
    return {
      md: null as MarkdownIt | null,
    }
  },
  computed: {
    content(): string | undefined {
      const src = this.source
      return this.md?.render(src)
    },
  },
  created() {
    this.md = new MarkdownIt(this.options)
  },
  render(h): VNode {
    return h('div', { domProps: { innerHTML: this.content } })
  },
})

export default VueMarkdown
