
import { useState, useEffect } from 'react';
import getGif from '../helpers/getGifs';

const useFethcGif = (category) => {

    const [state, setstate] = useState({ data: [], loading: true });

    useEffect( () => {
        getGif(category).then( gifs => setstate({ data: gifs, loading: false }) );
    }, [category])


    return state;
}

export default useFethcGif;