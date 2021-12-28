import { h, defineComponent } from 'vue';
import MarkdownIt from 'markdown-it';
var VueMarkdown = defineComponent({
    name: 'VueMarkdown',
    props: {
        source: {
            type: String,
            required: true,
        },
        options: {
            type: Object,
            required: false,
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
        var _a;
        this.md = new MarkdownIt((_a = this.options) !== null && _a !== void 0 ? _a : {});
    },
    render: function () {
        return h('div', { innerHTML: this.content });
    },
});
export default VueMarkdown;
//# sourceMappingURL=VueMarkdown.js.map