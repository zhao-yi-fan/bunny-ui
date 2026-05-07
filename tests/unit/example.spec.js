import { expect } from 'chai'
import { mount, shallowMount } from '@vue/test-utils'
import Button from '@/packages/button/button.vue'
import ButtonGroup from '@/packages/button-group/button-group.vue'
import Icon from '@/packages/icon/icon.vue'
import Input from '@/packages/input/input.vue'
import Dialog from '@/packages/dialog/dialog.vue'
import Tag from '@/packages/tag/tag.vue'
import Watermark from '@/packages/watermark/watermark.vue'

describe('BnButton.vue', () => {
  it('renders default slot content', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: '提交'
      }
    })

    expect(wrapper.text()).to.include('提交')
  })

  it('emits click when enabled', async () => {
    const wrapper = shallowMount(Button)

    await wrapper.trigger('click')

    expect(wrapper.emitted().click).to.have.lengthOf(1)
  })

  it('does not emit click when disabled', async () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        disabled: true
      }
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted().click).to.equal(undefined)
  })
})

describe('BnButtonGroup.vue', () => {
  it('renders children and vertical class', () => {
    const wrapper = mount(ButtonGroup, {
      propsData: {
        vertical: true
      },
      slots: {
        default: '<button>One</button><button>Two</button>'
      }
    })

    expect(wrapper.text()).to.include('One')
    expect(wrapper.classes()).to.include('is-vertical')
  })
})

describe('BnIcon.vue', () => {
  it('renders icon svg with spin class', () => {
    const wrapper = shallowMount(Icon, {
      propsData: {
        name: 'search',
        spin: true
      }
    })

    expect(wrapper.html()).to.include('<svg')
    expect(wrapper.classes()).to.include('is-spin')
  })
})

describe('BnInput.vue', () => {
  it('emits input when typing', async () => {
    const wrapper = mount(Input, {
      stubs: ['bn-icon'],
      propsData: {
        value: ''
      }
    })

    const input = wrapper.find('input')
    input.element.value = 'hello'
    await input.trigger('input')

    expect(wrapper.emitted().input[0]).to.deep.equal(['hello'])
  })

  it('clears value when clear button is clicked', async () => {
    const wrapper = mount(Input, {
      stubs: ['bn-icon'],
      propsData: {
        value: 'hello',
        clearable: true
      }
    })

    await wrapper.find('.bn-input__clear').trigger('click')

    expect(wrapper.emitted().input[0]).to.deep.equal([''])
    expect(wrapper.emitted().clear).to.have.lengthOf(1)
  })
})

describe('BnDialog.vue', () => {
  it('emits update:visible on backdrop click', async () => {
    const wrapper = mount(Dialog, {
      stubs: ['bn-icon'],
      propsData: {
        visible: true,
        title: 'Dialog'
      }
    })

    await wrapper.find('.bn-dialog__wrapper').trigger('click')

    expect(wrapper.emitted()['update:visible'][0]).to.deep.equal([false])
  })

  it('emits update:visible on escape', async () => {
    const wrapper = mount(Dialog, {
      stubs: ['bn-icon'],
      propsData: {
        visible: true
      }
    })

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted()['update:visible'][0]).to.deep.equal([false])
  })
})

describe('BnTag.vue', () => {
  it('emits close from the close button', async () => {
    const wrapper = mount(Tag, {
      stubs: ['bn-icon'],
      propsData: {
        closable: true
      },
      slots: {
        default: 'Closable'
      }
    })

    await wrapper.find('.bn-tag__close').trigger('click')

    expect(wrapper.emitted().close).to.have.lengthOf(1)
  })
})

describe('BnWatermark.vue', () => {
  it('creates watermark mask styles', () => {
    const wrapper = shallowMount(Watermark, {
      propsData: {
        content: 'Bunny'
      },
      slots: {
        default: '<div>content</div>'
      }
    })

    expect(wrapper.vm.maskStyle.backgroundImage).to.include('data:image/svg+xml')
    expect(wrapper.vm.maskStyle.opacity).to.equal(0.15)
  })
})
