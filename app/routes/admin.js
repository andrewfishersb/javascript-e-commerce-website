import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model() {
    return this.store.findAll('product');
  },
  actions: {
    saveItem(params){
      var newItem = this.store.createRecord('product',params);
        newItem.save();
        this.transitionTo('admin');
    },
    delete(item) {
      this.get('shoppingCart').removeAllOfOneType(item,this.get('shoppingCart.items'));
      this.get('shoppingCart').cost(this.get('shoppingCart.items'));
      item.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
