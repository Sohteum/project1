import React, { useRef, useState } from 'react';

let fnGetNum = () => Math.floor(Math.random() * 10)


const Compsum = (props) => {

    const [_num1, _setNum1] = useState(fnGetNum())
    const [_num2, _setNum2] = useState(fnGetNum())

    const refInput = useRef()

    const fnOnSubmit = function (e) {
        e.preventDefault()
        let userNum = parseInt(refInput.current.value)
        if (_num1 + _num2 === userNum) { props.setCnt(current => current + 1) }
    }
    return (
        <form onSubmit={fnOnSubmit}>
            <span>{_num1}</span>
            +
            <span>{_num2}</span>
            =

            <input ref={refInput} type="number" min="0" max="20" required />
            <hr />
        </form>
    );
};

export default Compsum;