var products = '[{"title": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue","description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution","image": "1.jpeg","quantity":"10"},{"title": "Mi A2 4GB + 64GB | 6GB + 128GB","description": "15.2cm (5.99) large display","image": "2.jpeg","quantity":"20"},{"title": "Apple iphone 32GB","description": "11.4 cm(4.7)display","image": "3.jpeg","quantity":"30"},{"title": "red mi note 6 pro","description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ","image": "4.jpeg","quantity":"40"}]';
var object = JSON.parse(products);
var i = -1;
// document.getElementById("title").innerHTML = object[0].title;
// document.getElementById("description").innerHTML = object[0].description;
// document.getElementById("image").innerHTML = '<img src="'+object[0].image+'">';
// document.getElementById("quantity").innerHTML = object[0].quantity;
window.onload=execute(0);
function prev() {
  if (i<=0){
      
      i=0; 
  } else{
    i = i-1;
  }
  execute(i);

}
function next(){
console.log("jneijn");
  console.log(i);
  if(i>=object.length-1){
    i=object.length-1;
  } else {
      i++;

  }
  execute(i);
}


function execute(index){
  
  document.getElementById("title").innerHTML = object[index].title;
  document.getElementById("description").innerHTML = object[index].description;
  document.getElementById("image").innerHTML = '<img src="'+object[index].image+'">';
  document.getElementById("quantity").innerHTML = object[index].quantity;

}
function remove(){
  object.splice(i,1);
  next();
  console.log(object.length);
}
function edit(){
  document.getElementById("edit").innerHTML='<div>tite:<input name="title" type="text" id="t"><br>description:<input name="description" type="text" id="d">quantity<input type="text" name="quantity" id="q"><br><br><button onclick="update()">update</button></div>'
}
function update(){
  
  var newtitle = document.getElementById("t").value;
  var newdescription = document.getElementById("d").value;

  var newquantity = document.getElementById("q").value;
  object[i].title = newtitle;
  object[i].quantity = newquantity;
  object[i].quantity = newquantity;
  object[i].description = newdescription;

  // console.log(k);
}