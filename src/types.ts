import {
    ExtractPropTypes
} from 'vue'

type ExtractedProps = Readonly<
    ExtractPropTypes<any>
>

type Emitter = {
    (event: string): void
}

export type {
    ExtractedProps,
    Emitter
}
