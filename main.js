const github = require('@actions/github');

// const packageJson = require(`${github.workspace}/package`);
// const packageLockJson = require(`${github.workspace}/package-lock`);

console.log(JSON.stringify(github));
console.log('----------')
console.log(github.workspace);
// console.log(packageJson);
