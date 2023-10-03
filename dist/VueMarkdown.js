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
        plugins: {
            type: Array,
            required: false,
        }
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
        var _a, _b;
        this.md = new MarkdownIt((_a = this.options) !== null && _a !== void 0 ? _a : {});
        for (var _i = 0, _c = (_b = this.plugins) !== null && _b !== void 0 ? _b : []; _i < _c.length; _i++) {
            var plugin = _c[_i];
            this.md.use(plugin);
        }
    },
    render: function () {
        return h('div', { innerHTML: this.content });
    },
});
export default VueMarkdown;
//# sourceMappingURL=VueMarkdown.js.map