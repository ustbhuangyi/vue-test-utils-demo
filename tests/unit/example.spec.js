import { mount } from '@vue/test-utils'
import App from '@/App.vue';

describe('App.vue', () => {
  it('pass hClass to HelloWorld', () => {
    const hClass = 'abc'
    const wrapper = mount(App, {
      propsData: { hClass }
    })
    const hello = wrapper.find('.hello')
    expect(hello.classes(hClass)).toBe(true)
  })
})
