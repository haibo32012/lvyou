import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import './userAbout.html';

Template.userAbout.helpers({
	user: function() {
		let userId = FlowRouter.getParam('_id');
		return Meteor.users.findOne({_id: userId});
	},
});