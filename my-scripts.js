// set count
if(localStorage.getItem("count") == null){
	localStorage.setItem("count", 0)
}

// update count (display the value of count into the space on the web page)
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count")
}

// add one to count
function plusOne(count){
	localStorage.setItem("count", (Number(localStorage.getItem("count")) +1)) 
	update()
}


// reset count
function reset(){
	if (confirm("Are you sure you want to reset?")) {
    	localStorage.setItem("count",0);
		update();
}