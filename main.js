const core = require('@actions/core');

const workspace = process.env.GITHUB_WORKSPACE;

const packageJson = require(`${workspace}/package`);
const packageLockJson = require(`${workspace}/package-lock`);

if (packageJson.name !== packageLockJson.name) {
  core.setFailed('Package names do not match');
}

if (packageJson.version !== packageLockJson.version) {
  core.setFailed('Package versions do not match');
}
