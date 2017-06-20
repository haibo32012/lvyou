import notificationCollection from '/lib/collection/notificationCollection.js';
import './user.html';

Template.user.helpers({
	user: function() {
		return Meteor.user();
	},
	email: function() {
		return Meteor.user().emails[0].address;
	},
	notificationsCount: function() {
		return notificationCollection.find({notificationUserId: Meteor.userId(), read: false}).count();
	},
});

Template.user.events({
	'click #logoutButton': function(e) {
		e.preventDefault();
		AccountsTemplates.logout();
	}
});