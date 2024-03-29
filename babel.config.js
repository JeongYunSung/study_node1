module.exports = {
    presets: [
        '@babel/preset-typescript', [
            '@babel/preset-env', {
                useBuiltIns: 'usage',
                corejs: {
                    version: 2
                },
                targets: {
                    chrome: '79',
                    ie: '11'
                }
            }
        ]
    ]
}