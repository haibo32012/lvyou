import Images from '/lib/images.collection.js';

Meteor.methods({
	imagePublish(id) {
		Images.update(id,
      		{$set: {
        		"meta.publish": true
      		}}
    	);
	},
	introductionInsert(id, text) {
		Images.update(id,
			{$set: {
				"meta.introduction": text
			}}
		);
	},
	userExists(username) {
		return !!Meteor.users.findOne({username: username});
	},
});