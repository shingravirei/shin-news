<template>
    <li class="story" v-i="story">
        <h2>{{ story.title }}</h2>
        <p>
            (<a :href="`https://${storyUrl}`">{{ storyUrl }}</a
            >)
        </p>
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
                if (this.story) {
                    const url = new URL(this.story.url);
                    console.log(this.story);
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
            if (this.story) {
                const relativeTime = moment(this.story.time * 1000).from();

                return relativeTime;
            }
            return null;
        }
    }
};
</script>

<style></style>
