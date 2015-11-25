//viewsp1.js
// party tipping

var app = app || {};

app.PartiesListView = Backbone.View.extend({
	el: '.page',

	render: function() {
		console.log("start render view1");
		var partieslist = new app.PartiesList();
		console.log("partylist: ", partieslist);
		var that = this;
		partieslist.fetch({
			success: function(partieslist){
				console.log("partieslist fetch success");
				// var tmp = _.template($("partieslist-template").html());
				console.log("partieslist: ", partieslist.models);
				////////////////////////////////////
				//create party list using backbone//
				////////////////////////////////////
				// var content = "<h3>Party Odds -BB</h3><table class='table striped'>";
				// partieslist.each(function(item){
				// 	content = content + "<tr><td>" + item.get("name") + 
				// 		"</td><td> " + item.get("odds") + "</td></tr>";
				// });
				// content = content + "</table>";
				// that.$el.html(content);
				
				////////////////////////////////////
				//create party list using d3.js   //
				////////////////////////////////////
				function tabulate(data)

				d3.select('.page').(content);

				
	
			}
		});
	}
});