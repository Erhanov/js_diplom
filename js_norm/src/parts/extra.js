function extra() {
	let showImg = (n) => {
        n.style.display = "block";
        n.classList.add("animated", "fadeIn");
    }

    let paint = document.querySelectorAll(".extra-paint"),
        paintBtn = document.querySelector(".extra-paint-btn"),
        a = 0;

    paintBtn.addEventListener("click", () => {
        if (a % 2 == 0) {
			paint.forEach(function (item) {
            	showImg(item);
        	});
        	a++;
        } else {
        	paint.forEach(function(item) {
        		item.style.display = 'none';
        	});
        	a++;
        }
    });

}

module.exports = extra;