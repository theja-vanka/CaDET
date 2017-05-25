var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

var art;
var hin;
var xyz;

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
var today = dd+'/'+mm+'/'+yyyy;

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index', { title: 'CaDET' , fullname: 'Cambridge Daily Edition Times', date: today});
  next()
});

router.get('/toi', function(req, res, next) {
  fetch('https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=0ca6ea2df18e4d128f1490601cfa5785')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
      art = json.articles;
      res.render('toi', { title: "The Times Of India", son: art });
      
      next()
    });
});


router.get('/hin', function(req, res, next) {
  fetch('https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=0ca6ea2df18e4d128f1490601cfa5785')
.then(function(response){
    return response.json();
})
.then(function(json){
   hin = json.articles;
    res.render('hin', { title: "The Hindu", son: hin });
  next()
});

 
});

router.get('/bbc', function(req, res, next) {
  fetch('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=0ca6ea2df18e4d128f1490601cfa5785')
.then(function(response){
    return response.json();
})
.then(function(json){
   hin = json.articles;
    res.render('bbc', { title: "BBC News", son: hin });
  next()
});

 
});

module.exports = router;
