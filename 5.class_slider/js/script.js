window.addEventListener('load', function(){


	class Slider {
		constructor(selector, timeout) {
			this.root = document.querySelector(selector),
			this.btnPrev = this.root.querySelector('.buttons .prev');
			this.btnNext = this.root.querySelector('.buttons .next');
			this.images = this.root.querySelectorAll('.photos img');
			this.photos = this.root.querySelector('.photos');
			this.i = 0;
			this.interval;
			this.playing;

			timeout === undefined ? this.timeout = 2000 : this.timeout = timeout;

			this.btnPrev.addEventListener('click', () => {this.stop; this.prev();});
			this.btnNext.addEventListener('click', () => {this.stop; this.next();});

			this.photos.addEventListener('click', ()=> {
				console.log(this.playing);
				if(this.playing) {
					console.log(this.playing);
					this.stop();
				}else {
					this.play();
				}
			})
			this.play();
		}

		play() {
			if(this.timeout > 0) {
				this.interval = setInterval(()=> {
					this.next();
				}, this.timeout)
				this.playing = true;
			}else {
				this.playing = false;
			}
		}

		stop() {
			clearInterval(this.interval);
			this.playing = false;
			
		}

		prev() {
			this.images[this.i].classList.remove('showed');
			this.i--;
			if(this.i < 0){this.i = this.images.length - 1;}
			this.images[this.i].classList.add('showed');
		}

		next() {
			this.images[this.i].classList.remove('showed');
			this.i++;
			if(this.i >= this.images.length){this.i = 0;}
			this.images[this.i].classList.add('showed');
		}
	}
	

	new Slider('.gallery-1', 3000);
	new Slider('.gallery-2');

// 	let btnPrev = document.querySelector('.gallery .buttons .prev');
// 	let btnNext = document.querySelector('.gallery .buttons .next');

// 	let images = document.querySelectorAll('.gallery .photos img');
// 	let i = 0;

// 	btnPrev.addEventListener('click', function(){
// 		images[i].classList.remove('showed');
// 		i--;

// 		if(i < 0){
// 			i = images.length - 1;
// 		}

// 		images[i].classList.add('showed');
// 	});

// 	btnNext.addEventListener('click', function(){
// 		images[i].classList.remove('showed');
// 		i++;

// 		if(i >= images.length){
// 			i = 0;
// 		}

// 		images[i].classList.add('showed');
// 	});

});

/*
new Slider('.gallery-1');
new Slider('.gallery-2'); 

*/

/* this.btn.addEventListener('click', () => {
	this.next()
}) */