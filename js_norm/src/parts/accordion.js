function accordion() {
    // Аккордион
    let accordBlock = document.querySelectorAll(".accordion-block"),
        accordHeading = document.querySelectorAll(".accordion-heading");

    function hideBlockContent() {
        for (let i = 0; i < accordBlock.length; i++) {
            accordBlock[i].classList.remove("show");
            accordBlock[i].classList.remove('animated', "jackInTheBox");
            accordBlock[i].classList.add("hide");
        }
    }
    hideBlockContent();
    function showBlockContent(b) {
        if (accordBlock[b].classList.contains("hide")) {
            accordBlock[b].classList.remove("hide");
            accordBlock[b].classList.add("show");
            accordBlock[b].classList.add('animated', "jackInTheBox");
        }
    }


    accordHeading.forEach(function(item, i, arr) {
        item.addEventListener('click', event => {
            hideBlockContent();
            showBlockContent(i);
        });
    });
    



}

module.exports = accordion;