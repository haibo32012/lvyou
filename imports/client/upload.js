import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {check} from 'meteor/check';
import Images from '/lib/collection/images.collection.js';
import './upload.html';

/*Template.uploadedFiles.helpers({
  uploadedFiles: function () {
    return Images.find();
  }
});*/
Template.upload.helpers({
  editShow: function() {
    let imageObject = Images.findOne({"meta.publish": false});

    if (imageObject !== undefined) {
      return true;
    } else {
      return false;
    }
  }
});

Template.uploadForm.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.uploadForm.helpers({
  currentUpload: function () {
    return Template.instance().currentUpload.get();
  }
});

Template.uploadForm.events({
  'change #fileInput': function (e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // there was multiple files selected
      let user = Meteor.user();
      var file = e.currentTarget.files[0];
      file.userId = user._id;
      if (file) {
        var uploadInstance = Images.insert({
          file: file,
          meta: {
            userName: user.username,
            userPicture: user.profile.picture,
            like_count: 0,
            dislike_count: 0,
            view_count: 0,
            share_count: 0,
            created_at: new Date(),
            publish: false,
          },
          streams: 'dynamic',
          chunkSize: 'dynamic'
        }, false);

        uploadInstance.on('start', function() {
          template.currentUpload.set(this);
        });

        uploadInstance.on('end', function(error, fileObj) {
          if (error) {
            window.alert('Error during upload: ' + error.reason);
          } else {
            window.alert('File "' + fileObj.name + '" successfully uploaded');
          }
          template.currentUpload.set(false);
        });

        uploadInstance.start();
      }
    }
  }
});

Template.editFiles.helpers({
  file: function() {
    return Images.find({"meta.publish": false}) || {};
  }
});
Template.editFiles.events({
  'submit #editForm': function(e) {
    e.preventDefault();
    console.log(this);
    let editTextValue = e.target.editText.value;
    e.target.editText.value = "";
    check(editTextValue, String);
    Meteor.call('introductionInsert', this._id, editTextValue, (err)=> {
      if (err) {
        alert(err);
      } else {
        console.log("introduction insert succcess!");
      }
    });
    Meteor.call('imagePublish', this._id, (err) => {
      if (err) {
        alert(err);
      } else {
        console.log("image publish");
      }
    });

    console.log(editTextValue);
    console.log('submit form');
  }
});