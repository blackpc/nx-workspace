const name = 'bo-core';
const srcRoot = `libs/${name}`;
const pathToRepoRoot = '../..';

module.exports = {
  extends: `${pathToRepoRoot}/release.config.base.js`,
  pkgRoot: `${pathToRepoRoot}/dist/${srcRoot}`,
  tagFormat: name + '-v${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: `CHANGELOG.md`,
      },
    ],
    ['@semantic-release/npm'],
    [
      '@semantic-release/git',
      {
        assets: [`package.json`, `CHANGELOG.md`],
      },
    ],
  ],
};
