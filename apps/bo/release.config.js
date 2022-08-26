const name = 'bo';
const srcRoot = `apps/${name}`;
const pathToRepoRoot = '../..';

module.exports = {
  extends: `${pathToRepoRoot}/release.config.base.js`,
  pkgRoot: `${pathToRepoRoot}/dist/${srcRoot}`,
  npmPublish: false,
  tagFormat: name + '-v${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    [
      '@semantic-release/changelog',
      {
        changelogFile: `CHANGELOG.md`,
      },
    ],
    [
      '@semantic-release-plus/docker',
      {
        name: 'ghcr.io/blackpc/bo',
        registry: 'ghcr.io',
        skipLogin: true,
        publishChannelTag: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [`CHANGELOG.md`],
      },
    ],
  ],
};
