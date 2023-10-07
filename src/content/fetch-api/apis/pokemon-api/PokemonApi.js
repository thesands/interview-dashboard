import './PokemonApi.css';

import React, { useState, useEffect } from 'react';

// function FetchDataMultipleChain() {
//   return (
//     <div>
//       <pre>
//         <code>
//           {`
// function FetchDataMultipleChain(endpoints) {
//   const data = [];
//   let promise = Promise.resolve();
//   for (const endpoint of endpoints) {
//     promise = promise.then(() => {
//       return fetch(endpoint)
//         .then((response) => response.json())
//         .then((d) => {
//           data.push(d);
//         });
//     });
//   }

//   return promise.then(() => data);
// }
// `}
//         </code>
//       </pre>
//     </div>
//   );
// }

// function FetchDataSingle(endpoint) {
//   return (
//     <div>
//       <pre>
//         <code>
//           {`
// function FetchDataSingle(endpoint) {
//   return fetch(endpoint).then((response) => response.json());
// }
// `}
//         </code>
//       </pre>
//     </div>
//   );
// }

async function FetchDataMultipleAsync(urls) {
  const promises = urls.map((url) =>
    fetch(url).then((response) => response.json()),
  );

  try {
    return await Promise.all(promises);
  } catch (error) {
    console.error(error);
  }
}

function formatPokemonData(pokemonArray) {
  const formattedPokemonArray = [];

  pokemonArray.forEach((pokemon) => {
    const urlSplit = pokemon.pokemon.url.split('/');

    const formattedPokemon = {
      name: pokemon.pokemon.name,
      url: pokemon.pokemon.url,
      id: urlSplit[urlSplit.length - 2],
    };
    formattedPokemonArray.push(formattedPokemon);
  });

  return formattedPokemonArray;
}

function GetLowestSteelPokemon({ pokemonTypes }) {
  const steelPokemon = pokemonTypes.find(
    (type) => type.name === 'steel',
  ).pokemon;
  const firstPokemon = steelPokemon[0];

  return (
    <div>
      <div>{`name: ${firstPokemon.name}`}</div>
      <div>{`id: ${firstPokemon.id}`}</div>
    </div>
  );
}

async function GetDragonPokemonWithOutrage(pokemonTypes) {
  const dataResponse = await fetch('https://pokeapi.co/api/v2/move/outrage/');
  const outrageData = await dataResponse.json();

  const pokemonWithOutrage = outrageData.learned_by_pokemon;

  if (pokemonWithOutrage) {
    const dragonPokemon = pokemonTypes.find(
      (type) => type.name === 'dragon',
    ).pokemon;

    // search thru dragon pokemon and look for first pokemon with outrage
    // loop thru dragon, check if pokemon is in outrage list, return if true
    for (let i = 0; i < pokemonWithOutrage.length; i++) {
      const outragePokemon = pokemonWithOutrage[i];

      const dragonWithOutrage = dragonPokemon.find(
        (pokemon) => pokemon.name === outragePokemon.name,
      );

      if (dragonWithOutrage) {
        return dragonWithOutrage;
      }
    }
  }
}

function ActualApi() {
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [outragePokemon, setOutragePokemon] = useState(null);

  useEffect(() => {
    const urls = [
      'https://pokeapi.co/api/v2/type/steel/',
      'https://pokeapi.co/api/v2/type/dragon',
    ];

    FetchDataMultipleAsync(urls).then((typesData) => {
      const pokemonData = [];
      typesData.forEach((type) => {
        pokemonData.push({
          name: type.name,
          pokemon: formatPokemonData(type.pokemon),
          collapsed: true,
        });
      });

      setPokemonTypes(pokemonData);

      GetDragonPokemonWithOutrage(pokemonData).then((pokemon) =>
        setOutragePokemon(pokemon),
      );

      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  function collapseType(updatedType) {
    updatedType.collapsed = !updatedType.collapsed;

    const newTypes = pokemonTypes.map((type) => {
      return type.name === updatedType.name ? updatedType : type;
    });

    setPokemonTypes(newTypes);
  }

  return (
    <div>
      <h3 className="section-header">
        Step 1: Fetch Steel Type and Dragon Type Pokemon
      </h3>
      <div>
        {pokemonTypes.map((type) => {
          return (
            <div key={type.name} className="pokemon-type-item">
              <h3 className="section-header">{type.name}</h3>
              <button
                className="header-button"
                onClick={() => {
                  collapseType(type);
                }}>
                {type.collapsed ? 'Expand' : 'Collapse'}
              </button>
              {!type.collapsed ? (
                <div>
                  {type.pokemon.map((pokemon) => {
                    return <div>{JSON.stringify(pokemon, null, 2)}</div>;
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <h3 className="section-header">
        Step 2: Select Steel Pokemon with Lowest ID
      </h3>
      <GetLowestSteelPokemon pokemonTypes={pokemonTypes} />
      <h3 className="section-header">
        Step 3: Select Highest ID Pokemon with Outrage
      </h3>
      <div>
        <div>{`name: ${outragePokemon?.name}`}</div>
        <div>{`id: ${outragePokemon?.id}`}</div>
      </div>
    </div>
  );
}

function PokemonApi() {
  return (
    <div className="pokemon-api">
      <h3 className="section-header">Pokemon API</h3>
      <div>Fetch data from the Pokemon API</div>
      <ActualApi />
    </div>
  );
}

export default PokemonApi;
