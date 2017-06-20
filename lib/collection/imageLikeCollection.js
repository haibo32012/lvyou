import {Mongo} from 'meteor/mongo';
const imageLikeCollection = new Mongo.Collection('imagelikecollection');
export default imageLikeCollection;

if (Meteor.isClient) {
  Meteor.subscribe('like.all');
}

if (Meteor.isServer) {
  

  Meteor.publish('like.all', function() {
    return imageLikeCollection.find();
  });
}