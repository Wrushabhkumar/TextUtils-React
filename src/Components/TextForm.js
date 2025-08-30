
import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleLwClick=()=>{
        setText(text.toLowerCase());
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClearClick=()=>{
       let newText = '';
        setText(newText)
    }

    const handleCopy = ()=>{
        let text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpaces=()=>{
        let newText= text.split(/[ ]+/)
        setText (newText.join(" "))
    }

    return (
        <>
        <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <h2>{props.heading}</h2>
            <div className="mb-3" style={{backgroundColor: props.mode==='light'?'white':'#042743'}}>
                <textarea className="form-control"
                style={{backgroundColor: props.mode==='light'?'white':'#042743', color: props.mode === 'light' ? 'black' : 'white'}}
                    value={text}
                    onChange={handleOnChange}
                    id="myBox"
                    rows="12">

                </textarea>
                <button className="btn btn-primary mx-1 my-2"onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-1 my-2"onClick={handleLwClick}>Lowercase</button>
                <button className="btn btn-primary mx-1 my-2"onClick={handleClearClick}>Cleare Text</button>
                <button className="btn btn-primary mx-1 my-2"onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-2"onClick={handleExtraSpaces}>Remove Extra spaces</button>

            </div>
        </div>

        <div className="conatainer" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <h3>Text Summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Reade</p>

            <h3>preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
        </div>
        </>
    );
}

