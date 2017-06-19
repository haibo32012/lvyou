import {Mongo} from 'meteor/mongo';
const imageCommentCollection = new Mongo.Collection('imagecommentcollection');
export default imageCommentCollection;