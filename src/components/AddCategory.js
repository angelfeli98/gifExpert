
import { useState } from 'react';

const AddCategory = ({setCategories}) => {

    const [inputState, setInputState] = useState("Hola mundo");

    const handleInputChange = ({ target: { value } }) => setInputState(value);
    
    const handleSumit = (event) => {
        event.preventDefault();
        setCategories(categories => [inputState, ...categories]);
    }

    return <form onSubmit={ handleSumit }>
            <input onChange={ handleInputChange } value={inputState} type="text" />
    </form>
}

export default AddCategory;