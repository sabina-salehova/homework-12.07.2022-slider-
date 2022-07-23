
let myslider=[
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg'
]

let currentSlider=0;
let img=document.querySelector('.slider img');
img.src=myslider[currentSlider];

let next=document.querySelector('.slider .next');
let prev=document.querySelector('.slider .prev');

function autoPlay(){
    currentSlider++;
    
    if(currentSlider>myslider.length-1)
    currentSlider=0;

    img.src=myslider[currentSlider];
}

next.addEventListener('click', autoPlay);

prev.addEventListener('click', function(){
    currentSlider--;
    
    if(currentSlider<0)
    currentSlider=myslider.length-1;

    img.src=myslider[currentSlider];
});

setInterval(()=>{
 autoPlay();
}, 3000)


function addDots(){
    var icons=``;
    for (let index = 0; index < myslider.length; index++) {    
    icons+=`
        <i class="fa-solid fa-dash"></i>
    `;
    }
    document.getElementById('dots').innerHTML=icons;

}

addDots();

let dots=document.querySelectorAll('#dots i');

for (let index = 0; index < dots.length; index++) {
    dots[index].addEventListener('click',function(){
        currentSlider=index;
        img.src=myslider[currentSlider];
    })
}

