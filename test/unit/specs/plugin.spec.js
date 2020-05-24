import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { mount } from '@vue/test-utils';
import { useForm, useFormElement } from '@fext/vue-use';
import FormBuilder from 'src';
import ElFormAdatpor from 'src/el-form-adaptor';

const TestComponent = {
  template: `<div>
    <form-builder
      :form="form"
      :config="[]"
    ></form-builder>
  </div>`,

  setup() {
    const form = useForm();

    return {
      form
    };
  }
};

let wrapper = null;
let vm = null;
beforeEach(() => {
  wrapper = mount(TestComponent);
  vm = wrapper.vm;
});

afterEach(() => {
  wrapper.destroy();
});

beforeAll(() => {
  Vue.use(VueCompositionAPI);
  Vue.use(FormBuilder);
  Vue.use(ElFormAdatpor);
});

describe('vue plugin', () => {
  test('use form builder', () => {
    const component = Vue.component('form-builder');

    expect(component).toBeDefined();
  });

  test('use element form adaptor', () => {
    const component = Vue.component('el-form-adaptor');

    expect(component).toBeDefined();
  });
});
