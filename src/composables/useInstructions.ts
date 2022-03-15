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
    const route: RouteLocationNormalizedLoaded = useRoute()
    const router: Router = useRouter()
    const step: Ref<string> = ref(String(route.params.step))
    const currentStep: number = parseInt(step.value)

    function loadNext(): void {
        const nextStep: number = currentStep + 1
        const nextString: string = String(nextStep)
        const nextRoute: string = '/instructions/' + nextString

        step.value = nextString
        router.push(nextRoute)
    }

    function loadPrevious(): void {
        const previousStep: number = currentStep - 1
        const previousString: string = String(previousStep)
        const previousRoute: string = '/instructions/' + previousString

        step.value = previousString
        router.push(previousRoute)
    }

    function goHome(): void {
        router.push('/home')
    }

    function startGame(): void {
        router.push('/question')
    }

    return { 
        step,
        loadNext,
        loadPrevious,
        goHome,
        startGame
    }
}

export default useInstructions
