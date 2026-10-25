import { type MarkdownIt as MarkdownItInstance, type MarkdownItOptions } from "markdown-it";
export type { MarkdownItOptions as Options } from "markdown-it";
type PluginSimple = (md: MarkdownItInstance) => void;
declare const VueMarkdown: import("vue").DefineSetupFnComponent<{
    source: string;
    options?: MarkdownItOptions;
    plugins?: PluginSimple[];
}, {}, {}, {
    source: string;
    options?: MarkdownItOptions;
    plugins?: PluginSimple[];
} & {}, import("vue").PublicProps>;
export default VueMarkdown;
