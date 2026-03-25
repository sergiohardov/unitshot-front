import {defineConfig} from 'vite'
import vituum from 'vituum'
import twig from '@vituum/vite-plugin-twig'
import postcss from '@vituum/vite-plugin-postcss'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@images'   : path.resolve(__dirname, './src/images/'),
            '@fonts'    : path.resolve(__dirname, './src/fonts/'),
            '@styles'   : path.resolve(__dirname, './src/styles/'),
            '@scripts'  : path.resolve(__dirname, './src/scripts/'),
        }
    },
    plugins: [
        vituum({
            pages: {
                dir: path.resolve(__dirname, './src/twig/pages'),
            },
        }),
        twig({
            namespaces: {
                'components'    : 'src/twig/components',
                'blocks'        : 'src/twig/blocks',
                'pages'         : 'src/twig/pages',
                'layouts'       : 'src/twig/layouts',
            },
        }),
        postcss({
            autoprefixer: {
                overrideBrowserslist: ['last 2 versions', '>1%']
            }
        }),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/twig/**/*.twig',
                    dest: '',
                    rename: { stripBase: 1 }
                },

            ]
        })
    ],
    build: {
        rolldownOptions: {
            input: ['./src/twig/pages/**/*.twig'],
            output: {
                // JS-файлы → папка js/
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name].js',
                // Стили, шрифты, картинки → по типу
                assetFileNames: (assetInfo) => {
                    const ext = assetInfo.name?.split('.').pop()

                    if (/css/.test(ext))                            return 'css/[name][extname]'
                    if (/png|jpe?g|svg|gif|webp|ico/.test(ext))     return 'images/[name][extname]'
                    if (/woff2?|ttf|eot|otf/.test(ext))             return 'fonts/[name][extname]'

                    // всё остальное в assets
                    return 'assets/[name][extname]'
                }
            }
        }
    }
})
