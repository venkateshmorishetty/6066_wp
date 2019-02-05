var bodyparser = require('body-parser');
// var fs = require('fs');

var urlencodedParser = bodyparser.urlencoded({extended:false}); 
// let data = fs.readFileSync('../assets/catalog.json');
// let products = JSON.parse(data);
// console.log(products);
var products = [{"title": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue","description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution","image": "1.jpeg","quantity":"10"},{"title": "Mi A2 4GB + 64GB | 6GB + 128GB","description": "15.2cm (5.99) large display","image": "2.jpeg","quantity":"20"},{"title": "Apple iphone 32GB","description": "11.4 cm(4.7)display","image": "3.jpeg","quantity":"30"},{"title": "red mi note 6 pro","description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ","image": "4.jpeg","quantity":"40"}];


module.exports=function(app){
    
    app.post('/home/:id', urlencodedParser,function(req, res){
        var index = req.params.id;
        var name1 = req.body.newtitle;
        console.log(name1);

        // // res.render('home',{object:products});
        // var index = req.params.id;
        // console.log(index);
        // var temp = req.body;
        
        // console.log(newtitle);
        products[index].title = req.body.newtitle;
        products[index].description = req.body.newdescription;
        products[index].quantity = req.body.newquantity;
        
        // res.json(products);
        // console.log(products);
        // console.log(temp);
        // res.json(products);
        
        // res.redirect('home',{object:products});

        // res.render('home',{object:products});
        // res.render('/home');
        res.redirect('/home');
        
    });
    app.get('/home', function(req, res){
        res.render('home',{object:products});
    });
    app.delete('/home/:item', function(req, res){
        var data = req.params.item.replace(/\-/g," ");
        
        var index = -1;
        for (var i=0;i<products.length;i++){
            console.log(products[i].title);
            
            if(products[i].title===data){
                
                index = i;
            }
        }
        products.splice(index, 1);

        res.json(products); 
    });
    
};