import {TwigComponent} from "@/twig";

const TwigPath = require('./h2.html.twig').default;
export default {
    title: 'Atoms/H2',
    argTypes: {
        h2_text: {
            control: 'text',
            defaultValue: 'H2 Text',
        }
    }
}

const Template = (args) => ({
    components: {
        H2: TwigComponent(TwigPath, {
            ...args,
        }),
    },
    template: `
    <Suspense>
    <H2 />
    </Suspense>`,
})

export const Default = Template.bind({});
Default.args = {
    h2_text: 'H2 Text',
};