<template>

  <div class="modal-mask" :class="modalMaskClass()">
    <div class="modal-wrapper" @click="close()" > 
      <div class="modal-container" @click.stop :class="modalContainerClass()" >

        <div class="modal-header" >
          <slot name="header">
              <h1>Reset password no touch</h1>
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            <p>We will send you an e-mail with a link to reset yout password, please check it.</p>
          <email-input-component
                  @onType="doSetInputEmail($event)"
                  :error="ERRORS.email"
                  :placeholder="'Email'"
                  :icon="'error'"
                  :theme="'dark'"
                  :paddings="'0em 1em'"
                  :position="'bottom'">
          </email-input-component>
          <br>
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
              <send-button-component
                  @onClick="doSend()"
                  :disabled="true"
                  :text="'Log in'"
                  :theme="'dark'">
              </send-button-component>
          </slot>
        </div>
      </div>
    </div>
  </div>

  </template>


  <script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ButtonComponet from '../buttons/default.button.component.vue';
import InputComponet from '../inputs/default.text.input.component.vue';

@Component({
    components : {'send-button-component' : ButtonComponet, 'email-input-component' : InputComponet}
})
export default class DefaultModalCompoennt extends Vue {

private db: any = (this as any).$db;

    private ANIMATE:any = {
      createdHiddenBottom: true,
      createdVisibleBottom: false,
      createdVisibleUp: false,
      time: 800
    }
    private EMAIL: string = '';
    private ERRORS = {
        email : 'N/A'
    }
    

  private mounted() {


      this.ANIMATE.createdHiddenBottom = true;
      this.ANIMATE.createdVisibleBottom = false;
      this.ANIMATE.createdVisibleUp = false;

      setTimeout( () => {

        this.ANIMATE.createdHiddenBottom = false;
        this.ANIMATE.createdVisibleBottom = true;
        this.ANIMATE.createdVisibleUp = false;

        if (window.navigator && window.navigator.vibrate) {
            navigator.vibrate(100);
        } 

        setTimeout( () => {
          
          this.ANIMATE.createdHiddenBottom = false;
          this.ANIMATE.createdVisibleBottom = false;
          this.ANIMATE.createdVisibleUp = true;

        }, this.ANIMATE.time/2)
      }, this.ANIMATE.time/2)


  }


  private close(){
     setTimeout( () => {
              this.ANIMATE.createdHiddenBottom = false;
              this.ANIMATE.createdVisibleBottom = true;
              this.ANIMATE.createdVisibleUp = false;
              setTimeout( () => {
                this.ANIMATE.createdHiddenBottom = true;
                this.ANIMATE.createdVisibleBottom = false;
                this.ANIMATE.createdVisibleUp = false;
                  setTimeout(() => this.$emit('close'), this.ANIMATE.time/2)
              }, this.ANIMATE.time/2)
      }, this.ANIMATE.time/3)
  }

  private modalMaskClass(): string{

    if(this.ANIMATE.createdHiddenBottom){
      return  'mask-hidden'
    }else{
      return  'mask-visible'
    }
    
  }
   private modalContainerClass(): string{
    if(this.ANIMATE.createdHiddenBottom || this.ANIMATE.createdVisibleBottom){
      return  'container-bottom'
    }else{
      return  'container-up'
    } 
  }

  private doSetInputEmail($email:string){
    this.EMAIL = $email;
  }

  private doSend(){

      if(true){}
       this.db.users.sendPasswordResetEmail(this.EMAIL)
      .then((user: any) => {
         this.ERRORS.email = 'N/A';
         
      })
      .catch((error: any) => {
        this.ERRORS.email = error.message;
      });
  }


}
</script>

  <style lang="less">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .85);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: bottom;
}

.modal-container {

  width: 100%;
  position: relative;
  top: 50vh;

  box-sizing: border-box;

  margin: 0px auto;
  padding: 0em;

  border-radius: 8px;

  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);

  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {

    padding-top: 40px;

    h1{
        margin-top: 0;
        color: #424242;

        font-weight: 900;
        font-size: 20px;
        padding: 0px 0px 0px 0px;
        width: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0px;
        text-align: center;
        font-weight: 600;
        letter-spacing: 1px;
        opacity: 0.8;
        padding-top: 0.5em;

    }
}

.modal-body {
  margin: 6.65px 0;
  p{
    color: #444444;
    font-weight: 300;
    font-size: 13.3px;
    margin: 0px;
    text-align: center;
    padding: 0px 0px 0px 0px;
    width: 300px;
    margin: 0 auto;
    padding-bottom: 1em;
    padding-top: 1em;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0px;
    letter-spacing: 1px;
    line-height: 16px;
    opacity: 0.7;
    padding-top: 0em;
    padding-bottom: 2.25em;
  }
}

.modal-default-button {
  float: right;
}


.mask-hidden{
    opacity: 0;
    -webkit-transition: all 500ms ease-in-out;
-moz-transition: all 500ms ease-in-out;
-ms-transition: all 500ms ease-in-out;
-o-transition: all 500ms ease-in-out;
transition: all 500ms ease-in-out;
}
.mask-visible{
    opacity: 1;
    -webkit-transition: all 500ms ease-in-out;
-moz-transition: all 500ms ease-in-out;
-ms-transition: all 500ms ease-in-out;
-o-transition: all 500ms ease-in-out;
transition: all 500ms ease-in-out;
}
.container-up{
  top: 0px;
  -webkit-transition: all 700ms ease;
-moz-transition: all 700ms ease;
-ms-transition: all 700ms ease;
-o-transition: all 700ms ease;
transition: all 700ms ease;
}
.container-down{
  top: 50vh;
  -webkit-transition: all 700ms ease;
-moz-transition: all 700ms ease;
-ms-transition: all 700ms ease;
-o-transition: all 700ms ease;
transition: all 700ms ease;
}

  </style>