// 7. defined 'PokeList' //
// 14. accept 'setSelectedPokemonName' function //
const PokeList = ({pokemonList, setSelectedPokemonName}) => {
    return (

        // 8. setting the 'pokemonList' grid //
        <div style={style.gridContent}>
            {pokemonList.map((item) => (
                // 15. Add 'setSelectedPokemonName' as an 'onClick' event into the div //
                <div 
                    key={item.name} 
                    style={style.card}
                    onClick={() => setSelectedPokemonName(item.name)}>
                    {item.name}
                </div>
            ))}
        </div>
    )
}

// 9. defined 'style' for 'gridContent' and 'card' //
const style = {
    gridContent: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 16,
    },
    card: {
        padding: '16px 8px',
        backgroundColor: 'aquamarine',
        borderRadius: '8px',
        cursor: 'pointer',
    },
}

// 10. exported the 'PokeList' //
export default PokeList