import {TwigComponent} from "@/twig";

const TwigPath = require('./form.html.twig').default;
export default {
    title: 'Molecules/Form',
    argTypes: {
        button_text: {
            control: 'text',
            defaultValue: 'button Text',
        }
    }
}

const Template = (args) => ({
    components: {
        Article: TwigComponent(TwigPath, {
            ...args,
        }),
    },
    template: `
    <Suspense>
    <Article />
    </Suspense>`,
})

export const Default = Template.bind({});
Default.args = {
    button_text: '+',
};