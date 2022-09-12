import React, {useState} from 'react'

export default function TextForm(props) {
    // To UpperCase Function
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    // To LowerCase Function
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    // Remove Extra Space Function
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }
    // To LowerCase Function
    const copyText = () => {
        navigator.clipboard.writeText(text);
    }
    // Clear Function
    const clear = () => {
        let newText = '';
        setText(newText);
    }

    // onchange Function
    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    const [text, setText] = useState('');
    return (
        <div>
            <h1>{props.formHeading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" placeholder='Type or Pest your text here to change text case'></textarea>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <h5>Character Count: {text.length}</h5>
                </div>
                <div className="col-md-6 text-end">
                    <h5>Word Count: {text.trim().split(/\s+/).length}</h5>
                </div>
            </div>
            <button className="btn btn-primary me-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary me-2" onClick={handleLowerClick}>Convert to Lowercase</button>
            <button className="btn btn-primary me-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            <button id='text-copy' className="btn btn-primary me-2" onClick={copyText}>Copy To Clipboard</button>
            <button id='text-copy' className="btn btn-primary me-2" onClick={clear}>Clear</button>
        </div>
    )
}
