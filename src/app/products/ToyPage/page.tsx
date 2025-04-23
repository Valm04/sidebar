
import i

export default async function ToyPage() {
    
    const data = await fetch('https://pokeapi.co/api/v2/pokemos?limit = 123');
    const posts = await data.json();
    console.log(posts.results)
    
    return(
        <div className="flex flex-col items-center justify-center w-full">
           
                <div className='flex flex-column'>
                    <div className="flex flex-wrap gap-10 items-center justify-center">
                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                      width={120}
                      height={120}
                      alt = {pokemon.name}
                    />
                    </div>      
                </div>
        </div>
    )
}