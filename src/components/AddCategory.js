
import { useState } from 'react';
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    const [inputState, setInputState] = useState("");

    const handleInputChange = ({ target: { value } }) => setInputState(value);
    
    const handleSumit = (event) => {
        event.preventDefault();
        if (inputState.trim().length > 2) {
            setCategories(categories => [ inputState, ...categories ]);
            setInputState('');
        }
    }

    return <form onSubmit={ handleSumit }>
            <input onChange={ handleInputChange } value={inputState} type="text" />
    </form>
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}

AddCategory.defaultProps = {
    setCategories: () => {}
}

export default AddCategory;