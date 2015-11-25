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
				// d3.select('.chart').html(""); //clear tag
				var dataArray = partieslist.pluck("odds");
				var nameArray = partieslist.pluck("name");
				// console.log(typeof nameArray);
				// console.log(JSON.stringify(nameArray));
				// var test = partieslist.map("name");
				// console.log("map: ", test);
				// console.log("typeof ", test);

				// d3.select('.page').(content);


				var width = 400;
				var height = 400;

				//scale
				var widthScale = d3.scale.linear()
								.domain([1,d3.max(dataArray)])
								.range([0, width]); //max width
				// console.log("widthscale: ", widthScale);

				//color scale
				var color = d3.scale.linear()
							.domain([1,5])
							.range(["red","blue"]) ;

				// create axis
				var axis = d3.svg.axis()
							.ticks(1)
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
								.attr("y", function(d,i) {return i * 100})

				// var label = canvas.selectAll("text")
							// .data(nameArray)
							// .enter()
								// .append("text");

				canvas.append("g")
					.attr("transform", "translate(0,400)")
					.call(axis);

	
			}
		});
	}
});