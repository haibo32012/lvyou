FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render("_layout", {content: "main"});
	}
});
FlowRouter.route('/upload', {
	action: function() {
		BlazeLayout.render("_layout", {content: "upload"});
	}
});
FlowRouter.route('/user', {
	action: function() {
		BlazeLayout.render("_layout", {content: "user"});
	}
});
FlowRouter.route('/notification', {
	action: function() {
		BlazeLayout.render("_layout", {content: "notification"});
	}
});


FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render("_layout", {content: "_404"});
  }
};