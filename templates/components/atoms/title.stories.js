import {TwigComponent} from "@/twig";

const TwigPath = require('./title.html.twig').default;
export default {
    title: 'Atoms/Title',
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
            defaultValue: ['uncomplete'],
        },
    }
}

const Template = (args) => ({
    components: {
        Title: TwigComponent(TwigPath, {
            ...args,
        }),
    },
    template: `
    <Suspense>
    <Title />
    </Suspense>`,
})

export const Default = Template.bind({});
Default.args = {
    Title_text: 'Title Text',
    Title_tag: 'h2',
    Title_modifiers: ['uncomplete'],
};