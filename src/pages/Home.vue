<template>

</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class Home extends Vue {
        // initial data
        private msg: string = 'hello world';
        private id: number = 120000;
        private tabsData: any = [];

        // lifecycle hook
        private mounted() {
            let key: any = '';
            key = setInterval(_ => {
                this.$axios.get('https://api.apiopen.top/videoRecommend', {params: {id: this.id}}).then(v => {
                    let category = v.data.result[0].data.category;
                    if (category) {
                        this.tabsData.push(category);
                    }
                    if (this.tabsData.length > 1) {
                        this.tabsData = new Set(this.tabsData);
                        console.log(this.tabsData);
                    }
                });
                this.id++;
                if (this.id === 120020) {
                    clearInterval(key);
                }
            }, 300);
        }

        // computed
        /* private get computedMsg() {
             return 'computed' + this.msg;
         }*/

        // method
        private greet(v: number) {
        }
    }
</script>

<style scoped>

</style>