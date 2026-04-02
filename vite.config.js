import {defineConfig} from 'vite'
import vituum from 'vituum'
import twig from '@vituum/vite-plugin-twig'
import postcss from '@vituum/vite-plugin-postcss'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

export default defineConfig({
    server: {
        watch: {
            ignored: ['**/json-server-db.json']
        }
    },
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
            input: [
                path.resolve(__dirname, './src/twig/pages'),
            ],
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
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                // Настройка для JS файлов (точки входа)
                entryFileNames: `js/[name].js`,
                // Настройка для чанков (разделенных файлов)
                chunkFileNames: `js/[name].js`,
                // Настройка для CSS, изображений и шрифтов
                assetFileNames: (assetInfo) => {
                    const ext = assetInfo.name?.split('.').pop()

                    if (/css/.test(ext))                            return 'css/[name][extname]'
                    if (/png|jpe?g|svg|gif|webp|ico/.test(ext))     return 'images/[name][extname]'
                    if (/woff2?|ttf|eot|otf/.test(ext))             return 'fonts/[name][extname]'

                    // всё остальное в assets
                    return 'assets/[name][extname]'
                },
            },
        },
    },
})
