import './user.html';

Template.user.helpers({
	user: function() {
		return Meteor.user();
	},
	email: function() {
		return Meteor.user().emails[0].address;
	}
});

Template.user.events({
	'click #logoutButton': function(e) {
		e.preventDefault();
		AccountsTemplates.logout();
	}
});