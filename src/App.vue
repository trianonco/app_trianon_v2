<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class AppView extends Vue {

  private mounted() {
    console.log(' @mount() Welcom TokPets Apps!');
    const appHeight: string = document.documentElement.clientHeight + 'px';
    document.documentElement.style.setProperty('--view-height', appHeight);
  }

}
</script>


<style lang="less">
@import '@shared/styles/main.less';

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: block;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y:scroll;

}
</style>
