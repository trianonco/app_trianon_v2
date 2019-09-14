<template>
  <div class="input text default" :style="{ padding: paddings }">


    <div class="input-error" v-visible="error !== 'N/A'" v-if="position === 'top'" @click="callback"> {{error}} </div>
    
    
    <div class="input-wrapper" :class="getInputWrapperClass()">
      <input name="password" :type="getPasswordShow()" v-model="text" :placeholder="placeholder" @keyup="onType()" @focus="onFocus()" @blur="onBlur()" autocomplete="on"/>
      <div class="icon">
              <img v-if="error !== 'N/A'" :src="require('./icons/' + 'error' + '_rojo.png')">
              <img v-if="error === 'N/A' && !isPasswordShow" :src="require('./icons/' + icon + '_negro.png')" @click="doToogleShow()" />
              <img v-if="error === 'N/A' && isPasswordShow" :src="require('./icons/' + icon + '_blanco.png')" @click="doToogleShow()" />
      </div>

    </div>
    
    
    <div class="input-error" v-visible="error !== 'N/A'" v-if="position === 'bottom'" @click="callback">
      {{error}}
    </div>
  
  
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class PasswordInputComponent extends Vue {
  @Prop({ default: '' }) public placeholder: string | undefined;
  @Prop({ default: '' }) public icon: string | undefined;
  @Prop({ default: 'light' }) public theme: string | undefined;
  @Prop({ default: 'fixed' }) public layout: string | undefined;
  @Prop({ default: '0em 0em' }) public paddings: string | undefined;
  @Prop({ default: 'bottom' }) public position: string | undefined;
  @Prop({ default: 'N/A' }) private error: string | undefined;
  @Prop({ default: {} }) private callback: any | undefined;

  private db: any = (this as any).$db;
  private text: string = '';
  private isPasswordShow: boolean = false;
  private inTheme: string = 'none';

  private mounted() {
    // this.text = this.placeholder + '';
  }
  private inputClass(): string {
    return `${this.theme} ${this.layout} ${this.position}`;
  }

  private onType(): void {
    this.$emit('onType', this.text);
  }

    private onFocus(): void {
        this.$store.dispatch('setKeyboardIsOpen', true);
        this.inTheme = 'theme-light';
    }

    private onBlur(): void {
        this.$store.dispatch('setKeyboardIsOpen', false);
        this.inTheme = this.text.length > 0 ? 'theme-light' : 'theme-none' ;
    }


    private getInputWrapperClass(): string {
    return (this.error !== 'N/A' ) ? `error ${this.inTheme}` : `default ${this.inTheme}`;
    }

  private doToogleShow(): void {
    this.isPasswordShow = !this.isPasswordShow;
  }

  private getPasswordShow(): string {
    return this.isPasswordShow ? 'text' : 'password';
  }


}
</script>

<style scoped lang="less">
@import (reference) './../../styles/main.less';
div.input {
  display: block;
  box-sizing: border-box;
  width: 100%;

  &-wrapper {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 0.25em;
    color: black;
    
    border:1px solid rgba(0,0,0,0);
    border-bottom:1px solid #424242;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    input {
      display: block;
      box-sizing: border-box;
      width: 100%;
    }

    input[type='password'] {
      display: inline-block;
      vertical-align: middle;
      padding: 0.25em;
      background: none;
      border: none;
      border-width: 0;
      -webkit-box-shadow: none;
      box-shadow: none;
    }

    div.icon {
      display: block;
      width: 2em;
      height: 2em;
      img{ 
        width: 2em;
        height: auto;
      }
    }
    &.error {
      border: 1px solid @color-red;
    }
    &.theme-light{
        background-color:white;
    }
  
  }
  &-error {
    color: @color-red;
    text-align: left;
    padding: 0.5em 0em;
    letter-spacing: 1px;
  }
}

div.light {
  color: gray;
  background-color: white;
  border: 1px solid #424242;
}
div.dark {
  color: #afafaf;
  background-color: #424242;
}
div.fixed {
  position: fixed;
}
div.absolute {
  position: absolute;
}
div.bottom {
  bottom: 0px;
}
div.top {
  top: 0px;
}
</style>
