<template>
  <div>
    <div style="width: 100%;height: 100%">{{msg}}</div>
    <div style="width: 100%;height: 100%">{{computedMsg}}</div>
  </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class Home extends Vue {
        // initial data
        private msg: string = 'hello world';

        // lifecycle hook
        private mounted() {
            alert("生命周期！");
            this.greet();
        }

        // computed
        private get computedMsg() {
            return 'computed' + this.msg;
        }

        // method
        private greet() {
            alert('方法');
        }
    }
</script>

<style scoped>

</style>