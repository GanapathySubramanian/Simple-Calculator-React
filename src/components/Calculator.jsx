import React from "react";
import Button from "./Button";


// function Allbtn(value){
//     return (
//         <Button 
//             key={value.id}
//             name={value.name}
//             />
//     );
// }

function Calculator(){
    return(
        <div>
            <div className="calc">
                <input type="text"  id="result" className="form-control"/>
                {/* {Btnvalues.map(Allbtn)} */}
                <Button />
            </div>
        </div>
        
    );
}

export default Calculator;