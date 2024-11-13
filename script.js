const  booklist = document.getElementById("book-list")
function sub(){
	const et = document.getElementById("title").value.trim();
	const at = document.getElementById("author").value.trim();
	const it = document.getElementById("isbn").value.trim();
	if(!et||!at||!it){
		alert("entr vlue");
	}
	const row = document.createElement("tr")
		row.innerHTML = `
		<td>${et}</td>
		<td>${at}</td>
		<td>${it}</td>
		<td ><button class="delete" >clear</button></td>`
	
	booklist.appendChild(row);
	document.getElementById("title").value= '';
	document.getElementById("author").value= '';
	document.getElementById("isbn").value= '';
	
	
}
booklist.addEventListener('click',(e)=>{
	if(e.target.classList.contains('delete')){
		const row = e.target.parentElement.parentElement;
		booklist.removeChild(row)
	}
})
