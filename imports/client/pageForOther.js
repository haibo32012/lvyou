import Images from '/lib/collection/images.collection.js';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import './pageForOther.html';

Template.pageForOther.helpers({
	user: function() {
		let userId = FlowRouter.getParam('_id');
		return Meteor.users.findOne({_id: userId});
	},
	images: function() {
		let userId = FlowRouter.getParam('_id');
		return Images.find({userId: userId,"meta.publish": true})
	}
});