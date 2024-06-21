import { type Options as MarkdownItOptions, type PluginSimple } from "markdown-it";
export type { Options } from "markdown-it";
declare const VueMarkdown: import("vue").DefineSetupFnComponent<{
    source: string;
    options?: MarkdownItOptions | undefined;
    plugins?: PluginSimple[] | undefined;
}, {}, {}, {
    source: string;
    options?: MarkdownItOptions | undefined;
    plugins?: PluginSimple[] | undefined;
} & {}, import("vue").PublicProps>;
export default VueMarkdown;
