$(document).ready(function() {

var cat1 = {name:"Lili", image: "images/cat1.jpg", clicks:0};
var cat2 = {name:"Gege", image: "images/cat2.jpg", clicks:0};
var cat3 = {name:"Moon", image: "images/cat3.jpg", clicks:0};
var cat4 = {name:"Sola", image: "images/cat4.jpg", clicks:0};
var cat5 = {name:"Yummy",image: "images/cat5.jpg", clicks:0};


var cats = [cat1,cat2,cat3,cat4,cat5];

// Let's loop over the numbers in our array
for (var i = 0; i < cats.length; i++) {

    // This is the number we're on...
    var cat = cats[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('li');
    elem.textContent = cat.name;
     var catImgElem= document.getElementById('catImg');
    // $('#catNm_'+i).append(cat.name);
    // $('#catImg_'+i).append(img);
    // $('#clickCount_'+i).append(cat.clicks);
    

    


    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(catCopy) {
        return function() {
           $('#catImg').empty();
           j = cats.indexOf(catCopy);
           var img = new Image();
           img.src= catCopy.image;
           $('#catNm').text(catCopy.name);
           $('#catImg').append(img);
           $('#clickCount').text(catCopy.clicks);
           var catClicks = catCopy.clicks;
           

           

//            $('#catImg').click(function(e) {
//           //the element has been clicked... do stuff here
//           catCopy.clicks++;
//          $('#clickCount').text(catCopy.clicks);

// });
           //imgElem.src = catCopy.image;

           //the element has been clicked... do stuff here
           // j = cats.indexOf(catCopy);
           // var count=catCopy.clicks;
           // count++;
           // catCopy.clicks = count;
           // $('#clickCount_'+j).text(catCopy.clicks);

          };

    })(cat));

    catImgElem.addEventListener('click', (function(catCopy) {

//           //the element has been clicked... do stuff here

             return function(){

              k = cats.indexOf(catCopy);
             catCopy.clicks++;
             cats[k].clicks=catCopy.clicks;
            $('#clickCount').text(catCopy.clicks);

          };

          })(cat));

    
document.body.appendChild(elem);

};


});