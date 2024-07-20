import React , {useState} from 'react'



export default function About() {

    const [myStyle, setMyStyle]= useState({

        color : 'black',
        backgroundColor : 'white'
    
     })
    
     const [btnText,setBtnText]=useState("Enable Dark Mode")
    
      
    
     const toggleMode=()=>{
        if( myStyle.color === 'black'){
    
            setMyStyle({
        
                color : 'white',
                backgroundColor : 'black'
        
            })
            setBtnText("Enable Light Mode")
        
           }else{
        
            setMyStyle({
        
                color : 'black',
                backgroundColor : 'white'
        
            })

            setBtnText("Enable Dark Mode")
        
           }
        
    
     }
    
    

  return (
    <div className="container my-5" style={myStyle}>
        <h1>About us    </h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        1. Upper Case 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show"  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Uppercase Conversion Feature</strong> This feature allows you to convert all the text in the input area to uppercase letters with a simple click of a button. Converting text to uppercase can be useful for emphasizing certain parts of your text, ensuring consistency in case formatting, or preparing data for systems that require uppercase input. <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        2. Lower Case
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Lowercase Conversion Feature</strong> This feature allows you to convert all the text in the input area to lowercase letters with a simple click of a button. Converting text to lowercase can be useful for standardizing text input, ensuring consistency in case formatting, or preparing data for systems that require lowercase input. <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        3. Capitalize First Character
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Capitalize First Character Feature</strong> This feature allows you to capitalize the first character of each word in the input text. Capitalizing the first letter of each word can enhance readability and adhere to standard title case formatting. <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    <div className="container">

    <button type="button" onClick={toggleMode} className="btn btn-primary my-3">{btnText}</button>

    </div>
    </div>
  )
}
