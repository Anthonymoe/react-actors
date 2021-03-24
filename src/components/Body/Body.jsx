import { useState } from 'react';

function Body(){
    const [ output1, setOutput1 ] = useState( ' ' );
    let handleChange1 = ( event ) =>{
        console.log( 'in handleChange:', event.target.value);
        setOutput1( event.target.value );
    }
    const [ output2, setOutput2 ] = useState( ' ' );
    let handleChange2 = ( event ) =>{
        console.log( 'in handleChange:', event.target.value);
        setOutput2( event.target.value );
     }
    const [ output3, setOutput3 ] = useState( ' ' );
    let handleChange3 = ( event ) =>{
        console.log( 'in handleChange:', event.target.value);
        setOutput3( event.target.value );
    }
    let clearOutputs = () => {
        setOutput1( '' );
        setOutput2( '' );
        setOutput3( '' );
    }//end clearOutputs 



    return(
        <form className="App-body">
            <input type="text" placeholder="first name" onChange={ handleChange1 }></input>
            <input type="text" placeholder="last name" onChange={ handleChange2 }></input>
            <input type="text" placeholder="best impression" onChange={ handleChange3 }></input>
            <button type="reset" onClick={ clearOutputs }>Join Us!</button>
            <p>{output1} {output2} {output3}</p>
        </form>
            
    );
}

export default Body;