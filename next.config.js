const optimizedImages = require('next-optimized-images')


let config = {
    // exportPathMap: () => ({
    //     '/en/blog': {
    //         page: '/[lang]/blog'
    //     },
    //     '/fr/blog': {
    //         page: '/[lang]/blog'
    //     },
    //     '/en/': {
    //         page: '/[lang]'
    //     },
    //     '/fr/': {
    //         page: '/[lang]'
    //     },
    // }),
    webpack: (cfg) => {
        cfg.module.rules.push({
            test: /\.md$/,
            loader: 'frontmatter-markdown-loader',
            options: {
                mode: ['react-component']
            }
        })

        cfg.node = {
            'fs': 'empty'
        };
        return cfg;
    }

}

config = optimizedImages(config);

module.exports = config;