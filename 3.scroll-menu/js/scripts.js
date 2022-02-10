window.addEventListener('load', function(){
	

	let menu = document.querySelector('.menu');
	let links = menu.querySelectorAll('a');

	let btnUp = document.querySelector('.btnUp');


	// -------debounce (применять для тяжелых ф-ий)
	// let scrollTimeout;
	// window.addEventListener('scroll', function() {
	// 	window.clearTimeout(scrollTimeout);
	// 	scrollTimeout = this.setTimeout(onScroll, 200);
	// })
	// ---------
//-----------throtle
// делается так же, только нужно хранить времянную метку, можно получить её с помощью
// new Date getTime, и просто смотрите что если время ещё не прошло то ничего не делаете.
	// setInterval(onScroll, 200);
	let lastCallScrollFn = -Infinity;
	window.addEventListener('scroll', function() {
		let currentTime = Date.now();
		if(currentTime > lastCallScrollFn + 100 ) {
			console.log('it_works!!!')
			onScroll();
			lastCallScrollFn = currentTime;
		}
	})
// ------------


	btnUp.addEventListener('click', function() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	})
	// if(window.pageYOffset == 0){
	// 	btnUp.classList.add('hide');
	// }

	function onScroll() {
		let pos = window.pageYOffset;
		if(pos < window.innerHeight) {  
			btnUp.classList.add('btnUp-visible');
		}
		else {
			btnUp.classList.remove('btnUp-visible');
		}


		for(let i = links.length - 1; i>=0; i--) {
			let link = links[i];
			let target = document.querySelector(link.hash);
			
			if((pos + window.innerHeight/2) > target.offsetTop) {
				menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
				link.classList.add('menu__link-active');
				break;
			}
		}
	}
	// window.addEventListener('scroll', function() {
	// 	onScroll();
	// });




	menu.addEventListener('click', function(e){
		let link = e.target;

		if(link.classList.contains('menu__link')){
			e.preventDefault();
			scrollToTarget(link.hash);
		}
	});

	if(location.hash !== ''){
		scrollToTarget(location.hash);
	}

	function scrollToTarget(id){
		let target = document.querySelector(id);

		if(target !== null){
			let pos = target.offsetTop - 70;

			window.scrollTo({
				top: pos,
				behavior: 'smooth'
			});

			/* window.scrollTo(0, pos); */
		}
	}

});