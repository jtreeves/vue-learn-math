<template>
    <article>
        <h2>
            Feedback
        </h2>

        <p>
            After you answer each question, you'll get feedback on whether or not it was correct. If you got it correct, you'll see a green message. In contrast, if you got it wrong, you'll see a red message.
        </p>

        <div>
            <img
                alt="Feedback for Correct Answer"
                src="@/assets/correct.png"
            />

            <img
                alt="Feedback for Incorrect Answer"
                src="@/assets/incorrect.png"
            />
        </div>

        <p>
            If you get it wrong, the app will tell you what the correct answer actually was. You can also look at the borders around the answer choices to double check what you originally inputted. Your original incorrect choice will have a red border, while the correct answer will have a green border.
        </p>

        <p>
            After reviewing the feedback, click the Next button to move on to the next question.
        </p>

        <p>
            Want feedback at any point during game play? Check out the score board in the header! It displays your current score along with how many strikes you've accumulated. Most importantly, it tells you how much time you have left on a given question.
        </p>
    </article>
</template>

<style scoped>
    div {
        display: flex;
        gap: 50px;
        justify-content: center;
    }

    img {
        height: 500px;
        width: 400px;
        object-fit: cover;
    }

    @media screen and (max-width: 750px) {
        div {
            flex-direction: column;
            gap: 30px;
        }
    }
</style>
