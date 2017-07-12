import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import './userShare.html';

Template.userShare.helpers({
	user: function() {
		let userId = FlowRouter.getParam('_id');
		return Meteor.users.findOne({_id: userId});
	},
});