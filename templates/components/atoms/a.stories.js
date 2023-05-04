import {TwigComponent} from "@/twig";

const TwigPath = require('./a.html.twig').default;
export default {
    title: 'Atoms/A',
    argTypes: {
        a_modifiers: {
            control: 'text',
            defaultValue: ['uncomplete'],
        }
    }
}

const Template = (args) => ({
    components: {
        A: TwigComponent(TwigPath, {
            ...args,
        }),
    },
    template: `
    <Suspense>
    <A />
    </Suspense>`,
})

export const Default = Template.bind({});
Default.args = {
    a_modifiers: ['uncomplete'],
};