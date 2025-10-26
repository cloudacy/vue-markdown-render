import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import VueMarkdown from "../../../dist/VueMarkdown";

describe("VueMarkdown", () => {
  it("renders markdown as HTML", () => {
    const i = 42;
    const source = `# This is a markdown heading\n## This is your number: ${i}.\n<i>HTML is allowed via options</i>`;

    const wrapper = shallowMount(VueMarkdown, {
      props: {
        source,
        options: { html: true }, // enable HTML rendering
      },
    });

    // Check that the heading is rendered
    expect(wrapper.html()).toContain("<h1>This is a markdown heading</h1>");
    expect(wrapper.html()).toContain(`<h2>This is your number: ${i}.</h2>`);
    expect(wrapper.html()).toContain("<i>HTML is allowed via options</i>");
  });

  it("escapes HTML when html option is false", () => {
    const wrapper = shallowMount(VueMarkdown, {
      props: {
        source: "<b>bold</b>",
        options: { html: false },
      },
    });

    // HTML tags should be escaped
    expect(wrapper.html()).toContain("&lt;b&gt;bold&lt;/b&gt;");
  });
});
