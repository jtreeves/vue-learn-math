import { Config } from '@jest/types'

const config: Config.InitialOptions = {
    verbose: true,
    collectCoverage: true,
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    testMatch: ['**/tests/**/*.spec.[jt]s?(x)'],
    setupFilesAfterEnv: ['<rootDir>/tests/index.ts']
}

export default config
