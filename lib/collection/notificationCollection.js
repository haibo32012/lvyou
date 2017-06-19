import {Mongo} from 'meteor/mongo';
const notificationCollection = new Mongo.Collection('notificationcollection');
export default notificationCollection;