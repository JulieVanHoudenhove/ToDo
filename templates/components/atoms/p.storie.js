import {TwigComponent} from "@/twig";

const TwigPath = require('./p.html.twig').default;
export default {
    title: 'Atoms/P',
    argTypes: {
        p_text: {
            control: 'text',
            defaultValue: 'p Text',
        }
    }
}

const Template = (args) => ({
    components: {
        P: TwigComponent(TwigPath, {
            ...args,
        }),
    },
    template: `
    <Suspense>
    <P />
    </Suspense>`,
})

export const Default = Template.bind({});
Default.args = {
    p_text: 'p Text',
};