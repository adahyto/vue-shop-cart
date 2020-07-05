import Vue from 'vue';
import Component from 'vue-class-component';
import { Item } from '@/models/item.model';

@Component({})
export default class CartAddComponent extends Vue {
  item: Item = {
    id: this.randomId(),
    name: '',
    quantity: 1,
    price: 0
  };

  addNewItem(): void {
    this.$store.dispatch('addItem', this.item);
    this.item = {
      id: this.randomId(),
      name: '',
      quantity: 1,
      price: 0
    };
  }

  randomId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}

