class controll {

	constructor(ss1, ss2, ss3) {
		this.ss1 = ss1;
		this.ss2 = ss2;
		this.ss3 = ss3;
	}

	tog(mm) {	
		if (mm == 'one') {
			this.ss1.classList.toggle("hiding");
		}else if (mm == 'two') {
			console.log(mm);
			this.ss2.classList.toggle("hiding");
		}else {
			this.ss3.classList.toggle("hiding");
		} 
	}
}

export { controll }

