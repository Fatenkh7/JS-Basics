var image=[...document.querySelectorAll('img')];
image.forEach((imgs,i) => {
    imgs.addEventListener('mouseover', function(){
        this.src="images/image" + (i+1) + "_2.jpg"
    })
});