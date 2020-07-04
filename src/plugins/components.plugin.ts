import Vue from 'vue';
import HeaderComponent from '@/components/header/header.component.vue';
import CartComponent from '@/components/cart/cart.component.vue';
import CartAddComponent from '@/components/cart/cart-add/cart-add.component.vue';
import CartListComponent from '@/components/cart/cart-list/cart-list.component.vue';

Vue.component('c-header', HeaderComponent);
Vue.component('c-cart', CartComponent)
Vue.component('c-cart-add', CartAddComponent)
Vue.component('c-cart-list', CartListComponent)