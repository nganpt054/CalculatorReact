import React from 'react';
const OutputScreen = (props) => {
    return (
        <div className="screen"  >
            <input type="text" readOnly value = {props.answer}/>
            {/* <input type="text" readOnly value = {props.question}/>    */}
        </div>
    )
}

export default OutputScreen;