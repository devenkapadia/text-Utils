import React, { useState } from "react";

export default function Textform(props) {
    const handleUpClick = () => {
        if (text === '') {
            props.showAlert("Write something to perform", "warning")
        }
        else {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Uppercase", "success")
        }
    };
    const handlelowClick = () => {
        if (text === '') {
            props.showAlert("Write something to perform", "warning")
        }
        else {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lowercase", "success")
        }
    };
    const handextraSpaces = () => {
        if (text === '') {
            props.showAlert("Write something to perform", "warning")
        }
        else {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Extra space has been removed", "success")
        }
    };
    const handlecopyClick = () => {
        if (text === '') {
            props.showAlert("Write something to perform", "warning")
        }
        else {
            navigator.clipboard.writeText(text)
            props.showAlert("Text copied", "success")
        }
    };
    const handleclearClick = () => {
        if (text === '') {
            props.showAlert("Write something to perform", "warning")
        }
        else {
            let newText = ""
            setText(newText);
            props.showAlert("Everthing is cleared", "warning")
        }

    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <div className="mb-3">
                    <h2 className="my-3">{props.heading}</h2>
                    <textarea
                        className="form-control"
                        value={text}
                        style={{ backgroundColor: props.mode === "dark" ? "#0a1727" : "white", color: props.mode === "dark" ? "white" : "black" }}
                        onChange={handleOnChange}
                        id="mybox"
                        rows="8"
                    ></textarea>
                </div>
                <button
                    type="button"
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleUpClick}
                    disabled={text===""}
                >
                    Convert to Uppercase
                </button>
                <button
                    type="button"
                    className="btn btn-primary mx-1 my-1"
                    onClick={handlelowClick}
                    disabled={text===""}
                >
                    Convert to Lowercase
                </button>
                <button
                    type="button"
                    className="btn btn-primary mx-1 my-1"
                    onClick={handextraSpaces}
                    disabled={text===""}
                >
                    Clear Extra Space
                </button>
                <button
                    type="button"
                    className="btn btn-primary mx-1 my-1"
                    onClick={handlecopyClick}
                    disabled={text===""}
                >
                    Copy Text
                </button>
                <button
                    type="button"
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleclearClick}
                    disabled={text===""}
                >
                    Clear Text
                </button>
            </div>

            <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2 className="my-3">Your Text Summary</h2>
                <p>
                    {text.length} characters and {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words
                </p>
                <p>
                    {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read
                </p>
                <h3>Preview</h3>
                <p>{text === '' ? 'Write something to preview' : text}</p>
            </div>
        </>
    );
}
