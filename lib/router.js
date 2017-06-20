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
FlowRouter.route('/signUpShop', {
	action: function() {
		BlazeLayout.render("_layout", {content: "signUpShop"});
	}
});
FlowRouter.route('/user', {
	action: function() {
		BlazeLayout.render("_layout", {content: "user"});
	}
});
FlowRouter.route('/user/:_id', {
	action: function() {
		BlazeLayout.render("_layout", {content: "pageForOther"});
	}
});
FlowRouter.route('/userShare/:_id', {
	action: function() {
		BlazeLayout.render("_layout", {content: "userShare"});
	}
});

FlowRouter.route('/userLike/:_id', {
	action: function() {
		BlazeLayout.render("_layout", {content: "userLike"});
	}
});

FlowRouter.route('/userAbout/:_id', {
	action: function() {
		BlazeLayout.render("_layout", {content: "userAbout"});
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