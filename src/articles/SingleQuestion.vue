<template>
    <article>
        <h2>
            Questions
        </h2>

        <p>
            For each question, you must select the correct answer out of the 4 displayed choices. You only 5 seconds for each question, so don't dawdle! Don't worry, the questions only cover basic arithmetic concepts, so you'll only see questions on addition, subtraction, multiplication, and division. Also, none of the questions will contain numbers with more than 4 digits, and none of the questions cover fractions or decimals.
        </p>

        <img
            alt="Question"
            src="@/assets/question.png"
        />

        <p>
            The difficulty of each question will vary based on your previous answers. The better you do, the harder the questions will become. Get one wrong, and the next question you see should be easier.
        </p>
    </article>
</template>

<style scoped>
    img {
        height: 500px;
        width: 400px;
        object-fit: cover;
    }
</style>
