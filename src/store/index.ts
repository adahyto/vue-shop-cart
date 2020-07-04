import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { Item } from "@/models/item.model";
import { Result } from "./result.model"

Vue.use(Vuex);

const store: StoreOptions<Result<Item[]>> = {
  state: {
    name:"Vue cart",
    success: true,
    message: undefined,
    errorCode: 200,
    version: '1.0.0',
    data: new Array<Item>(),
  },
  mutations: {
    addItem(state, item: Item) {
      state.data.push(item);
    },
    editItem(state, item: Item) {
      const itemIndex: number = state.data.findIndex(i => i.id == item.id);
      state.data[itemIndex] = item;
    },
    removeItem(state, id: string) {
      const itemIndex: number = state.data.findIndex(i => i.id == id);
      itemIndex > -1 ? state.data.splice(itemIndex, 1) : new Error('Invalid index');
    }
  },
  actions: {
    addItem(contex, item: Item) {
      contex.commit('addItem', item);
    },
    editItem(contex, item: Item) {
      contex.commit('editItem', item);
    },
    removeItem(context, id: string) {
      context.commit('removeItem', id)
    }
  },
  getters: {
    items(state): Array<Item> {
      return state.data;
    }
  }
};

export default new Vuex.Store<Result<Item[]>>(store);
