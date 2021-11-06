
import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setState] = useState(['rick and morty']);

    return <>
        <h2> Gif Expert Class </h2>
        <AddCategory setCategories={ setState } />
        <hr/>

        <ol>
            { categories.map( category => <GifGrid key={category} category={category} /> ) }
        </ol>
    </>
}

export default GifExpertApp;