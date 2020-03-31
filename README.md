# vue-markdown-render

`vue-markdown-render` is a simple and lightweight wrapper for [markdown-it](https://markdown-it.github.io/) with full TypeScript support.

## Usage

```vue
<template>
  <div>
    <vue-markdown :source="src">
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
