import {Mongo} from 'meteor/mongo';
const imageCommentCollection = new Mongo.Collection('imagecommentcollection');
export default imageCommentCollection;

if (Meteor.isClient) {
  Meteor.subscribe('comments.all');
}

if (Meteor.isServer) {
  

  Meteor.publish('comments.all', function() {
    return imageCommentCollection.find();
  });
}