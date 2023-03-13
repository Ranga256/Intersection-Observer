let images = document.querySelectorAll(".image");

let observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.src = entry.target.getAttribute("data-src");
            observer.unobserve(entry.target);
        }
    });
},{
    threshold: 1
});

images.forEach((image)=>{
    observer.observe(image);
})