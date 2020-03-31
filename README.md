# vue-markdown-it

## Usage

```vue
<template>
  <div>
    <vue-markdown :source="src">
  </div>
</template>

<script lang="ts">
import VueMarkdown from 'vue-markdown-it'

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
