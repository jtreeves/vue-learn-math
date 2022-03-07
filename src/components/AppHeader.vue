<template>
    <header>
        <img
            alt='Rubiks Cube'
            src='@/assets/rubiks.jpg'
        >

        <span>
            Learn Math
        </span>

        <nav>
            <ul>
                <li>
                    <router-link to='/'>
                        Home
                    </router-link>
                </li>

                <li>
                    <router-link to='/about'>
                        About
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
        padding: .5rem 1rem;
        align-items: center;
    }

    img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }

    span {
        margin-left: 1rem;
        font-size: 50px;
    }

    nav {
        margin-left: auto;
    }

    ul {
        list-style: none;
    }

    ul li {
        display: inline-flex;
        margin-left: 1rem;
    }
</style>
