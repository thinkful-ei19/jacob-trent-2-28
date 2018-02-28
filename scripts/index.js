'use strict';
/* global shoppingList, store, $, Item */

$(document).ready(function() {
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
  shoppingList.bindEventListeners();
  shoppingList.render();
  
});

// store.items.push(Item.create('apples'));



