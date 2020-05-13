<template>
    <div>
        <ul v-if="item">
            <ol>
                <li>Hello li</li>
            </ol>
            <template v-for="comments in item.kids">
                <li :key="comments">{{ comments }}</li>
            </template>
        </ul>
    </div>
</template>

<script>
import { getItem } from '../services/api.js';

export default {
    name: 'Item',

    data() {
        return {
            item: null
        };
    },

    props: {
        id: Number
    },

    async created() {
        const returnedItem = await getItem(this.id);
        console.log(returnedItem);
        this.item = returnedItem;
    }
};
</script>

<style></style>
