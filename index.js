const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 4000;

app.set('port', port);
app.use(cors());

app.use(express.static(__dirname + '/public'));

// ROUTE
app.get('/[^\.]+$', function(req, res) {
  res.set('Content-Type', 'text/html')
    .sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(app.get('port'), function(){
  console.log("Node app is running at localhost:" + app.get('port'));
});
