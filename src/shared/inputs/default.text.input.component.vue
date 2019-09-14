<template>
  <div class="input text default" :style="{ 'padding' : paddings }">
        <div class="input-error" v-visible="error !== 'N/A'" v-if="position === 'top'">{{error}}</div>
        
        <div class="input-wrapper" :class="getInputWrapperClass()">
            <input type="text" name="email" v-model="text" :placeholder="placeholder" @keyup="onType()" @focus="onFocus()" @blur="onBlur()" autocomplete="on">
            <div class="icon">
                <img  v-if="error !== 'N/A'" :src="require('./icons/' + icon + '_rojo.png')">
            </div>
        </div>

        <div class="input-error" v-visible="error !== 'N/A'" v-if="position === 'bottom'">{{error }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class TextInputComponent extends Vue {

    @Prop({default: ''}) public placeholder: string|undefined;
    @Prop({default: ''}) public icon: string|undefined;
    @Prop({default: 'light'}) public theme: string|undefined;
    @Prop({default: 'fixed'}) public layout: string|undefined;
    @Prop({default: '0em 0em'}) public paddings: string|undefined;
    @Prop({default: 'bottom'}) public position: string|undefined;
    @Prop({default: ''}) private error: string|undefined;


    private db: any = (this as any).$db;
    private text: string = '';
    private inTheme: string = 'none';

    private mounted() {
        // this.text = this.placeholder + '';
    }
    private inputClass(): string {
        return `${this.theme} ${this.layout} ${this.position} in-${this.inTheme}`;
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
        return this.error !== 'N/A' ? `error ${this.inTheme}` : `default ${this.inTheme}`;
    }

}
</script>

<style scoped lang="less">
@import (reference) './../../styles/main.less';
div.input{

    display: block;
    box-sizing: border-box;
    width: 100%;

    &-wrapper{
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 0.25em;
    
        color: black;

        border:1px solid rgba(0,0,0,0);
        border-bottom:1px solid #424242;
        //background-color: white;

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


        input{
            display: block;
            box-sizing: border-box;
            width: 100%;
                    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                    color: #9b9797;
                    opacity: 1; /* Firefox */
                    }

                    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                    color: #9b9797;
                    }

                    &::-ms-input-placeholder { /* Microsoft Edge */
                    color: #9b9797;
                    }
            
        }

      
        .icon{
            width: 2em;
            height: 2em;
            img{
                width: 2em;
            }
        }

        &.error{
            border: 1px solid @color-red;
        }

        &.theme-light{
            background-color:white;
        }
    }

    &-error{
        color: @color-red ;
        text-align: left;
        padding: 0.5em 0em;
        letter-spacing: 1px;
    }



}
div.light{
    color: gray;
    background-color: white;
}
div.dark{
    color: #afafaf;
    background-color: #424242;
}
div.fixed{
    position: fixed;
}
div.absolute{
    position: absolute;
}
div.bottom{
    bottom: 0px;
}
div.top{
    top: 0px;
}
</style>
