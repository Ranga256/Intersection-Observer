let cards = document.querySelectorAll(".card");
let cont = document.querySelector(".card-container");

let observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
},{
    threshold: 1
});

let lastCardObserver = new IntersectionObserver((entries,observer)=>{
  const lastCard = entries[0];
  if(!lastCard.isIntersecting){
    return;
  }

  loadNewCards();
  observer.unobserve(lastCard.target);
  lastCardObserver.observe(document.querySelector(".card:last-child"));
});

lastCardObserver.observe(document.querySelector(".card:last-child"))

function loadNewCards() {
  for(let i=0;i<7;i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = 'new card';
    observer.observe(card);
    cont.appendChild(card);
  }
}
  


cards.forEach((card)=>{
    observer.observe(card);
})

