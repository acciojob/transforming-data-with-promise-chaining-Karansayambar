let input = document.querySelector("#ip");
let btn = document.querySelector("#btn");
let output = document.querySelector("#output");

btn.addEventListener("click", () => {
    function numbers() {
    	return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(input.value);
			    output.textContent = (`Result : ${input.value}`);
			},2000)
		})
		.then((multiply)=> {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(multiply * 2);
					output.textContent = (`Result : ${multiply * 2}`);
				},1000);
			})
			.then((subtract) => {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve(subtract - 3);
						output.textContent = (`Result : ${subtract - 3}`);
					}, 1000);
				})
				.then((divide) => {
					return new Promise((resolve, reject) => {
						setTimeout(() => {
							resolve(divide / 2);
							output.textContent = (`Result : ${divide / 2}`);
						}, 1000);
					})
					.then((add) => {
						return new Promise((resolve, reject) => {
							setTimeout(() => {
								resolve(add + 10);
								output.textContent = (`Result : ${add + 10}`)
							}, 1000);
						})
					})
					.catch((err) => {
						output.textContent = err;
					});
				})
			})
		})
    }
	numbers();
});
