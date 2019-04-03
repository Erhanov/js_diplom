function filter() {
	let showImg = (n) => {
        n.style.display = "block";
        n.classList.add("animated", "fadeIn");
    }

	let port = document.querySelector(".portfolio"), 
        portImg = document.querySelectorAll(".portfolio-img"),
        allWorks = document.querySelector(".all"), 
        lovers = document.querySelector(".lovers"), 
        chef = document.querySelector(".chef"), 
        girl = document.querySelector(".girl"), 
        guy = document.querySelector(".guy"),
        grandma = document.querySelector(".grandmother"),
        grandpa = document.querySelector(".granddad"), 
        imgBlock = document.querySelectorAll(".portfolio-block"),
        portNo = document.querySelector(".portfolio-no");

    port.addEventListener("click", function (event) {
        let target = event.target;
        function checkBtn() {
            if (target && (target == lovers || target == allWorks || target == chef || target == girl || target == guy || target == grandma || target == grandpa)) {
                portImg.forEach(function(item) {
					item.classList.remove("active");
                });
                    
                imgBlock.forEach(item => {
                    item.style.display = "none";
                    item.classList.remove("fadeIn");
                });
                portNo.style.display = "none";
            }
        }

        function portfolioNoImgs() {
            portNo.style.display = "block";
            portNo.classList.add("fadeIn");
        }

        if (target && target == lovers) {
            checkBtn();
            lovers.classList.add("active");
            imgBlock.forEach(item => {
                if (item.classList.contains("lovers")) {
                    showImg(item);
                }
            });
        }

        if (target && target == allWorks) {
            checkBtn();
            allWorks.classList.add("active");
            imgBlock.forEach(item => {
                if (item.classList.contains("all")) {
                    showImg(item);
                }
            });
        }

        if (target && target == chef) {
            checkBtn();
            chef.classList.add("active");
            imgBlock.forEach(item => {
                if (item.classList.contains("chef")) {
                    showImg(item);
                }
            });
        } 

        if (target && target == girl) {
            checkBtn();
            girl.classList.add("active");
            imgBlock.forEach(item => {
                if (item.classList.contains("girl")) {
                    showImg(item);
                }
            });
        }

        if (target && target == guy) {
            checkBtn();
            guy.classList.add("active");
            imgBlock.forEach(item => {
                if (item.classList.contains("guy")) {
                    showImg(item);
                }
            }); 
        }

        if (target && target == grandma) {
            checkBtn();
            grandma.classList.add("active");
            portfolioNoImgs();
        }

        if (target && target == grandpa) {
            checkBtn();
            grandpa.classList.add("active");
            portfolioNoImgs();
        }
    });
}

module.exports = filter;