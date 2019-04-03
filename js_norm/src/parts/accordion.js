function accordion() {
    // Аккордион
    let accordBlock = document.querySelectorAll(".accordion-block"),
        accordHeading = document.querySelectorAll(".heading"),
        MainBody = document.getElementsByTagName("body")[0],
        a = 0,
        b = 0;

    function hideBlockContent() {
        for (let i = 0; i < accordBlock.length; i++) {
            accordBlock[i].classList.remove("show");
            accordBlock[i].classList.remove('animated', "jackInTheBox");
            accordBlock[i].classList.add("hide");
            accordHeading[i].classList.remove('active');
        }
    }
    hideBlockContent();
    function showBlockContent(b) {
        if (accordBlock[b].classList.contains("hide")) {
            accordBlock[b].classList.remove("hide");
            accordBlock[b].classList.add("show");
            accordBlock[b].classList.add('animated', "jackInTheBox");
            accordHeading[b].classList.add('active');
        }
    }



    accordHeading.forEach(function(item, i, arr) {
        item.addEventListener('click', event => {
            let target = event.target;
            if (target && target.classList.contains('active')) {
                hideBlockContent();
                a++;
            } else if (target && target.classList.contains('heading')) {
                hideBlockContent();
                showBlockContent(i);
                a++;
            }
        });
    });

    MainBody.addEventListener('click', event => {
        
        let target = event.target;
        if (!(target && target.classList.contains('heading'))) {
            hideBlockContent();
            a++;
        }

    });
    



}

module.exports = accordion;