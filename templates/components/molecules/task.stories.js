import {TwigComponent} from "@/twig";

const TwigPath = require('./task.html.twig').default;
export default {
    title: 'Molecules/Task',
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
            defaultValue: ['uncomplete', 'md'],
        },
        a_modifiers: {
            control: 'text',
            defaultValue: ['uncomplete'],
        },
        p_text: {
            control: 'text',
            defaultValue: 'p Text',
        }
    }
}

const Template = (args) => ({
    components: {
        Task: TwigComponent(TwigPath, {
            ...args,
        }),
    },
    template: `
    <Suspense>
    <Task />
    </Suspense>`,
})

export const Default = Template.bind({});
Default.args = {
    Title_text: 'Title Text',
    Title_tag: 'h2',
    Title_modifiers: ['uncomplete', 'md'],
    a_modifiers: ['uncomplete'],
    p_text: 'p Text',
};