
(function () {
    const ratings = document.querySelectorAll("#rating");
    const btn = document.querySelector("#btn");
    const templateRating = document.querySelector("#template_rating");
    const templateThankYou = document.querySelector("#template_thank-you");
    const spanScore = document.querySelector("#score");

    let score = null;
   
    ratings.forEach( rating => {
        rating.addEventListener("click", e => {

            deleteClasses();
            
            if(!e.target.classList.contains("bg-grey-medium")) {
                e.target.classList.add("bg-grey-medium");
                e.target.classList.add("text-white");
                e.target.classList.remove("bg-grey-light/10");
                e.target.classList.remove("text-grey-medium");

                score = e.target.textContent;
            } 
        })
    })

    
    btn.addEventListener("click", e => {
        if(score) {
            templateRating.classList.add("hidden");
            templateThankYou.classList.remove("hidden");

            spanScore.innerHTML = score;
        } 
    })
    

    function deleteClasses () {
        ratings.forEach(rating => {

            const element = rating.firstElementChild;

            if(element.classList.contains("bg-grey-medium")) {
                element.classList.remove("bg-grey-medium");
                element.classList.remove("text-white");
                element.classList.add("bg-grey-light/10");
                element.classList.add("text-grey-medium");
            }
        })
    }
})();
