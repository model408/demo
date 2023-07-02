var vidName = document.querySelectorAll('.vid-name')
var vd = document.querySelector('.video')
var name = vd.name

vidName.forEach(item => {
    // item.html('will')
    console.log(item);
    item.innerHTML =`${item.id}`
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

var videos = document.querySelectorAll('.video');
for(var i=0; i<videos.length; i++)
   videos[i].addEventListener('play', function(){pauseAll(this)}, true);


function pauseAll(elem){
	for(var i=0; i<videos.length; i++){
		//Is this the one we want to play?
		if(videos[i] == elem) continue;
		//Have we already played it && is it already paused?
		if(videos[i].played.length > 0 && !videos[i].paused){
		// Then pause it now
		  videos[i].pause();
		}
	}
  }