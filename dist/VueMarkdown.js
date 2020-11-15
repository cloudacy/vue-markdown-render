import Vue from "vue";
import MarkdownIt from "markdown-it";
var VueMarkdown = Vue.extend({
    name: "VueMarkdown",
    props: {
        html: {
            type: Boolean,
            required: false,
            default: function () { return false; },
        },
        source: {
            type: String,
            required: true,
        },
    },
    data: function () {
        return {
            md: null,
        };
    },
    computed: {
        content: function () {
            var _a;
            var src = this.source;
            return (_a = this.md) === null || _a === void 0 ? void 0 : _a.render(src);
        },
    },
    created: function () {
        this.md = new MarkdownIt("default", { html: this.html });
    },
    render: function (h) {
        return h("div", { domProps: { innerHTML: this.content } });
    },
});
export default VueMarkdown;
//# sourceMappingURL=VueMarkdown.js.map