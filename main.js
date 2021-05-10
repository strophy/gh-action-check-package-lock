const core = require('@actions/core');
const github = require('@actions/github');
const workspace = process.env.GITHUB_WORKSPACE;
// const packageJson = require(`${github.workspace}/package`);
// const packageLockJson = require(`${github.workspace}/package-lock`);

console.log(JSON.stringify(github));
console.log('----------');
console.log(github.workspace);
console.log('----------');
console.log(JSON.stringify(core));
console.log('----------');
console.log(workspace);
console.log('----------');
console.log(process.env);
// console.log(packageJson);
