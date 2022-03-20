# Math Attack!

*Repository for the [Math Attack!](https://vue-math-attack.netlify.app) online game*

**Contents**

1. [About](https://github.com/jtreeves/vue-learn-math#about)
2. [Installation](https://github.com/jtreeves/vue-learn-math#installation)
3. [Features](https://github.com/jtreeves/vue-learn-math#features)
4. [Views](https://github.com/jtreeves/vue-learn-math#views)
5. [Code Examples](https://github.com/jtreeves/vue-learn-math#code-examples)
6. [Testing](https://github.com/jtreeves/vue-learn-math#testing)
7. [Future Goals](https://github.com/jtreeves/vue-learn-math#future-goals)

## About

This is a simple online game for reviewing basic arithmetic concepts. It's written in the **TypeScript** dialect of JavaScript, and it uses the **Vue** framework for a modern user experience.

## Installation

### Create Local Repository

1. Fork and clone this repository to your local computer
2. Run `npm i` to install all dependencies locally (if you run into conflicts with module versions, try `npm i --legacy-peer-deps`)

### Run App Locally

1. Run `npm run serve` within your local directory
2. View the live version of the site at `http://localhost:8080`

Alternatively, you may use the live version of the [Math Attack!](https://vue-math-attack.netlify.app) app, deployed via Netlify

## Features

- Fully functional, playable game with win and lose conditions
- Unlimited question bank since questions generated dynamically instead of being accessed statically
- Score board in the header, so user can easily always view their score, strikes, and remaining time
- Feedback for all questions to inform users of correct answers before moving on to a new question
- Routing for separate pages to move beyond SPA basics
- Native storage for state management via Vue's Reactivity API
- Test suites for every major file

## Views

**Home Page**
![Home Page](/public/images/home.png)

**Instructions Page**
![Instructions Page](/public/images/instructions.png)

**Question Page in Action**
![Question Page in Action](/public/images/question.png)

**Question Page with Feedback**
![Question Page with Feedback](/public/images/feedback.png)

**Error Page**
![Error Page](/public/images/error.png)

## Code Examples

**Helper function to create a new question**
```typescript
function generateQuestion(
    level: number,
    type: string,
    previous?: string
): IQuestion {
    const symbol: string = selectSymbol(type)
    const pair: IPair = generatePair(level, type)
    const answer: number = generateAnswer(pair.firstNumber, pair.secondNumber, type)
    const choices: number[] = generateChoices(answer, pair.firstNumber, pair.secondNumber, type)
    const question: string = `${pair.firstNumber} ${symbol} ${pair.secondNumber}`

    let result: IQuestion = {
        question,
        choices
    }

    if (
        previous === result.question || 
        Math.floor(answer) !== answer
    ) {
        result = generateQuestion(level, type, previous)
    }

    return result
}
```

**Store to simplify state management across app with accessor and mutators**
```typescript
export default reactive(<IScore>{
    value: 0,
    increment(points: number) {
        this.value += points
    },
    decrement(points: number) {
        this.value -= points
    },
    reset() {
        this.value = 0
    }
})
```

**Custom composable to simplify navigation**
```typescript
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
```

**Vue component with template to dynamically display content**
```vue
<template>
    <article>
        <p :class="props.styling">
            {{ feedback }}
        </p>

        <GenericButton 
            :text="buttonText"
            @click="handleClick"
        />
    </article>
</template>
```

## Testing

This repository uses **Jest** for testing. It should be one of the dev dependencies initially installed.

- The app features 252 passing automated tests
- To check them, run `npm run test`

## Future Goals

- More tests to increase code coverage, handle edge cases, and test UI's functionality, which may require implementing Cypress for integration tests
- Improve styling for a more enjoyable user experience
