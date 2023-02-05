
async function fetchCategory(category) {
	const categories = [];
	const url = `https://botw-compendium.herokuapp.com/api/v2/category/${category}`;
	await fetch(url)
		.then((response) => response.json())
		.then((data) => {
			categories.push(data.data);
		})
		.catch((error) => {
			console.log(`erreur du fetch ${error}`);
		});
    if (category == "creatures"){
        return displayCreatures(categories)
    }
	return displaycategories(categories);
}

function displaycategories(categories) {
	// console.log(categories[0]);
	const materialToString = categories[0]
		.map(
			(element) =>
				`
        <div class="card">
            <h3>${element.name}</h3>
            <img src="${element.image}" alt="">
        </div>
        `
		)
		.join("");
	console.log(materialToString);
	Category.innerHTML = materialToString;
}

function displayCreatures(CategoryCreatures){
    const Food = CategoryCreatures[0].food
		.map(
			(element) =>
				`
        <div class="card">
            <h3>${element.name}</h3>
            <img src="${element.image}" alt="">
        </div>
        `
		)
		.join("");
    const nonFood = CategoryCreatures[0].non_food
		.map(
			(element) =>
				`
        <div class="card">
            <h3>${element.name}</h3>
            <img src="${element.image}" alt="">
        </div>
        `
		)
		.join("");
    Category.innerHTML = `<div><h3>Food</h3><div class="list-card"">${Food}</div></div><div><h3>Non Food</h3><div class="list-card">${nonFood}</div></div>`;

}

{
	/* <p><span class="underlined">Description</span> : ${element.description}</p>
            <p><span class="underlined"> Cooking effect</span> : ${element.cooking_effect}</p> */
}
