module.exports = {

    indexPath: 'index.html',

    assetsDir: '',
    outputDir: 'dist',

    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    filenameHashing: true,

    lintOnSave: false,

    runtimeCompiler: false,
    productionSourceMap: true,

    configureWebpack: {
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    },


    pwa: {
        name: 'TRIANON | MARROQUINERIA 100% COLOMBIANA',
        themeColor: '#282828',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: './src/config/sw/service-worker.js',
            // ...other Workbox options...
        }
    }


}