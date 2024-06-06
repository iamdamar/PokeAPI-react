import {useState, useEffect} from "react"
import PokeList from "./components/PokeList"
import PokeDetail from "./components/PokeDetail"

function App() {
  // 1. defined 'pokemonList' state //
  const [pokemonList, setPokemonList] = useState([])

  // 11. defined a new state //
  const [selectedPokemonName, setSelectedPokemonName] = useState("")

  // 16. defined a new state to store Pokemon detail//
  const [pokemonDetail, setPokemonDetail] = useState()

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then((res) => res.json())
    .then((data) => setPokemonList(data.results))
    .catch((err) => console.log(err))
  }, [])

  // 2. fetch Pokemon data from 'PokeAPI' //
  // 19. get pokemon detail everytime selectedPokemonState's state changed //
  useEffect(() => {
    if (!selectedPokemonName) return 
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}`) 
      .then((res) => res.json())
   // 3. set the value of Pokemon data to 'pokemonList' state //
      .then((data) => setPokemonDetail(data))
      .catch((err) => console.log(err))
  }, [selectedPokemonName])

  const clear = () => {
    setSelectedPokemonName("")
    setPokemonDetail()
  }

  return (
    <div style={styles.container}>
      <h2>PokeAPI</h2>

      {/*4. insert the Pokemon data to 'Pokelist' component*/}
      {/*12. Insert the 'setSelectedPokemonName' function as a prop */}
      <PokeList 
        pokemonList={pokemonList}
        setSelectedPokemonName={setSelectedPokemonName} />

        {/*13. show the selected pokemon name*/}
        {/*17. show the detail of selected pokemon */}
        {pokemonDetail && (
          <div>
            <h2>Pokemon Detail</h2>
            <PokeDetail pokemonDetail={pokemonDetail} />
            <button style={styles.button} onClick={() => clear()}>
              Clear
            </button>
          </div>
        )}
    </div>
  )
}

// 5. defined 'styles' for 'container' //
const styles = {
  container: {
    width: '50%',
    margin: '0 auto',
    padding: '80px',
    textAlign: 'center',
  },
  // 18. add style for clear button //
  button: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderRadius: '6px',
    padding: '12px 24px',
    fontSize: '1em',
    cursor: 'pointer',
    marginTop: '32px',
  },
}

// 6. exported the 'App' function //
export default App