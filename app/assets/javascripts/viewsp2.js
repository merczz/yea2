//test.js
// candidate tipping

var app = app || {};

app.CanListView = Backbone.View.extend({
	el: '.page',

	render: function() {
		console.log("start render view2");
		d3.select(".page").html("");
		d3.select(".chart").html("");
		var candislist = new app.CandidatesList();
		var that = this;
		candislist.fetch({
			success: function(partieslist){
				console.log("candislist fetch success");
				console.log("candislist: ", candislist.models);
				//clean up data
				var primedataArray = [];
				var presidataArray =[]
				var nameArray = [];
				var primeoddsArray = [];
				var presioddsArray =[];
				var partyArray =[];
				     // t.string   "name"
   					 // t.integer  "party_id"
   					 // t.integer  "betfaircode"
   					 // t.float    "primaryodds"
   					 // t.float    "presidencyodds"
				candislist.each(function(item){
					nameArray.push(item.get("name"));
					primedataArray.push((1/item.get("primaryodds")*100).toFixed(0));
					primeoddsArray.push(item.get("primaryodds").toFixed(2));
					presidataArray.push((1/item.get("presidencyodds")*100).toFixed(0));
					presioddsArray.push(item.get("presidencyodds").toFixed(2));
					partyArray.push(item.get("party"))
					
				});
				console.log("partyArray:  ", partyArray);
				// console.log("nameArray:  ", nameArray);

				////////////////////////////////////
				//create party list using backbone//
				////////////////////////////////////
				// var content = "<h2>Probability to Win</h2><table class='party-table'>";
				// for (var i=0; i<dataArray.length; i++){
				// 	content = content + "<tr><td>" + nameArray[i] + 
				// 		"</td><td> " + dataArray[i] + "%</td><td>" + 
				// 		" Price: $" + oddsArray[i] +"</td></tr>";
				// };
					
				// content = content + "</table>";
				// that.$el.html(content);
				
				////////////////////////////////////
				//create party list using d3.js   //
				////////////////////////////////////

				// // d3.select('.chart').html(""); //clear tag
				// var width = 500;
				// var height = 250;
				// var domain = [0, 80];

				// //scale
				// var widthScale = d3.scale.linear()
				// 				.domain(domain)
				// 				.range([0, width]); //max width

				// //color scale
				// var color = d3.scale.linear()
				// 			.domain([d3.min(dataArray),d3.max(dataArray)])
				// 			.range(["firebrick","navy"]) ;

				// // create axis
				// var axis = d3.svg.axis()
				// 			.ticks(2)
				// 			.scale(widthScale)
				// 			// .orient("bottom")
				// 			;
				// // console.log("axis: ", axis);

				// var canvas = d3.select('.chart')
				// 		.append("svg")
				// 		.attr("width", width)
				// 		.attr("height", height)
				// 		.append("g")
				// 		.attr("transform", "translate(25,40)");

				// var bars = canvas.selectAll("rect")
				// 		.data(dataArray)
				// 		.enter()
				// 			.append("rect")
				// 			.attr("height", 50)
				// 			.attr("fill", function(d) {return color(d)})
				// 			.attr("y", function(d,i) {return i * 80})
				// 			.attr("x", 0)
				// 			.attr("width",0)
				// 			.transition()
				// 				.attr("width", function(d){ return widthScale(d)})
				// 				.duration(1000)
				// 				.delay(500);

				// var labels = canvas.selectAll("text.name")
				// 		.data(nameArray)
				// 		.enter()
				// 		.append("text")
				// 		.attr("class", "party-name")
				// 		.text(function(d) {return d})
				// 		.attr("x", 5)
				// 		.attr("y", function(d,i) {return i * 80+30;})
				// 		// .style("fill", "#fff")
				// 		// .attr("text-anchor","middle")
				// 		;

				// var labelsVal = canvas.selectAll("text.value")
				// 		.data(dataArray)
				// 		.enter()
				// 		.append("text")
				// 		.attr("class", "party-value")
				// 		.text("")
				// 		.attr("x", function(d) {return widthScale(d)+5})
				// 		.attr("y", function(d,i) {return i * 80+30;})
				// 		// .style("fill", "dimgray")
				// 		// .style("font-size", "16px")
				// 		.transition()
				// 		.text(function(d) {return d+"%"})
				// 		.delay(1500)
				// 		;
				// canvas.append("g")
				// 	.attr("transform", "translate(0,140)")
				// 	.attr("class", "axis")
				// 	.call(axis)


			}
		});
	}
});