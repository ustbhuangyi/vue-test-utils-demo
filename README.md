# vue-test-utils-demo

## Project setup
```
npm install
```

### Run your unit tests
```
npm run test:unit
```

HelloWorld component should accept `abc` class when it passed as the example shows.

But since the vue-test-utils does not copy abstract property, the `this.$parnet` from HelloWorld component will treat Transition component instance as it's parent instance，so `this.$parnet.hClass` will be `undefined`, which is unexpected.

