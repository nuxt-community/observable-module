# @nuxtjs/observable

## Setup

```
npm i @nuxtjs/observable --save
```

## Usage

In `nuxt.config.js`:

```js
export default {
  modules: [
    '@nuxtjs/observable'
  ]
}
```

Add state to `<srcDir>/state.js`:

```js
export default () => ({
  foobar: 123
})
```

Access and modify directly (no commits, no dispatches) `$state` available in `ctx` or `this`.

## Credits

Nuxt.js Team
