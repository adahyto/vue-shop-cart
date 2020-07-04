<template>
  <v-app id="inspire">
    <c-header></c-header>
    <div class="cart-wrapper">
      <c-cart></c-cart>
    </div>
  </v-app>
</template>
 
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class HomeComponent extends Vue {
  mounted() {
    console.log("jebać pis");
  }
}
</script>
 
<style scoped lang="scss">
.cart-wrapper {
  margin-top: 81px;
}
</style>