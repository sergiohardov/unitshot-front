import {defineConfig} from 'vite'
import vituum from 'vituum'
import twig from '@vituum/vite-plugin-twig'
import postcss from '@vituum/vite-plugin-postcss'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'
import fs from 'fs'
function injectAssetsIntoComponents() {
    let isBuild = false

    return {
        name: 'inject-assets-into-components',
        configResolved(config) {
            isBuild = config.command === 'build'
        },
        transformIndexHtml: {
            order: 'post',
            handler(html, ctx) {
                const id = ctx.path || ctx.filename || ''
                const isComponent = id.includes('/components/') || id.includes('/blocks/')

                if (!isComponent) return html

                const style = isBuild ? '<link rel="stylesheet" href="/css/main.css">' : ''
                const script = isBuild ? '<script src="/js/main.js"></script>' : '<script src="/src/scripts/main.js" type="module"></script>'

                let result = `<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/>${style}</head>`
                result += '<body>'
                result += html
                result += script
                result += '</body>'

                return result
            }
        }
    }
}

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
                path.resolve(__dirname, './src/data/components/*.json'),
                path.resolve(__dirname, './src/data/blocks/*.json'),
                path.resolve(__dirname, './src/data/pages/*.json'),
            ],
            pages: {
                dir: path.resolve(__dirname, './src/data/'),
            },
        }),
        twig({
            namespaces: {
                'components'    : 'src/twig/components',
                'blocks'        : 'src/twig/blocks',
                'pages'         : 'src/twig/pages',
                'layouts'       : 'src/twig/layouts',
            },
            functions: {
                svg_icon: (name) => {
                    const filePath = path.resolve(__dirname, `./src/images/icons/${name}.svg`)
                    try {
                        return fs.readFileSync(filePath, 'utf-8')
                    } catch (e) {
                        return `<!-- svg not found: ${name} -->`
                    }
                },
                // TODO: учесть случай когда попадает не число (строкой/числом)
                // TODO: сделать валюту динамической
                format_price: (price) => Number(price).toLocaleString('ru-RU') + ' грн.',
                home_url: () => '/pages/home.html'
            }
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
        injectAssetsIntoComponents()
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
