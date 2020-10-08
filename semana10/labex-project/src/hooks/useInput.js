import React, { useState } from 'react'

const useInput = () => {
    const [value, updateValue] = useState("");

    const handleValue = (event) => {
        updateValue(event.target.value)
    };

    return [value, handleValue];
};

export default useInput;