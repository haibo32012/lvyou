import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import './protocol.html';

Template.protocol.events({
	'click #protocolButton': function(e) {
		e.preventDefault();
		FlowRouter.go('/user');
	}
});