const name = 'bo';
const srcRoot = `apps/${name}`;
const pathToRepoRoot = '../..';

module.exports = {
  extends: `${pathToRepoRoot}/release.config.base.js`,
  pkgRoot: `${pathToRepoRoot}/dist/${srcRoot}`,
  npmPublish: false,
  tagFormat: name + '-v${version}',
  plugins: [
    [
      '@semantic-release-plus/docker',
      {
        name: 'ghcr.io/igor-enso/bo',
        registry: 'ghcr.io',
        skipLogin: true,
        publishChannelTag: false,
      },
    ],
  ],
};
