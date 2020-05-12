<template>
    <div v-if="topStories">
        <ol class="content">
            <Story
                v-for="topStory in topStories.slice(0, 20)"
                :id="topStory"
                :key="topStory"
            />
        </ol>
    </div>
</template>

<script>
import { getTopStories } from '../services/api';
import Story from '../components/Story';

export default {
    name: 'Home',
    data() {
        return {
            topStories: null
        };
    },
    async created() {
        const stories = await getTopStories();

        this.topStories = stories;
    },
    components: { Story }
};
</script>
