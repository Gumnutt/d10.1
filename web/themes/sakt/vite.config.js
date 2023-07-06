import liveReload from "vite-plugin-live-reload"
import vue from "@vitejs/plugin-vue"
import { splitVendorChunkPlugin } from "vite"
import { glob, globSync, globStream, globStreamSync, Glob } from 'glob'

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
    {
      name: 'my-glob-plugin',
      // Add the globSync logic here
      enforce: 'pre',
      transform(code, id) {
        // Use globSync to retrieve file paths based on a pattern
        const fileMatches = glob.sync('./components/**/*.pcss');
        console.log('File matches:', fileMatches);

        // Modify the code or do other operations based on the file paths
        // ...

        // Return the modified code
        return {
          code,
          map: null, // If you don't have a source map, set it to null
        };
      },
    },
  ],

  // resolve: { alias: { vue: "vue/dist/vue.esm-bundler.js" } },

  build: {
    // generate manifest.json in outDir
    manifest: false,
    emptyOutDir: true,
    rollupOptions: {
      // overwrite default .html entry
      input: {
        components: "./components/**/*.pcss",
        main: "/src/main.js",
      },
      output: {
        assetFileNames: (assetInfo) => {
          console.log(assetInfo);
          //const inputName = Object.keys(assetInfo.rollupEntrypoint)[0]; // Get the input name associated with the output file
          if (assetInfo.name === `${inputName}.css`) {
            // Output the component CSS file to the component-specific directory
            return `components/${inputName}/${assetInfo.name}`;
          } else {
            // Output other files (main.pcss, assets) to the standard dist directory
            return `dist/${assetInfo.name}`;
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
