import React,{useState} from 'react'



export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }

    const handleLoClick=()=>{
        // console.log("Lowercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }

    const handleClearClick=()=>{
        
        let newText="";
        setText(newText)
        props.showAlert("Clear the text!","success");
    }

    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra space!","success");
    }

    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy done!","success");
    }

const handleInverse = () => {
    const inverseText = () => {
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            // Check if the character is uppercase and convert to lowercase
            if (text[i] === text[i].toUpperCase()) {
                newText += text[i].toLowerCase();
            } else {
                // Otherwise, the character is lowercase, so convert to uppercase
                newText += text[i].toUpperCase();
            }
        }

        return newText;
    };
    setText(inverseText());
    props.showAlert("Inverse complete!","success");
};

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value)
        
    }

    const [text, setText] = useState("");
    // const[word,setword]=useState(0);
// text="new text";//wrong way to change the state
//setText("new text");//correct way to change the state
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'#08213c'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#08213c'}}id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleInverse}>Inverse Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra space</button>
  </div>
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'#08213c'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length-1}words and {text.length}characters</p>
    <p>{0.008 * (text.split(" ").length - 1)}Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview it here"}</p>
  </div>
  </>

  )
}
