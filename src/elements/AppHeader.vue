<template>
    <header>
        <router-link to='/home'>
            <img
                alt='Rubiks Cube'
                src='@/assets/rubiks.jpg'
            >
        </router-link>

        <router-link to='/home'>
            <span>
                Learn Math
            </span>
        </router-link>

        <nav>
            <ul>
                <li>
                    <router-link to='/home'>
                        Home
                    </router-link>
                </li>

                <li>
                    <router-link to='/question'>
                        Question
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    header {
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: 0 20px;
        align-items: center;
        height: 100px;
        gap: 20px;
    }

    img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }

    span {
        font-size: 50px;
    }

    nav {
        margin-left: auto;
    }

    ul {
        display: flex;
        gap: 10px;
    }

    ul li {
        display: inline-flex;
    }

    a:hover {
        font-weight: bold;
    }
</style>
