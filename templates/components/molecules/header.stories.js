import {TwigComponent} from "@/twig";

const TwigPath = require('./header.html.twig').default;
export default {
    title: 'Molecules/Header',
    argTypes: {
        title_text: {
            control: 'text',
            defaultValue: 'Title Text',
        },
        title_tag: {
            control: 'text',
            defaultValue: 'h1',
        },
        title_modifiers: {
            control: 'text',
            defaultValue: ['lg'],
        },
    }
}

const Template = (args) => ({
    components: {
        Header: TwigComponent(TwigPath, {
            ...args,
        }),
    },
    template: `
    <Suspense>
    <Header />
    </Suspense>`,
})

export const Default = Template.bind({});
Default.args = {
    Title_text: 'Title Text',
    Title_tag: 'h1',
    Title_modifiers: ['lg'],
};