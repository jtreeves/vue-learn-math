import { 
    Router,
    useRouter
} from 'vue-router'
import { 
    LandingPagesComposable 
} from '@/interfaces'
import resetGame from '@/utilities/resetGame'

function useLandingPages(): LandingPagesComposable {
    const router: Router = useRouter()

    function goHome(): void {
        router.push('/home')
    }

    function playGame(): void {
        resetGame()
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
