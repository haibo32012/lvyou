import notificationCollection from '/lib/collection/notificationCollection.js';
import './notification.html';

Template.notification.helpers({
	notifications: function() {
		return notificationCollection.find({notificationUserId: Meteor.userId(), read: false}, {sort: {submitted: -1}});
	},
	notificationCount: function() {
		return notificationCollection.find({notificationUserId: Meteor.userId(), read: false}).count();
	},
});

Template.notificationItem.events({
	'click .delete': function(e) {
		e.preventDefault();
		Meteor.call('notificationUpdate', this._id, (err) => {
			if (err) {
				alert(err);
			} else {
				console.log('notification has already read.');
			}
		});
	}
});