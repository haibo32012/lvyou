import Images from '/lib/collection/images.collection.js';
import imageLikeCollection from '/lib/collection/imageLikeCollection.js';
import imageShareCollection from '/lib/collection/imageShareCollection.js';
import notificationCollection from '/lib/collection/notificationCollection.js';

Meteor.methods({
	// Image operation
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

	imageRemoveLikeButton(id) {
		imageLikeCollection.remove(id);
	},
	imageRemoveShareButton(id) {
		imageShareCollection.remove(id);
	},
	imageShareCountMinusUpdate(id) {
		Images.update(id,
			{$inc: {
				'meta.share_count': -1
			}}
		);
	},
	imageLikeCountMinusUpdate(id) {
		Images.update(id,
			{$inc: {
				'meta.like_count': -1
			}}
		);
	},
	imageDislikeCountMinusUpdate(id) {
		Images.update(id,
			{$inc: {
				'meta.dislike_count': -1
			}}
		);
	},
	imageLikeInsert(object) {
		imageLikeCollection.insert(object);
	},
	imageShareInsert(object) {
		imageShareCollection.insert(object);
	},
	imageShareCountPlusUpdate(id) {
		Images.update(id,
			{$inc: {
				'meta.share_count': 1
			}}
		);
	},
	imageLikeCountPlusUpdate(id){
		Images.update(id,
			{$inc: {
				'meta.like_count': 1
			}}
		);
	},
	imageDislikeCountPlusUpdate(id) {
		Images.update(id,
			{$inc: {
				'meta.dislike_count': 1
			}}
		);
	},
	notificationInsert(object) {
		notificationCollection.insert(object);
	},
	userExists(username) {
		return !!Meteor.users.findOne({username: username});
	},
});