import Images from '/lib/images.collection.js';

Meteor.methods({
	imagePublish(id) {
		Images.update(id,
      		{$set: {
        		"meta.publish": true
      		}}
    	);
	},
});