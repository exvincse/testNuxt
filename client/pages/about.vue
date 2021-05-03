<template>
    <div>
        <h1>About</h1>
        <div>
            {{ $store.state.apiData }}
        </div>
        <p>{{ $store.state.message }}</p>
        <template v-if="$store.state.Counter">
            <div v-if="$store.state.Counter.isLoading">
                <h2>Loading...</h2>
            </div>
            <div v-else>
                <h2>{{ count }}</h2>
                <p>
                    <button @click="count--">-</button>
                    <button @click="count++">+</button>
                </p>
                <p>
                    <button @click="getCount">Get Count</button>
                </p>
            </div>
        </template>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapState, mapMutations, mapActions } from "vuex";
    import Counter from "../storeModules/Counter";
    export default {
        layout: 'blue',
        data() {
            return {
                title: "About",
                random: [],
                ary: []
            };
        },
        head() {
            return {
                title: this.title,
                meta: [{
                    hid: this.title,
                    name: this.title,
                }]
            };
        },
        async asyncData({ store }) {
            // let ary = [];
            // await axios.get('https://randomuser.me/api/').then((res) => {
            //     ary = res.data.results;
            // }).catch((error) => {
            //     console.log(error)
            // })
            // return {
            //     ary: res
            // }
            // console.log('asyncData');
        },
        async fetch({ app, store }) {
            let ary = [];
            await axios.get('https://randomuser.me/api/').then((res) => {
                ary = res.data.results;
            }).catch((error) => {
                console.log(error)
            })
            store.dispatch('apiData', ary);
            console.log('fetch');
        },
        async beforeCreate() {
            console.log(this);
            this.$registerModule(this.$store, { Counter });
        },
        created() {
            console.log('created');
        },
        beforeDestroy() {
            this.$unregisterModule(this.$store, ["Counter"]);
        },
        computed: {
            count: {
            ...mapState("Counter", { get: "count" }),
            ...mapMutations("Counter", { set: "SET_COUNT" })
            }
        },
        methods: {
            ...mapActions("Counter", { getCount: "GET_COUNT" })
        }
    };
</script>

<style></style>