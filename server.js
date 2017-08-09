var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    

 'article-one': {
    title: 'article one| suraj kumar', 
    heading:'article one',
    date:'sep 5 , 2017',
    content:`
        <p>
                    This is the Article-one. I hope you are enjoying.
                </p>
                 <p>
                    This is the Article-one. I hope you are enjoying.
                </p> <p>
                    This is the Article-one. I hope you are enjoying.
                </p> <p>
                    This is the Article-one. I hope you are enjoying.
                </p>`
    
},
'article-two': {
    title: 'article two| suraj kumar', 
    heading:'article two',
    date:'sep 5 , 2017',
    content:`
        <p>
                    This is the Article-two. I hope you are enjoying.
                </p>
                 <p>
                    This is the Article-two. I hope you are enjoying.
                </p> <p>
                    This is the Article-two. I hope you are enjoying.
                </p> <p>
                    This is the Article-two. I hope you are enjoying.
                </p>`
    
}, 
'article-three': {
    title: 'article three| suraj kumar', 
    heading:'article three',
    date:'sep 25 , 2017',
    content:`
        <p>
                    This is the Article-three. I hope you are enjoying too.
                </p>
                 `
    
}
};
function createTemplate (data)
{
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
        var htmlTemplate=`<html>
            <head> 
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale-1"/>
            <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
         <div class="container">
                <div>
                    <a href="/"> home </a>
                </div>
        
                <hr/>
                  
                    <h3>${heading}</h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                       ${content}
                       </div>
          </div>
            </body>
        </html>

    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function(req, res){
    //articlename = article-one
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
