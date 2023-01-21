
/* 

1- click img and icons (select tags)
2-click img >> show slider(big div)
3- show item which i click
4-click icons change img in ascending or descending order
5-change img with keyboard

*/

var imgs = document.querySelectorAll('.slider img');
var closeBtn = document.getElementById('closeBtn');
var preBtn = document.getElementById('preBtn');
var nexBtn = document.getElementById('nexBtn');
console.log(imgs, closeBtn, preBtn, nexBtn);
var slider = document.querySelector('.slider');
var fixedBox = document.getElementById('fixed-box');
var innerBox = document.querySelector('.inner-box');

var imgsArray = [];
for (var i = 0; i < imgs.length; i++) {
    imgsArray.push(imgs[i]);
}
console.log(imgsArray);


// this way is not better for performance1 that's why i will use event delegation way
// for(var i = 0; i<imgs.length ; i++){
//     imgs[i].addEventListener('click' , function(){
//         //code
//     })
// }


// event delegation

var index = 0;

slider.addEventListener('click', function (e) {

    // this show undefied if i click on space or div contain text and i can't use if with this reason ??
    // var imgSrc = e.target.src;
    // console.log(imgSrc);

    var clickedImg = e.target;
    index = imgsArray.indexOf(clickedImg);
    console.log(index);

    // this show null not undefined
    var imgSrc = clickedImg.getAttribute('src');
    if (imgSrc != null) {
        innerBox.style.backgroundImage = `URL(${imgSrc})`;
        fixedBox.style.display = 'flex';
    }
})


// fixedBox.addEventListener('click', function () {
//     fixedBox.style.display = 'none';
// })

function getNext(){
    index++;

    if(index == imgsArray.length){
        index = 0 ;
    }

    var nextImgTag = imgsArray[index];
    console.log(imgsArray[index])

    var imgSrc = nextImgTag.getAttribute('src');
    innerBox.style.backgroundImage = `URL(${imgSrc})`;
}

nexBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    
    getNext()

})

function getPre(){
    index --;

    if(index < 0){
        index = imgsArray.length - 1;
    }

    var preImgTag = imgsArray[index];
    console.log(imgsArray[index])

    var imgSrc = preImgTag.getAttribute('src');
    innerBox.style.backgroundImage = `URL(${imgSrc})`;

}


preBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    getPre();
})


// document or input to use arrow keyboard
// use event info to take key
document.addEventListener('keyup' , function(e){

    if(e.key == 'ArrowRight'){
        getNext()
    } 
    else if (e.key == 'ArrowLeft'){
        getPre()
    }
    else if(e.key == 'Escape'){
        fixedBox.style.display = 'none';
    }

})


closeBtn.addEventListener('click' , function(){
    fixedBox.style.display = 'none';

})










