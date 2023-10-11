import { h, PropType, VNode, Component, defineComponent } from 'vue'
import MarkdownIt, { Options as MarkdownItOptions, PluginSimple } from 'markdown-it'
export type { Options } from 'markdown-it'

const VueMarkdown: Component = defineComponent({
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
    plugins: {
      type: Array as PropType<PluginSimple[]>,
      required: false,
    }
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
    this.md = new MarkdownIt(this.options ?? {})
    for (const plugin of this.plugins ?? []) {
      this.md.use(plugin)
    }
  },
  render(): VNode {
    return h('div', { innerHTML: this.content })
  },
})

export default VueMarkdown
