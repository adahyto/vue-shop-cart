import Vue from 'vue';
import Component from 'vue-class-component';
import { Item } from '@/models/item.model';

@Component({})
export default class CartListComponent extends Vue {

  items: Array<Item> = new Array<Item>();
  mounted(): void {
    this.items = this.$store.getters.items;
    this.$store.subscribe((mountain, state) => {
      this.items = state.data;
    })
  }
  removeItem(id: string): void {
    this.$store.dispatch('removeItem', id);
  }
  calcSum(): number {
    let sum = 0;
    this.items.forEach(item => {
      sum = sum + item.price * item.quantity
    });
    return sum;
  }
  editItem(item: Item): void {
    this.$store.dispatch('editItem', item);
  }
  clear(): void {
    this.$store.dispatch('clear');
  }
}

