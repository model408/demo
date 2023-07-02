var vidName = document.querySelectorAll('.vid-name')
var vd = document.querySelector('.video')
var name = vd.name

vidName.forEach(item => {
    // item.html('will')
    console.log(item);
    item.innerHTML ='Will it rain today？'
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
