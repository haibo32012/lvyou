import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import './userLike.html';

Template.userLike.helpers({
	user: function() {
		let userId = FlowRouter.getParam('_id');
		return Meteor.users.findOne({_id: userId});
	},
});