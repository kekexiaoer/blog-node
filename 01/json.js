var http = require("http");
function handleRequest(req,res){
	res.writeHead(200,{
		'Content-Type':"application/json"
	});	
	var json = {"username":"keke","age":30};
	res.end(JSON.stringify(json));
};

var s = http.createServer(handleRequest);
s.listen(8888);


