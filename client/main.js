import Images from '/lib/collection/images.collection.js';
import imageLikeCollection from '/lib/collection/imageLikeCollection.js';
import imageShareCollection from '/lib/collection/imageShareCollection.js';
import notificationCollection from '/lib/collection/notificationCollection.js';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import './main.html';

Template.main.helpers({
  image: function() {
    return Images.find({"meta.publish": true},{sort: {"meta.created_at": -1}});
  }
});
Template.imageItem.helpers({

});
Template.imageItem.events({
	'click #likeButton': function(e) {
		e.preventDefault();
		if (Meteor.user() === undefined) {
			return ;
		}
		let user = Meteor.user();
		let userId = user._id;
		let userName = user.username;
		let userPicture = user.profile.picture;
		let imageId = this._id;
		let imageLikeObject = imageLikeCollection.findOne({
			userId: userId,
			imageId: imageId,
		});
		console.log(imageLikeObject);
		if (imageLikeObject !== undefined) {
			if (imageLikeObject.isDislike === true) {
				return ;
			} else {
				// remove like button
				Meteor.call('imageRemoveLikeButton', imageLikeObject._id, (err) => {
					if (err) {
						alert(err);
					} else {
						console.log('image like button remove success!');
					}
				});
				Meteor.call('imageLikeCountMinusUpdate', imageId, (err) => {
					if (err) {
						alert(err);
					} else {
						console.log('image like count minus success!');
					}
				});
			}
		} else {
			let imageLike = {
				userId: userId,
				imageId: imageId,
				isLike: true
			};
			Meteor.call('imageLikeInsert', imageLike, (err) => {
				if (err) {
					alert(err);
				} else {
					console.log('like image operation success!');
				}
			});
			Meteor.call('imageLikeCountPlusUpdate', imageId, (err) => {
				if (err) {
					alert(err);
				} else {
					console.log('image like count add success!');
				}
			});
			let imageLikeNotification = {
				notificationUserId: this.userId,
				userId: userId,
				userName: userName,
				userPicture: userPicture,
				imageId: this._id,
				imageIntroduction: this.meta.introduction,
				message: "like your image, congratulations!",
				submitted: new Date(),
				read: false,
			};
			Meteor.call('notificationInsert', imageLikeNotification, (err) => {
				if (err) {
					alert(err);
				} else {
					console.log('like image notification insert success!');
				}
			});
		}
		//console.log(this);
	},
	'click #dislikeButton': function(e) {
		e.preventDefault();
		e.preventDefault();
		if (Meteor.user() === undefined) {
			return ;
		}
		let user = Meteor.user();
		let userId = user._id;
		let userName = user.username;
		let userPicture = user.profile.picture;
		let imageId = this._id;
		let imageLikeObject = imageLikeCollection.findOne({
			userId: userId,
			imageId: imageId,
		});
		if (imageLikeObject !== undefined) {
			if (imageLikeObject.isLike === true) {
				return ;
			} else {
				// remove like button
				Meteor.call('imageRemoveLikeButton', imageLikeObject._id, (err) => {
					if (err) {
						alert(err);
					} else {
						console.log('image like button remove success!');
					}
				});
				Meteor.call('imageDislikeCountMinusUpdate', imageId, (err) => {
					if (err) {
						alert(err);
					} else {
						console.log('image dislike count minus success!');
					}
				});
			}
		} else {
			let imageDislike = {
				userId: userId,
				imageId: imageId,
				isDislike: true
			};
			Meteor.call('imageLikeInsert', imageDislike, (err) => {
				if (err) {
					alert(err);
				} else {
					console.log('like image operation success!');
				}
			});
			Meteor.call('imageDislikeCountPlusUpdate', imageId, (err) => {
				if (err) {
					alert(err);
				} else {
					console.log('image dislike count add success!');
				}
			});
			let imageDislikeNotification = {
				notificationUserId: this.userId,
				userId: userId,
				userName: userName,
				userPicture: userPicture,
				imageId: this._id,
				imageIntroduction: this.meta.introduction,
				message: "dislike your image, sorry!",
				submitted: new Date(),
				read: false,
			};
			Meteor.call('notificationInsert', imageDislikeNotification, (err) => {
				if (err) {
					alert(err);
				} else {
					console.log('dislike image notification insert success!');
				}
			});
		}
	},
	'click #share': function(e) {
		e.preventDefault();
		if (Meteor.user() === undefined) {
			return ;
		}
		let user = Meteor.user();
		let userId = user._id;
		let userName = user.username;
		let userPicture = user.profile.picture;
		let imageId = this._id;
		let imageShareObject = imageShareCollection.findOne({
			userId: userId,
			imageId: imageId,
		});
		if (imageShareObject !== undefined) {
			Meteor.call('imageRemoveShareButton', imageShareObject._id, (err) => {
				if (err) {
					alert(err);
				} else {
					console.log('image share operation remove success!');
				}
			});
			Meteor.call('imageShareCountMinusUpdate', imageId, (err) => {
				if (err) {
					alert(err);
				} else {
					console.log('image share count minus success!');
				}
			});
		} else {
			let imageShare = {
				userId: userId,
				imageId: imageId,
			};
			Meteor.call('imageShareInsert', imageShare, (err) => {
				if (err) {
					alert(err);
				} else {
					console.log('image share insert success!');
				}
			});
			Meteor.call('imageShareCountPlusUpdate', imageId, (err) => {
				if (err) {
					alert(err);
				} else {
					console.log('image share count plus success!');
				}
			});
			let imageShareNotification = {
				notificationUserId: this.userId,
				userId: userId,
				userName: userName,
				userPicture: userPicture,
				imageId: imageId,
				imageIntroduction: this.meta.introduction,
				message: " share your image, congratulations!",
				submitted: new Date(),
				read: false
			};
			Meteor.call('notificationInsert', imageShareNotification, (err) => {
				if (err) {
					alert(err);
				} else {
					console.log('share image notification insert success!');
				}
			});
		}
	},
});