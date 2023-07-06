import liveReload from "vite-plugin-live-reload"
import vue from "@vitejs/plugin-vue"
import { splitVendorChunkPlugin } from "vite"
import { glob, globSync, globStream, globStreamSync, Glob } from 'glob'

//console.log(glob.sync('components/**/*.pcss'))

function getComponents() {
  const components = glob.sync('components/**/*.pcss')
  const componentsObj = {}
  for (const component of components) {
    const componentName = component.split('/')[1]
    componentsObj[componentName] = component
  }
  return componentsObj
}

function getComponentName(assetInfo){
  const inputName = assetInfo.name.split('.')[0]
  return inputName
}

export default {
  plugins: [
    // vue({
    //   compilerOptions: {
    //     isCustomElement: (tag) => {
    //       return tag.startsWith("ds")
    //     },
    //   },
    // }),
    liveReload(__dirname + "/**/*.(php|inc|theme|twig|js|css|pcss)"),
    // splitVendorChunkPlugin(),
  ],

  // resolve: { alias: { vue: "vue/dist/vue.esm-bundler.js" } },

  build: {
    // generate manifest.json in outDir
    manifest: false,
    emptyOutDir: true,
    rollupOptions: {
      // overwrite default .html entry
      input: {
        ...getComponents(),
        main: '/src/main.js',
      },
      output: {
        dir: './',
        assetFileNames: (assetInfo) => {
          const inputName = getComponentName(assetInfo);
          if (assetInfo.name === 'main.css') {
            console.log('Generic: ' + assetInfo.name)
            return `dist/${assetInfo.name}`;
          } else {

            return `components/${inputName}/${assetInfo.name}`;
          }
        }
      },
    },
  },

  server: {
    // required to load scripts from custom host
    cors: true,

    // we need a strict port to match on PHP side
    // change freely, but update on PHP to match the same port
    strictPort: true,
    port: 12321,
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
  },
}