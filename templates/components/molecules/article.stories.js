import {TwigComponent} from "@/twig";

const TwigPath = require('./article.html.twig').default;
export default {
    title: 'Molecules/Article',
    argTypes: {
        title_text: {
            control: 'text',
            defaultValue: 'Title Text',
        },
        title_tag: {
            control: 'text',
            defaultValue: 'h3',
        },
        title_modifiers: {
            control: 'text',
            defaultValue: ['xs'],
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
    Title_tag: 'h3',
    Title_modifiers: ['xs'],
};