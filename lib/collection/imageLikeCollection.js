import {Mongo} from 'meteor/mongo';
const imageLikeCollection = new Mongo.Collection('imagelikecollection');
export default imageLikeCollection;