function accordion() {
    // Аккордион
    let accordion = document.querySelectorAll('.activate-accordion'),
        accordionBlock = document.querySelectorAll('.accordion-block'), //accordion_info
        accordionHeading = document.querySelectorAll('.accordion-heading'); //span_headind

    console.log(accordionHeading);

    let hideBlockContent = () => {
        for (let i = 0; i < accordionBlock.length; i++) {
            accordionBlock[i].classList.remove('show');
            accordionBlock[i].classList.remove('slideInDown');
            accordionBlock[i].classList.add('hide');
            accordionHeading[i].classList.remove('active');
        }
    }

    hideBlockContent(1);

    let showBlockContent = (b) => {
        if (accordionBlock[b].classList.contains('hide')) {
            accordionBlock[b].classList.remove('hide');
            accordionBlock[b].classList.add('show');
            accordionBlock[b].classList.add('slideInDown');
            accordionHeading[b].classList.add('active');
        }
    }

    accordion.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('heading')) {
            for (let i = 0; i < accordionBlock.length; i++) {
                if (target == accordionHeading[i]) {
                    hideBlockContent(0);
                    showBlockContent(i);
                }
            }
        }

    });

}

module.exports = accordion;