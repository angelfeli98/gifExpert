
import { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setState] = useState(['star wars', 'gravity falls', 'sci-fi']);

    return <>
        <h2> Gif Expert Class </h2>
        <AddCategory setCategories={ setState } />
        <hr/>


        <ol>
            { categories.map( category => <li key={category}> { category } </li> ) }
        </ol>
    </>
}

export default GifExpertApp;