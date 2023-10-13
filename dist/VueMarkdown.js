import MarkdownIt from "markdown-it";
import { computed, defineComponent, h, ref } from "vue";
var VueMarkdown = defineComponent({
    name: "VueMarkdown",
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
        },
    },
    setup: function (props) {
        var _a, _b;
        var md = ref(new MarkdownIt((_a = props.options) !== null && _a !== void 0 ? _a : {}));
        for (var _i = 0, _c = (_b = props.plugins) !== null && _b !== void 0 ? _b : []; _i < _c.length; _i++) {
            var plugin = _c[_i];
            md.value.use(plugin);
        }
        var content = computed(function () { return md.value.render(props.source); });
        return function () { return h("div", { innerHTML: content.value }); };
    },
});
export default VueMarkdown;
//# sourceMappingURL=VueMarkdown.js.map