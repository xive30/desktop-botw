


alert("j'existe")

async function fetchMaterials () {
    const materials = [];
    await fetch("https://botw-compendium.herokuapp.com/api/v2/category/materials")
    .then((response) => response.json())
    .then((data) => {
        // console.log(data.data);
        materials.push(data.data)
    })
    .catch((error) => {
        console.log(`erreur du fetch ${error}`);
    })
    
    displayMaterials(materials);
};

function displayMaterials(materials) {
    console.log(materials[0]);
    const materialToString = materials[0]
    .map((material) => 
        `
        <div class="card">
            <h3>${material.name}</h3>
            <img src="${material.image}" alt="">
        </div>
        `
    ).join("");
    console.log(materialToString);
    materialsD.innerHTML = materialToString;
}

fetchMaterials();

{/* <p><span class="underlined">Description</span> : ${material.description}</p>
            <p><span class="underlined"> Cooking effect</span> : ${material.cooking_effect}</p> */}