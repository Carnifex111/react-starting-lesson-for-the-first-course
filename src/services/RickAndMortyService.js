class RickAndMortyService {
  getResourse = async (url) => {
    let responce = await fetch(url);

    if (!responce.ok) {
      console.error(responce.status);
    }

    return await responce.json();
  };

  getAllCharacters = () => {
    return this.getResourse("https://rickandmortyapi.com/api/character");
  };

  getOneCharacter = (id) => {
    return this.getResourse(`https://rickandmortyapi.com/api/character/${id}`);
  };
}

export default RickAndMortyService;
