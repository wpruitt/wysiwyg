console.log("wysiwyg")

var people = [{
	title: "Musician",
	name: "Jimi Hendrix",
	bio: "American rock guitarist, singer, and songwriter. Although his mianstream career spanned only four yrears, he is wideley regarded as one of the most influention electric guitarists in teh history of popular music, and one of the most celebrated musicians of the 20th century.",
	image: "images/jimihendrix.jpg",
	lifespan: {
		birth: 1942,
		death: 1970,
	}
},
{
	title: "Creative Fellow",
	name: "Shigeru Miyamoto",
	bio: "Japanese video game designer and producer, currently serving as the co-Representative Director of Nintendo. He is best known as the creator of some of the most critically acclaimed and best-selling video games and franchises of all time, such as Donkey Kong, Mario, The Legend of Zelda, Star Fox, F-Zero, and Pikmin.",
	image: "images/shigerumiyamoto.jpg",
	lifespan: {
		birth: 1952,
		death: "Alive",
	}
},
{
	title: "Supreme Khan",
	name: "Gengis Khan",
	bio: "Founder and Great Khan (Emperor) of the Mongol Empire, which became the largest contiguous empire in history after his death. He came to power by uniting many of the nomadic tribes of Northeast Asia. After founding the Empire and being proclaimed'Genghis Khan', he started the Mongol invasions that conquered most of Eurasia.",
	image: "images/gengiskhan.jpg",
	lifespan: {
		birth: 1162,
		death: 1227,
	}
},
{
	title: "Teacher, Author",
	name: "Edwin Abbott Abbott",
	bio: "He was educated at the City of London School and at St John's College, Cambridge, where he took the highest honours in classics, mathematics and theology, and became a fellow of his college. After holding masterships at King Edward's School, Birmingham, he succeeded G. F. Mortimer as headmaster of the City of London School in 1865 at the early age of twenty-six. Here he oversaw the education of future Prime Minister H. H. Asquith.",
	image: "images/edwinabbott.jpg",
	lifespan: {
		birth: 1838,
		death: 1926,
	}
},
];

var coffin = document.getElementById("coffin");
people.forEach(function(pers){
	coffin.innerHTML += `<person class="person" class="dotted">
							<header>${pers.name} - ${pers.title}</header>
							<section><div class="imagediv"><img class="image" src="${pers.image}"></div><br><p class="bio">${pers.bio}</p></section>
							<footer>${pers.lifespan.birth} - ${pers.lifespan.death}</footer>
						</person>`
});

var bioElements = document.getElementsByClassName("bio")
var bioinput = document.getElementById("bioinput")
var personElements = document.getElementsByClassName("person");
for (var i = 0; i < personElements.length; i++){
	personElements[i].addEventListener("click", function(event){
		console.log(event)
		biotext = event.currentTarget.childNodes[3].childNodes[2]
		event.currentTarget.classList.toggle("dotted");
		bioinput.focus()
		console.log(event)
		bioinput.addEventListener("keyup", function(event){
			if (event.key === "Enter"){
				bioinput.value = ""
			}
			else {
				console.log(biotext)
				biotext.textContent = bioinput.value 
			}
		})
	});
}


