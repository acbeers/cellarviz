// Three parts of the cellar
// - 3x5 bins
// - triangular set of bins - 5x5
// - final stack of 2

// For each non-empty bin, need to draw an X in it.
// Then load all our data, group it by bins.
var mydata = null;
var binlookup = [
	[{x: 50, y:35}, {x: 35, y:20}, {x: 65, y:20}],
	[{x: 80, y:65}, {x: 65, y:50}, {x: 80, y:35}],
	[{x: 35, y:90}, {x: 65, y:90}, {x: 50, y:75}],
	[{x: 20, y:65}, {x: 35, y:50}, {x: 20, y:35}]
];

function tooltip(d)
{
	$("#name").text(d.Vintage + " " + d.Wine);
	$("#varietal").text(d.MasterVarietal);
	$("#bin").text(d.Bin);
}
function load(user,pass)
{
	var url = "https://www.cellartracker.com/xlquery.asp?table=Inventory&User="+user+"&Password="+pass+"&Format=csv"
	d3.csv(url, function(data) {
		// TODO: Add color encoding here.
		data.forEach(function (x) {
			var c = null;
			if(x["MasterVarietal"])
				c = x["MasterVarietal"].replace(/[^a-zA-Z]/g,"");
			x.colorField = c;
			//console.log(c);
		});
	
		var cf = crossfilter(data);
		mydata = data;
		var dim = cf.dimension(function (d) { return d.Bin });
		var bingroup = dim.group(function (x) { return x.split("-")[0] });
	
		// TODO: Add field picker here.
	
		// For each group, find the bottles.
		bingroup.all().forEach(function (group) {
			//console.log("bin is " + group.key)
	
			// Now, create the SVG, add the bin dividers
			if(false) {
				var bin = d3.select("#bin"+group.key).selectAll("span");
				//console.log(bin);
				bin.data(bottles)
					.enter()
					.append("span").text(function (d) { return d.Bin });
			}
	
			var bigbin = d3.selectAll("#bin"+group.key).append("svg")
				.attr("width","100px")
				.attr("height","100px");
	
			// Now, put an X in there
			bigbin.append("line")
				.attr("x1","0").attr("y1","0").attr("x2","100").attr("y2","100");
			bigbin.append("line")
				.attr("x1","0").attr("y2","0").attr("x2","100").attr("y1","100");
	
			// Now, add the bottles.
			// Now, group the bottles by bins.
			// Do this so I can reason about the size of the bins someday.
			dim.filterExact(group.key);
			var bingroup2 = dim.group(function (x) { return x });
			// FIXME: This will return all bins, not just the bin we are looking at.
			//        filterExact doesn't apply to this group. :(
			bins = bingroup2.top(Infinity);
			//console.log(bins);
	
			bins.forEach(function (bin) {
				var s = bin.key.split("-")[0];
				var x = bin.key.split("-")[1];
	
				if(! x) return;
				// HACK
				if(s != group.key) return;
	
				// Filter to this group.
				dim.filterFunction(function (x) { return x==bin.key });
				var bottles = dim.top(Infinity);
	
				bigbin.selectAll("circle.bin"+x).data(bottles)
					.enter().append("circle")
					.attr("class",function (d) { return d.colorField })
					.attr("r","8")
					.attr("transform",function(d,i) {
						var subbin = parseInt(d.Bin.split("-")[1])-1;
						//console.log(subbin + "," + i);
						//console.log(d.Bin);
						var pos = binlookup[subbin][i];
						return "translate(" + pos.x + "," + pos.y + ")";
					})
					.on("mouseover",function (d) { tooltip(d) });
			});
	
		});
	});	
}

function reconnect()
{
	username = $("#username").val()
	password = $("#password").val()
	document.cookie = "username="+username+";"
	document.cookie = "password="+password+";"
	load(username,password)
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";	
}

var username = getCookie("username")
var password = getCookie("password")
load(username,password)
