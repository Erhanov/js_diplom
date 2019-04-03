function extra() {
	let showImg = (n) => {
        n.style.display = "block";
        n.classList.add("animated", "fadeIn");
    }

    let paint = document.querySelectorAll(".extra-paint"),
        paintBtn = document.querySelector(".extra-paint-btn");

    paintBtn.addEventListener("click", () => {
		paint.forEach(function (item) {
        	showImg(item);
        	paintBtn.style.display = 'none';
    	});
        
    });

}

module.exports = extra;