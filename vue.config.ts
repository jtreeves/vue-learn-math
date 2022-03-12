import { defineConfig } from '@vue/cli-service'

const config = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Learn Math'
                return args
            })
    }
})

export default config
