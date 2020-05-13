<template>
    <li class="story" v-if="story">
        <div class="story-title">
            <h2>
                <router-link :to="{ name: 'Story', params: { id: id } }">{{
                    story.title
                }}</router-link>
                <span
                    >(<a v-bind:href="`https://${storyUrl}`">{{ storyUrl }}</a
                    >)
                </span>
            </h2>
        </div>
        <p>score: {{ story.score }}</p>
        <p>by {{ story.by }}</p>
        <p>{{ timeAgo }}</p>
    </li>
</template>

<script>
import { getItem } from '../services/api';
import moment from 'moment';

export default {
    name: 'Story',

    props: {
        id: Number
    },

    data() {
        return {
            story: null
        };
    },

    async created() {
        const returnedStory = await getItem(this.id);

        this.story = returnedStory;
    },

    computed: {
        storyUrl() {
            try {
                if (this.story.url) {
                    const url = new URL(this.story.url);

                    return url.hostname;
                }
            } catch (e) {
                if (process.env.NODE_ENV === 'development') {
                    console.log(e.message);
                }
            }

            return null;
        },

        timeAgo() {
            if (this.story.time) {
                const relativeTime = moment(this.story.time * 1000).from();

                return relativeTime;
            }
            return null;
        }
    }
};
</script>

<style></style>
