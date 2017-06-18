import './user.html';

Template.user.helpers({
	user: function() {
		return Meteor.user();
	},
	email: function() {
		return Meteor.user().emails[0].address;
	}
});