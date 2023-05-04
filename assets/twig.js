// @ts-ignore
import { v4 as uuid } from 'uuid';
// @ts-ignore
import Twig from 'twig';

Twig.extendFunction('uuid', () => {
    return uuid();
});

Twig.extendFunction('asset', (value) => {
    return '';
    // const imgName = value.split('/')[value.split('/').length - 1];
    // const asset = require(`@/assets/${ imgName }`);
    //
    // if (asset) {
    //     return require(`@/assets/${ imgName }`);
    // }
    //
    // return 'https://via.placeholder.com/1000';
});

Twig.extendFunction('filter', (value) => {
    console.log(value);
});

Twig.extendFunction('path', (value) => {
    return value;
});

Twig.extendFunction('date', (value) => {
    if (value === 'now') {
        const date = new Date();
        return `${ date.getFullYear() }/${ date.getMonth() }/${ date.getDay() }`;
    }

    return value;
});

Twig.extendFilter('trans', (value) => {
    return value;
});

Twig.extendFilter('trans_edit', (value) => {
    return value;
});

Twig.extendFilter('trans_editor', (value) => {
    return value;
});

// /* removes cached requests from include/embed/... */
Twig.cache(false);
//
// /* adds files to server */
const TwigFiles = require.context('@root/templates', true, /\.twig$/);
TwigFiles.keys().forEach(TwigFiles);
//
// /* enables HMR for root and nested twig files
//  * (file-loader doesn't detect changes for some reasons so we import them as raw strings) */
const TwigFilesRaw = require.context('@root/templates?raw', true, /\.twig$/);
TwigFilesRaw.keys().forEach(TwigFilesRaw);
//
// /* Twig configuration */
const renderTwig = (path, args = {}) => {
    console.log('renderTwig', path, args);
    return new Promise((resolve) => {
        Twig.twig({
            namespaces: { AppFront: 'templates/' },
            href: path,
            load: (template) => {
                resolve(template.render(args));
            },
        });
    });
};

const TwigComponent = (twigPath, args = {}) => ({
    async setup() {
        const html = await renderTwig(twigPath, { ...args });
        return { html };
    },
    template: `
    <div style="height: 100%" v-html="html"></div>`,
});

export { renderTwig, TwigComponent };