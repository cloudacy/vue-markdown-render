import Vue, { VNode } from "vue";
import VueMarkdown, {Options} from "../../dist/VueMarkdown";

Vue.config.productionTip = false;

const App = Vue.extend({
  name: "App",
  components: {
    VueMarkdown
  },
  data() {
    return {
      i: 0,
      options: {
        html: true
      } as Options
    };
  },
  render(h): VNode {
    return h("div", [
      h(
        "button",
        {
          on: {
            click: () => {
              this.i++;
            }
          }
        },
        "Increment"
      ),
      h("vue-markdown", {
        props: {
          source: `# This is a markdown heading\n## This is your number: ${this.i}. <i>HTML is allowed via options</i>`,
          options: this.options
        }
      })
    ]);
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
