const APIURL = "https://pokeapi.co/api/v2/";
const pokeContainer = document.getElementById("poke-container");
const poke_count = 150;
const color = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const main_types = Object.keys(color);

const fetchPokemons = async () => {
  for (let i = 1; i <= poke_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `${APIURL}pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
  //   console.log(data);
};
const createPokemonCard = (pokemon) => {
  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const clr = color[type];

  const id = pokemon.id.toString().padStart(3, "0");
  const name = pokemon.name.toUpperCase();
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  pokemonEl.style.backgroundColor = clr;
  pokemonEl.innerHTML = `<div class="img-container">
<img
  src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"
  alt=""
/>
</div>
<div class="info">
<span class="number">#${id}</span>
<h3 class="name">${name}</h3>
<small class="type">Type:<span>${type}</span></small>
</div>`;

  pokeContainer.appendChild(pokemonEl);
};

fetchPokemons();
