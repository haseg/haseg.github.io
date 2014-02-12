var fs = require('fs'),
    gfm = require('github-flavored-markdown'),
    mddir = './fieldstones';

fs.readdir(mddir, function(err, file){
    var stones = [];
    file.forEach(function(f){
	if (f.substr(-3) == ".md"){
	    var mddata = fs.readFileSync(mddir + '/' +f);
	    stones.push({
		title: f,
		contents : gfm.parse(mddata.toString())
	    });
	};
    });
    fs.writeFileSync(
	mddir + '/_data.json',
	JSON.stringify(stones.sort(function(a, b){return 0.5 - Math.random();}))
    );
});
