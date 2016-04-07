import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    addToCart(item){
      console.log(item);
      this.get('shoppingCart').add(item);
    },
  }
});
