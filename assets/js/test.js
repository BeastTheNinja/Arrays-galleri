const thumbs = document.querySelectorAll("#thumbs img");
const bigImage = document.querySelector("#big");

thumbs.forEach(thumb => {
    thumb.addEventListener("click", function () {
        // Gem den store billedes sti midlertidigt
        let tempSrc = bigImage.src;
        
        // Byt billede
        bigImage.src = this.src;
        this.src = tempSrc;
    });
});


