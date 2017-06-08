const replace = require('replace-in-file');
const pkg = require("../package.json");
const buildVersion = pkg.version;
const options = {
    files: [
      'src/environments/environment.ts',
      'src/environments/environment.prod.ts',
    ],
    from: /version: '(.*)'/g,
    to: "version: '"+ buildVersion + "'",
    allowEmptyPaths: false,
};

try {
    let changedFiles = replace.sync(options);
    // if (changedFiles == 0) {
    //     throw "Please make sure that file '" + options.files + "' has \"version: ''\"";
    // }
    console.log('Build version set: ' + buildVersion);
}
catch (error) {
    console.error('Error occurred:', error);
    throw error
}
