import {TwigComponent} from "@/twig";

const TwigPath = require('./button.html.twig').default;
export default {
    title: 'Atoms/Button',
    argTypes: {
        button_text: {
            control: 'text',
            defaultValue: 'button Text',
        }
    }
}

const Template = (args) => ({
    components: {
        Button: TwigComponent(TwigPath, {
            ...args,
        }),
    },
    template: `
    <Suspense>
    <Button />
    </Suspense>`,
})

export const Default = Template.bind({});
Default.args = {
    button_text: '+',
};