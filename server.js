var express = require('express');
var multer = require('multer');
var upload = multer();

var app = express();

app.use(express.static('public'))

app.post('/upload', upload.single('file'), function (req, res) {
    res.json({'size' : req.file.size});
})

app.listen(process.env.PORT || 3000);