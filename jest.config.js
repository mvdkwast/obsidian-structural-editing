module.exports = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    transformIgnorePatterns: ['node_modules/(?!mdast-.*?)/.*\\.js$'], //'<rootDir>/node_modules/(?!mdast-util-from-markdown/)'],
    transform: {
        '^.+\\.js?$': require.resolve('babel-jest')
    },
};
