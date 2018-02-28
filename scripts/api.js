'use strict';

/* global $ */

// eslint-disable-next-line no-unused-vars
const api = (function(){
  const BASE_URL ='https://thinkful-list-api.herokuapp.com/trent-jacob';

  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/items`, callback);
  };

  const createItem = function(name, callback) {
    const item = {
      name
    };
    const newItem = JSON.stringify(item);
    $.ajax({
      'url' : `${BASE_URL}/items`,
      "method" : "POST",
      "contentType"  : "application/json",
      "data" : newItem,
      "success" : callback

        
    });
  };

  return {
    getItems,
    createItem
  };

}());