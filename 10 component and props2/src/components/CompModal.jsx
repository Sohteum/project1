import React from 'react';

const CompModal = ({ cnt }) => {

    

    return (
        <div className='modal'>
            <p>
                {cnt}점 입니다<br />
                <button>다시시작</button>
            </p>
        </div>
    );
};

export default CompModal;