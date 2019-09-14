<template>
  <div class="view page index" :class="viewClass()">

      <logo-component 
        :color="'dark'" 
        :showButton="!isLoading">
      </logo-component>

      <progress-bar-component
        v-if="isLoading" 
        @onLoad="onProgressBarLoad()">
      </progress-bar-component>

      <button-component 
        v-if="!isLoading"
        @onClick="goToLoginSignIn()"
        :text="'Log in'"
        :theme="'light'"
        :layout="'absolute'"
        :position="'bottom'">
      </button-component> 
    
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState, mapGetters, mapActions } from 'vuex';

import LogoComponent from './components/index.logo.vue';
import ProgressBarComponent from './components/index.progress.bar.vue';

import ButtonComponet from './../../shared/components/buttons/default.button.component.vue';
@Component({
  components: {
    'logo-component' : LogoComponent,
    'button-component' : ButtonComponet,
    'progress-bar-component' : ProgressBarComponent,
  },
  computed: {
     ... mapState,
     ... mapGetters,
  },
})
export default class IndexView extends Vue {

  private isLoading: boolean = true;

  private beforeMount() {
    console.log('.... beforeMount() loading ....');
  }

  private mounted() {
    console.log(' mount() Welcom TokPets Apps!');


  }

  private goToLoginSignIn() {
    this.$router.push('/login/signin');
  }

  private onProgressBarLoad() {
    this.isLoading = false;
  }

  private viewClass(): string {
    return this.$store.getters.isKeyboardOpen ? 'keyboard-on' : 'keyboard-off';
  }

}
</script>



<style lang="less">
@import (reference) './../../../src/shared/styles/main.less';
div.view.page.index{
  
  #view(column,center,center);

  position: relative;

}
</style>
