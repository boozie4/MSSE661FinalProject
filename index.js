const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 4000;

// Serve static files from Parenting-Coach/public
app.use(express.static(path.join(__dirname, 'Parenting-Coach', 'public')));

app.listen(port, function() {
    console.log('Server started at http://localhost:%s', port);
});
