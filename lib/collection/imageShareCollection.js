import {Mongo} from 'meteor/mongo';
const imageShareCollection = new Mongo.Collection('imagesharecollection');
export default imageShareCollection;

if (Meteor.isClient) {
  Meteor.subscribe('share.all');
}

if (Meteor.isServer) {
  

  Meteor.publish('share.all', function() {
    return imageShareCollection.find();
  });
}