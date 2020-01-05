<template>
    <div class="jokes">
        <div class="jokes__categories">
            <h1>Categories</h1>
            {{categories}}
            <!-- <ul>
                <li v-for="cat in this.categories">{{ cat }}</li>
            </ul> -->
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            categories: null,
        }
    },
    mounted() {
        function getCategories() {
            return axios.get('https://api.chucknorris.io/jokes/categories').
                then(response => {
                    return response.data
                })
        }
        getCategories().then(data => {
            this.categories = response.json({ data })
        })
    },
}
</script>
<style lang="scss" scoped>
</style>


