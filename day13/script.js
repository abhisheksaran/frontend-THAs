const btn = document.querySelector("button");
const meme = document.querySelector(".meme");
let url ;
btn.addEventListener("click", async () => {
	fetch('https://meme-api.herokuapp.com/gimme')
	.then(res => res.json())
	.then(data => url = data.url);
//	meme.innerHTML = url;
	const a = document.createElement("OBJECT");
	a.data = url;
	meme.innerHTML = '';
	meme.appendChild(a);
})