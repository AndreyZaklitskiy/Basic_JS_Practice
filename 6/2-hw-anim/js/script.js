window.addEventListener('load', function(){

	new Slider('.gallery-1');
	let slider2 = new Slider('.gallery-2');

	// setInterval(function(){
	// 	slider2.next();
	// }, 3000);
});

class Slider{
	constructor(selector){
		this.root = document.querySelector(selector);
		this.btnPrev = this.root.querySelector('.buttons .prev');
		this.btnNext = this.root.querySelector('.buttons .next');
	
		this.images = this.root.querySelectorAll('.photos img');
		this.i = 0;
		this.animated = false;

		this.btnPrev.addEventListener('click', () => { this.prev() });
		this.btnNext.addEventListener('click', () => { this.next() });
	}

	prev(){
		if(!this.animated){
			let modificator =  this.images[this.i].classList.add('left');

			let imgHide = this.images[this.i];
			this.i = this.i > 0 ? this.i - 1 : this.images.length - 1;
			this.toogleSlides(imgHide, this.images[this.i]);
		}
	}

	next(){
		if(!this.animated){
			

			let imgHide = this.images[this.i];
			this.i = this.i < this.images.length - 1 ? this.i + 1 : 0;
			let modificator =  this.images[this.i].classList.remove('left');
			this.toogleSlides(imgHide, this.images[this.i]);
		}
	}

	toogleSlides(imgHide, showImg){
		this.animated = true;
		let animateHide;
		let animateShow;
		if(!imgHide.classList.contains('left')) {
			animateHide = imgHide.animate([
				{transform: 'translateX(0)'},
				{ transform: 'translateX(-100%)' }
			], 500);
			animateShow = showImg.animate([
				{ transform: 'translateX(100%)' },
				{transform: 'translateX(0)'}
			], 500);
		}else {
			animateHide = imgHide.animate([
				{transform: 'translateX(0)'},
				{ transform: 'translateX(100%)' }
			], 500);
			animateShow = showImg.animate([
				{ transform: 'translateX(-100%)' },
				{transform: 'translateX(0)'}
			], 500);
		}
		
		
		animateHide.addEventListener('finish', () => {
			imgHide.classList.remove('showed');
			showImg.classList.add('showed');
			this.animated = false;
		});
		

	}
}