const apiBtn = document.getElementById('btnApi');
const apiList = document.getElementById('listApi');


apiBtn.addEventListener ('click', ()=>{
    const random = getRandomInt(1, 150)
    fetchData(random)
})


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

const fetchData = async (id)=>{
    try{
        const resp = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data= await resp.json ()
        pintarData(data)

    } catch (error) {
        console.log (error);
    }
}

const pintarData = (pokemon) => {
    console.log (pokemon);
}