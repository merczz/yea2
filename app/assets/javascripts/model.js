//model.js

var app = app || {};

app.Candidate = Backbone.Model.extend({
  url: '/candidates',
  initialize: function(attributes, options){
  	this.party = options.party;
  	console.log("this party from model: ", this.party);
  }
});

app.Party = Backbone.Model.extend({
  url: '/parties'
});