// Cache the DOM
var button = document.getElementById("button")
var body =document.getElementById ("body")
var nume =document.getElementById("nume")
var prenume =document.getElementById("prenume")
var img =document.getElementById("img")
var educatie =document.getElementById("educatie")
var an =document.getElementById("anNastere")

const d=new Date()
var year=d.getFullYear()

// Add event listener to buttton
button.addEventListener("click", altaviata)
an.addEventListener("mouseover", displayAge)

function displayAge(){
	an.innerHTML=year-an.innerHTML
}

function altaviata()
{
	nume.inner.HTML = "Functie: Inginer electric"
	prenume.inner.HTML = "Loc de munca: Germania"
	educatie.inner.HTML = "Experiente: <ol><li>intership</li><li>licenta nota 10</li></ol>
	img.src= "inginer.jpg"
	
	body.style.backgroundColor="orange"
	body.style.color="blue"
	img.style.opacity= "60%"
	img.style.width="350px"
	img.style.height="200px"
	
	//opacitate imagine
	
	//grosime margini
}

