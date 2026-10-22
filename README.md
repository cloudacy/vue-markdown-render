# vue-markdown-render

`vue-markdown-render` is a simple and lightweight wrapper for [markdown-it](https://markdown-it.github.io/) with full TypeScript support.

## Usage

```vue
<template>
  <div>
    <vue-markdown :source="src" />
  </div>
</template>

<script lang="ts">
import VueMarkdown from 'vue-markdown-render'

export default defineComponent({
  name: 'MyComponent',
  components: {
    VueMarkdown
  },
  setup(props, ctx) {
    const src = ref('# header')

    return {
      src
    }
  }
})
</script>
```

### Options

[markdown-it options](https://github.com/markdown-it/markdown-it#init-with-presets-and-options) can be passed as an object into the VueMarkdown component:

```vue
 <vue-markdown :source="src" :options="options" />
```

### Plugins

[markdown-it](https://github.com/markdown-it/markdown-it#plugins-load) compatible simple plugins can be passed as an array into the VueMarkdown component. Example using [MarkdownItAnchor](https://www.npmjs.com/package/markdown-it-anchor)
```vue
<template>
  <vue-markdown :source="markdown" :plugins="plugins" />
</template>

<script setup>
import VueMarkdown from 'vue-markdown-render'
import MarkdownItAnchor from 'markdown-it-anchor';

const plugins = [MarkdownItAnchor];
</script>
```

## Migrating to v3

This package uses [markdown-it v15](https://github.com/markdown-it/markdown-it). If you're upgrading from v2:

- Browser usage remains supported. For Node.js environments, markdown-it's `entities` dependency declares a minimum of Node.js 20.19
- Remove `@types/markdown-it` if it was installed for this package
- With `options.linkify: true`, bare domains such as `example.com` are no longer linked by default. URLs with a protocol such as `https://example.com` still work. To restore bare-domain linking, pass a plugin that calls `md.linkify.set({ fuzzyLink: true })`
- Use plugins compatible with markdown-it v15.X. Internal imports such as `markdown-it/lib/*` are no longer available; plugin authors can use the static classes exposed by `MarkdownIt`, such as `MarkdownIt.Token`
