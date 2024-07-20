import React, { useState } from 'react';

export default function TextForm({ mode, heading, showAlert }) {
    // Initialize text as an empty string
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        showAlert("Converted to Upper Case", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        showAlert("Converted to Lower Case", "success");
    };

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        showAlert("cleared Text", "success");
    };

    const handleCapitalizeClick = () => {
        const newText = text
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        setText(newText);
        showAlert("Capitalize Each word", "success");
    };

    const handleDownloadClick = () => {
        const element = document.createElement('a');
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'text.txt';
        document.body.appendChild(element); // Required for this to work in Firefox
        element.click();
        document.body.removeChild(element); // Cleanup
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCopyClick = () => {
        const textToCopy = text; // Replace this with the text you want to copy
        navigator.clipboard.writeText(textToCopy).then(() => {
            showAlert("Text Copied to Clipboard", "success");
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    };

    // Ensure text is defined
    const wordCount = text ? text.split(' ').filter(word => word.length > 0).length : 0;
    const charCount = text ? text.length : 0;
    const preview = text.length > 0 ? text : "Enter something in the textbox above to preview it here";

    return (
        <>
            <div className="container" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                <h1 className="my-3">{heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{ backgroundColor: mode === 'dark' ? '#042743' : 'white', color: mode === 'dark' ? 'white' : 'black' }}
                        id="myTextArea"
                        rows="15"
                        placeholder='Enter your text here'
                    />
                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleCapitalizeClick}>Capitalize First Character</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleDownloadClick}>Download</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy to Clipboard</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className="container my-2" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{wordCount} words and {charCount} characters</p>
                <p>{(0.08 * wordCount).toFixed(2)} Minutes Read</p>
            </div>
            <h2 className="preview container" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Preview of the Text</h2>
            <p className="previewText mx-3" style={{ color: mode === 'dark' ? 'white' : 'black' }}>{preview}</p>
        </>
    );
}
