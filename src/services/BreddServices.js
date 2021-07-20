export const getOneBreed = async (breed) => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breed}`);
    const json = await response.json()

    let result = {
      url: json[0].url,
      ...json[0].breeds[0]
    }

    return result; 
}

export const getPhotosBreed = async (breed) => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&limit=8`);
    const json = await response.json()
    return json; 
}

export const getIdAllBreed = async () => {    
    const response = await fetch('https://api.thecatapi.com/v1/breeds');
    const breed = await response.json();
    return breed.map(el => { 
      return {
          id: el.id,
          name: el.name
      }
    });       
}