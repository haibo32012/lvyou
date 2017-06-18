import Images from '/lib/images.collection.js';
import './main.html';

Template.main.helpers({
  image: function() {
    return Images.findOne();
  }
});