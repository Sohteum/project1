import axios from 'axios';
import React, { useEffect } from 'react';

const PokemonChar = () => {

    useEffect(() => {
        axios.get().then(res => {
        })
      }, [])
    return (
        <div>
            
        </div>
    );
};

export default PokemonChar;