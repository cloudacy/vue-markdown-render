import MarkdownIt from "markdown-it";
export type { Options } from "markdown-it";
declare const VueMarkdown: import("vue").DefineSetupFnComponent<{
    source: string;
    options?: MarkdownIt.Options | undefined;
    plugins?: MarkdownIt.PluginSimple[] | undefined;
}, {}, {}, {
    source: string;
    options?: MarkdownIt.Options | undefined;
    plugins?: MarkdownIt.PluginSimple[] | undefined;
} & {}, import("vue").PublicProps>;
export default VueMarkdown;
