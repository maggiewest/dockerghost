var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end(`
	<html>
	<head>
	  <meta charset="utf-8"/>
	  <meta name="viewport" content="width=device-width, initial-scale=1">
	  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	  <title>DEVOPS GHOSTINSPECTOR DEMO</title>
	  <link rel="stylesheet" type="text/css" href="https://s3.amazonaws.com/unfilteredproject.org/CSS/devopsdemo.css">
	</head>
	<body>

	  <nav>
	  	<a id="logo" href="#Home">Devops Demo</a>
	  </nav>
	  <div class="headline header">
	  	<h1>Hello from our local web app</h1>
	  </div>


	</body>
	</html>
	`);
}).listen(8000);
console.log('Server running on port 8000');

