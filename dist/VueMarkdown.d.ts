import Vue from "vue";
import MarkdownIt from "markdown-it";
export { Options } from 'markdown-it';
declare const VueMarkdown: import("vue/types/vue").ExtendedVue<Vue, {
    md: MarkdownIt | null;
}, unknown, {
    content: string | undefined;
}, {
    source: string;
    options: MarkdownIt.Options;
}>;
export default VueMarkdown;
