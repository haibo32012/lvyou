import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


FlowRouter.route('/', {
	action() {
		this.render("_layout", "main");
	}
});
FlowRouter.route('/upload', {
	name: 'upload',
	waitOn() {
		return import('/imports/client/upload.js');
	},
	action() {
		this.render("_layout", "upload");
	}
});
FlowRouter.route('/signUpShop', {
	action() {
		this.render("_layout", "signUpShop");
	}
});
FlowRouter.route('/protocol', {
	action() {
		this.render("_layout", "protocol");
	}
});
FlowRouter.route('/user', {
	action() {
		this.render("_layout", "user");
	}
});
FlowRouter.route('/user/:_id', {
	waitOn() {
		return import('/imports/client/pageForOther.js');
	},
	action() {
		this.render("_layout", "pageForOther");
	}
});
FlowRouter.route('/userShare/:_id', {
	waitOn() {
		return import('/imports/client/userShare.js');
	},
	action() {
		this.render("_layout", "userShare");
	}
});

FlowRouter.route('/userLike/:_id', {
	waitOn() {
		return import('/imports/client/userLike.js');
	},
	action() {
		this.render("_layout", "userLike");
	}
});

FlowRouter.route('/userAbout/:_id', {
	waitOn() {
		return import('/imports/client/userAbout.js');
	},
	action() {
		this.render("_layout", "userAbout");
	}
});
FlowRouter.route('/notification', {
	action() {
		this.render("_layout", "notification");
	}
});


FlowRouter.notFound = {
  action() {
    this.render("_layout", "_404");
  }
};