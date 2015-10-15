var http = require("http");
function loadHttp(req,res){
	var body = "thank you!!!";
	var contentLength = body.length;
	res.writeHead(200,{
		'content-length':contentLength,
		'content-type':'text/plain'
	});
	res.end(body);
};
var s = http.createServer(loadHttp);
s.listen(8888);