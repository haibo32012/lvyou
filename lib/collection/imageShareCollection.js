import {Mongo} from 'meteor/mongo';
const imageShareCollection = new Mongo.Collection('imagesharecollection');
export default imageShareCollection;