const core = require('@actions/core');

const workspace = process.env.GITHUB_WORKSPACE;

const packageJson = require(`${workspace}/package`);
const packageLockJson = require(`${workspace}/package-lock`);

try {
  packageJson.name === packageLockJson.name;
  packageJson.version === packageLockJson.version;
} catch (error) {
  core.setFailed(error.message);
}
