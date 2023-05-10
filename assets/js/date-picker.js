import {createApp, ref} from 'vue/dist/vue.esm-bundler';
import {ElDatePicker} from "element-plus";

import 'element-plus/es/components/date-picker/style/css';

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-ref="datepicker"]').forEach((element) => {
        const id = element.getAttribute('data-id');
        const relatedInput = document.querySelector(`input[data-id="${id}"]`);

        const datepicker = createApp({
            setup() {
                const date = ref('');

                return {
                    date
                }
            },
            mounted() {
              this.date = relatedInput.value;
            },
            components: {
                ElDatePicker,
            },
            methods: {
                handleChange: ($date) => {
                    element.dispatchEvent(new CustomEvent('change', {detail: $date}));
                }
            },
            template: '<ElDatePicker @change="handleChange" value-format="DD/MM/YYYY" format="DD/MM/YYYY" v-model="date" type="date" placeholder="Choisissez un jour"/>'
        });
        datepicker.mount(element)
    });
});