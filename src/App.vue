<template>
    <div id="app">
        <p class="nice-border"></p>
        <nav>
            <ul>
                <li><router-link to="/">Shin News</router-link></li>
                <li><router-link to="/new">New</router-link></li>
                <li><router-link to="/past">Past</router-link></li>
                <li><router-link to="/comments">Comments</router-link></li>
                <li><router-link to="/ask">Ask</router-link></li>
                <li><router-link to="/about">About</router-link></li>
            </ul>
        </nav>
        <router-view />
    </div>
</template>

<style lang="scss"></style>
