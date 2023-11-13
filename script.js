document.addEventListener ("DOMContentLoaded", function() {

	let naraArtworkElement = document.getElementById ("artworkGrid");

	let naraArtworkDatabase = {
		artwork: [
			{
			"name" : "Through the Break in the Rain",
			"image" : 'images/artworkno1.jpeg',
			"year" : "2020",
			"notes" : "Acrylic on canvas",
			},
			{
			"name" : "LOVE FROM THE SEA",
			"image" : 'images/artworkno2.jpeg',
			"year": "2020",
			"notes": "Pen on paper",
			},
			{
			"name" : "Think of Her",
			"image": 'images/artworkno3.jpeg',
			"year" : "2019",
			"notes" : "Colored pencil on paper",
			},
			{
			"name" : "Untitled",
			"image": "images/artworkno4.jpeg",
			"year": "2020",
			"notes": "Acrylic and colored pencil on corrugated board",
			},
			{
			"name" : "Bloodthirsty Gal",
			"image" : "images/artworkno5.jpeg",
			"year" : "2014",
			"notes": "Colored pencil on paper (envelope)",
			},
			{
			"name" : "Work for Dream to Dream",
			"image" : "images/artworkno6.jpeg",
			"year" : "2001",
			"notes": "Colored pencil and pen on paper",
			},
			{
			"name": "Untitled",
			"image" : "images/artworkno7.jpeg",
			"year" : "2013",
			"notes": "Colored pencil on paper (envelope)",
			},
			{
			"name": "1,2,3,4! It's Everything! (Aomori Version)",
			"image": "images/artworkno8.jpeg",
			"year" : "2008",
			"notes": "Acrylic on wood",
			},
			{
			"name": "Red in Blue",
			"image": "images/artworkno9.jpeg",
			"year": "1999",
			"notes": "Acrylic on cotton mounted on canvas",
			}
		]
	}

	/* https://www.w3schools.com/jsref/met_document_createelement.asp */
	/* https://www.w3schools.com/jsref/met_node_appendchild.asp */
	/* https://www.w3schools.com/jsref/jsref_foreach.asp */

	naraArtworkDatabase.artwork.forEach (artwork => { /* Consulted classmate on help with this */
		let artworkElement = document.createElement ("div")
		artworkElement.classList.add ("artwork");

		let artworkHTML = `
			<h1> ${artwork.name}</h1>
			<img src = "${artwork.image}">
			<h2> ${artwork.year} </h2>
			<h2> ${artwork.notes} </h2>
		`;

		artworkElement.innerHTML = artworkHTML
		artworkContainer.appendChild(artworkElement);
	});
});

