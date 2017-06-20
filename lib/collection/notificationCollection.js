import {Mongo} from 'meteor/mongo';
const notificationCollection = new Mongo.Collection('notificationcollection');
export default notificationCollection;

if (Meteor.isClient) {
  Meteor.subscribe('notification.all');
}

if (Meteor.isServer) {
  

  Meteor.publish('notification.all', function() {
    return notificationCollection.find();
  });
}