module.exports = {
    srcDir: "client",
    mode: "universal",
    target: 'static',
    server: {
        port: 8081, // default: 3000
        // host: '0.0.0.0' // default: localhost
    },
    /*
     ** Headers of the page
     */
    head: {
        title: "Home",
        titleTemplate: "My Nuxt SSR | %s",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#f00" },
    // loading: false,
    /*
     ** Global CSS
     */
    css: [
        // "~assets/main.css",
        { src: '~assets/main.scss', lang: 'scss' }
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        "~plugins/RegisterModule",
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ["@nuxtjs/router"],
    routerModule: {
        fileName: "router"
    },
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    reouter: {
        base: '/testNuxt/'
    },
    generate: {
        // dir: 'docs',
        subFolders: false
    }
};