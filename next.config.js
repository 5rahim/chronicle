const withTM = require('next-transpile-modules')(['react-icons/all.js', 'react-icons']); // pass the modules you would like to see transpiled

module.exports = withTM();
