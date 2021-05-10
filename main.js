const core = require('@actions/core');
const github = require('@actions/github');

const packageJson = require('${{ github.workspace }}/package');
const packageLockJson = require('${{ github.workspace }}./package-lock');

console.log(packageJson);
