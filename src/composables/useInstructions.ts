import {
    ref, 
    Ref 
} from 'vue'
import { 
    RouteLocationNormalizedLoaded, 
    Router, 
    useRoute, 
    useRouter
} from 'vue-router'
import { 
    InstructionsComposable 
} from '@/interfaces'

function useInstructions(): InstructionsComposable {
    const router: Router = useRouter()
    const route: RouteLocationNormalizedLoaded = useRoute()
    const currentStep: string = String(route.params.step)
    const step: Ref<number> = ref(parseInt(currentStep))

    function loadNext(): void {
        const nextStep: number = step.value + 1
        const nextRoute: string = '/instructions/' + nextStep

        step.value = nextStep
        router.push(nextRoute)
    }

    function loadPrevious(): void {
        const previousStep: number = step.value - 1
        const previousRoute: string = '/instructions/' + previousStep

        step.value = previousStep
        router.push(previousRoute)
    }

    return { 
        step,
        loadNext,
        loadPrevious
    }
}

export default useInstructions
