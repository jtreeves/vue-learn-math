import { 
    Router,
    useRouter
} from 'vue-router'
import { 
    LandingPagesComposable 
} from '@/interfaces'

function useLandingPages(): LandingPagesComposable {
    const router: Router = useRouter()

    function goHome(): void {
        router.push('/home')
    }

    function playGame(): void {
        router.push('/question')
    }

    function readInstructions(): void {
        router.push('/instructions/1')
    }

    return {
        goHome,
        playGame,
        readInstructions
    }
}

export default useLandingPages
