const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '..', 'public')))

// app.get('*', function (req, res, next) {
//   res.sendFile(path.join(__dirname, '..', 'public/index.html'));
// });

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Server is listening on port ${port}`);
});
