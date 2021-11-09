const getAlbum = async() => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    try{
        const respuesta = await fetch(url);
        const album = await respuesta.json();
        console.log(album.albumId);
        album.forEach(element => {
            if(element.id <= 20){
                console.log(`album ID: ${element.id}`);
                console.log(`Titulo: ${element.title}`);
                console.log(`-------------------------`);
            }    
        });
        /*for (let i = 0 ; i < 20; i++ ){
            console.log(`album ID: ${album[i].id}`);
            console.log(`Titulo: ${album[i].title}`);
            console.log(`-------------------------`);
            }*/
    }catch (error){
        console.Error("error")
    }
    //return "Informacion enviada"
};
//setTimeout(getAlbum, 3000);
//getAlbum();

const mensaje = async () => new Promise
((resolve, reject) => {setTimeout(() => {
    resolve("Informacion enviada");
}, 3000)
})

const mensajeRecibido = async (mensaje) => {
    const tiempo = await mensaje();
    console.log(tiempo);
}

getAlbum();
mensajeRecibido(mensaje);