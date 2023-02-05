const currentUrl = document.location.href;
const id = currentUrl.substring(currentUrl.lastIndexOf("?") + 1);
let entry;
async function fetchEntry(id) {
	const url = `https://botw-compendium.herokuapp.com/api/v2/entry/${id}`;
	await fetch(url)
		.then((response) => response.json())
		.then((data) => {
			entry = data.data;
			console.log(entry);
			switch (entry.category) {
				case "creatures":
					displayCreatures(entry);
					break;
				case "equipment":
                    console.log(entry)
					displayEquipments(entry);
					break;
				case "materials":
					displayMaterials(entry);
					break;
				case "monsters":
					displayMonsters(entry);
					break;
				case "treasure":
					displayTreasure(entry);
					break;
				default:
					console.log(`No Category found!`);
			}
		});
}
fetchEntry(id);

function displayCreatures(entry) {
    const creatureToString = 
    `<div class="main-card">
        <h2>${entry.name}</h2>
        <p><span class="underlined">Description</span> : ${entry.description}</p>
        <p><span class="underlined">Common locations</span> : ${entry.common_locations}</p>
        <p><span class="underlined">Cooking Effect</span> : ${entry.cooking_effect}</p>
        <p><span class="underlined">Heart recovered</span> : ${entry.hearts_recovered} ❤️</p>
        <img src="${entry.image}" alt="${entry.name}"></img>
    </div>`;
    Entry.innerHTML = creatureToString;
}

function displayEquipments(entry) {
    const equipmentToString = 
    `<div class="main-card">
        <h2>${entry.name}</h2>
        <p><span class="underlined">Description</span> : ${entry.description}</p>
        <p><span class="underlined">Common locations</span> : ${entry.common_locations}</p>
        <div class="att-def"><p><span class="underlined">Attack</span> : ${entry.attack} ⚔️</p>
        <p><span class="underlined">Defense</span> : ${entry.defense} 🛡️</p></div>
        <img src="${entry.image}" alt="${entry.name}"></img>
    </div>`;
    Entry.innerHTML = equipmentToString;
}

function displayMaterials(entry) {
    const materialToString = 
    `<div class="main-card">
        <h2>${entry.name}</h2>
        <p><span class="underlined">Description</span> : ${entry.description}</p>
        <p><span class="underlined">Common locations</span> : ${entry.common_locations}</p>
        <p><span class="underlined">Cooking Effect</span> : ${entry.cooking_effect}</p>
        <p><span class="underlined">Heart recovered</span> : ${entry.hearts_recovered} ❤️</p>
        <img src="${entry.image}" alt="${entry.name}"></img>
    </div>`;
    Entry.innerHTML = materialToString;
}

function displayMonsters(entry) {
    const monsterToString = 
    `<div class="main-card">
        <h2>${entry.name}</h2>
        <p><span class="underlined">Description</span> : ${entry.description}</p>
        <p><span class="underlined">Common locations</span> : ${entry.common_locations}</p>
        <p><span class="underlined">Drops</span> : ${entry.drops}</p>
        <img src="${entry.image}" alt="${entry.name}"></img>
    </div>`;
    Entry.innerHTML = monsterToString;
}

function displayTreasure(entry) {
    const treasureToString = 
    `<div class="main-card">
        <h2>${entry.name}</h2>
        <p><span class="underlined">Description</span> : ${entry.description}</p>
        <p><span class="underlined">Common locations</span> : ${entry.common_locations}</p>
        <p><span class="underlined">Drops</span> : ${entry.drops}</p>
        <img src="${entry.image}" alt="${entry.name}"></img>
    </div>`;
    Entry.innerHTML = treasureToString;
}
