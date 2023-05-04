import '@styles/app.scss';

/* Auto Imports */
const srcContext = require.context(
    '@',
    true,
    /\.(runtime|asset|style)\.(.*?)$/
);
srcContext.keys().forEach(srcContext);

const templatesContext = require.context(
    '@root/templates',
    true,
    /\.(runtime|asset|style)\.(.*?)$/
);
console.log('templatesContext', templatesContext .keys());
templatesContext.keys().forEach(templatesContext);