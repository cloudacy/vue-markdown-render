import MarkdownIt, {
  type MarkdownIt as MarkdownItInstance,
  type MarkdownItOptions,
} from "markdown-it";
import { computed, defineComponent, h, shallowRef } from "vue";
export type { MarkdownItOptions as Options } from "markdown-it";

type PluginSimple = (md: MarkdownItInstance) => void;

const VueMarkdown = defineComponent(
  (props: {
    source: string;
    options?: MarkdownItOptions;
    plugins?: PluginSimple[];
  }) => {
    const md = shallowRef(new MarkdownIt(props.options ?? {}));

    for (const plugin of props.plugins ?? []) {
      md.value.use(plugin);
    }

    const content = computed(() => md.value.render(props.source));

    return () => h("div", { innerHTML: content.value });
  },
  {
    props: ["source", "options", "plugins"],
  }
);

export default VueMarkdown;
