// bad code
window.addEventListener('load', function(){

	let timer1 = new Timer('.timer1', 10);
	let timer2 = new Timer('.timer2', 30);
	let timer3 = new TimerFormat('.timer3', 5000);

	// ===========
	let timer4 = new niseTimer('.timer4', 3000);

	timer1.start();
	timer2.start();
	console.log(timer1)
	document.querySelector('.pr2buy').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		timer2.stop();
	});

	console.log(timer3)
	timer3.start();

	timer4.start();

});

class Timer{
	constructor(selector, time){
		this.box = document.querySelector(selector);
		this.time = time;
		this.interval;
		this.render();
	}

	render(){
		this.box.innerHTML = this.time; 
	}

	start(){
		this.interval = setInterval(() => {
			this.tick();
		}, 1000);
	}

	tick(){
		this.time--;
		this.render();
	
		if(this.time <= 0){
			this.stop();
		}
	}

	stop(){
		clearInterval(this.interval);
	}
}

class TimerFormat extends Timer{
	render(){
		let h = parseInt(this.time / 3600);
		let hs = this.time % 3600;
		let m = parseInt(hs /  60);
		let s = hs % 60;
		this.box.innerHTML = `${h}:${m}:${s}`;
	}
}

// =============

class niseTimer extends TimerFormat {
	constructor(selector, time, onEnd) {
		super(selector, time);
	}

	render(){
		super.render;
		
		console.log(super.render);
		this.box.innerHTML = `${h} часов ${m} минут ${s} секунд`;
	}

	declOfNum(n, text_forms) {
		n = Math.abs(n) % 100;
		console.log(n);
		var n1 = n % 10;
		if (n > 10 && n < 20) { return text_forms[2]; }
		if (n1 > 1 && n1 < 5) { return text_forms[1]; }
		if (n1 == 1) { return text_forms[0]; }
		return text_forms[2];
	}
}


/*==========
function declOfNum(number, words) {  
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}
=========*/

/* class TimerFormat extends Timer{
	constructor(selector, time){
		super(selector, time); // super.constructor
		this.a = 1;
	}

	render(){
		let h = parseInt(this.time / 3600);
		let hs = this.time % 3600;
		let m = parseInt(hs /  60);
		let s = hs % 60;
		this.box.innerHTML = `${h}:${m}:${s}`;
	}

	start(){
		console.log('timer started');
		super.start();
	}
} */

// super

/*
	class Cat{ 
		findEat(){
			// go hunt
		}
	}

	class CatHome{
		findEat(){
			while(hungry){
				sayMyow();

				if(humanNotExists){
					break;
				}
			}

			if(veryHungry){
				super.findEat();
			}
			else{
				this.findHuman();
				this.findEat();
			}
		}
	}

*/