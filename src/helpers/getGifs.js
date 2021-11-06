

const getGif = async(category) => {

    const apiKey = "qPsZQJFTytqz0J6TqTmCZb58dTWaqyRX";
    const endPoint = "https://api.giphy.com/v1/gifs/search";

    const response = await fetch(`${endPoint}?api_key=${apiKey}&q=${ encodeURI(category) }&limit=${10}`, { method: 'get' });
    const { data } = await response.json();
    const gifs = data.map( ({id, images: { downsized_large: { url } }, title }) => ({ id, title, url }) );
    return gifs;
}

export default getGif;