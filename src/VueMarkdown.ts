import Vue, { VNode } from "vue";
import MarkdownIt from "markdown-it";

const VueMarkdown = Vue.extend({
  name: "VueMarkdown",
  props: {
    html: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    source: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      md: null as MarkdownIt | null
    };
  },
  computed: {
    content(): string | undefined {
      const src = this.source;
      return this.md?.render(src);
    }
  },
  created() {
    this.md = new MarkdownIt("default", { html: this.html });
  },
  render(h): VNode {
    return h("div", { domProps: { innerHTML: this.content } });
  }
});

export default VueMarkdown;
