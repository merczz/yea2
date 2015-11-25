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
				var content = "<h3>Party Odds -BB</h3><table class='table striped'>";
				partieslist.each(function(item){
					content = content + "<tr><td>" + item.get("name") + 
						"</td><td> " + item.get("odds") + "</td></tr>";
				});
				content = content + "</table>";
				that.$el.html(content);
				
				////////////////////////////////////
				//create party list using d3.js   //
				////////////////////////////////////

				d3.select('.chart').text("chart goes here");
				d3.select('.chart').html(""); //clear tag
				console.log(JSON.parse(partieslist.pluck("odds")));
				var dataS = [];
				dataS = JSON.parse(partieslist.pluck("odds"));
				console.log("typeof here: ", typeof dataS);

				

				//change data type from string to int
				// dataArray = dataS.map(function(x) {return parseFloat(x);});

				// console.log("type of array: ", typeof dataArray[0]);

				var width = 400;
				var height = 400;

				//scale
				var widthScale = d3.scale.linear()
								.domain([1,5])
								.range([0, width]); //max width
				// console.log("widthscale: ", widthScale);

				//color scale
				var color = d3.scale.linear()
							.domain([1,5])
							.range(["red","blue"]) ;

				// create axis
				var axis = d3.svg.axis()
							.ticks(0.5)
							.scale(widthScale);
				// console.log("axis: ", axis);

				var canvas = d3.select('.chart')
						.append("svg")
						.attr("width", width)
						.attr("height", height)
						.attr("background-color","pink")
						.append("g")
						.attr("transform", "translate(20,0)");

				var bars = canvas.selectAll("rect")
							.data(dataArray)
							.enter()
								.append("rect")
								.attr("width", function(d){ return widthScale(d)})
								.attr("height", 50)
								.attr("fill", function(d) {return color(d)})
								.attr("y", function(d,i) {return i * 100});

				canvas.append("g")
					.attr("transform", "translate(0,400)")
					.call(axis);

	
			}
		});
	}
});