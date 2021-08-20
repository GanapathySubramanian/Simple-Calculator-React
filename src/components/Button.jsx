import React from "react";
import Btnvalues from "../buttonvalues";
import Fab from '@material-ui/core/Fab';
import BackspaceIcon from '@material-ui/icons/Backspace';
import RemoveIcon from '@material-ui/icons/Remove';
function display(e){
    document.getElementById("result").value+=e;
}
function clear(){
    document.getElementById("result").value="";
}

// eval() is a dangerous function, which executes the code it's passed with the privileges of the caller.
// If you run eval() with a string that could be affected by a malicious party, 
// you may end up running malicious code on the user's machine with the permissions of your webpage / extension. 
// More importantly, a third-party code can see the scope in which eval() was invoked,
// which can lead to possible attacks in ways to which the similar Function is not susceptible.
function solve(){
    let data = document.getElementById("result").value;
    for(var i=0;i<data.length;i++){
        if((data.charAt(0)=='+'||data.charAt(0)=='-'||data.charAt(0)=='/'||data.charAt(0)=='*'||data.charAt(0)=='%')||(data.charAt(i)=='+' && data.charAt(i+1)=='+') || (data.charAt(i)=='-' && data.charAt(i+1)=='-') || (data.charAt(i)=='/' && data.charAt(i+1)=='/')  || (data.charAt(i)=='.' && data.charAt(i+1)=='.') ){
            alert('Invalid Operator');
            document.getElementById('result').value="";
        }else{
            let calculatedValue = eval(data)
            document.getElementById("result").value = calculatedValue;
        }
    }
    
}
function backspace(){
    var data = document.getElementById('result').value;
    document.getElementById('result').value=data.substring(0,data.length -1);
  
}

function Button(){
    return (
        <table border="0">
            <tbody>
                    <td></td>
                    <td><Fab color="secondary"  onClick={()=>clear()}>{Btnvalues[16].name}</Fab></td>
                    <td><Fab color="secondary" onClick={()=>backspace()}><BackspaceIcon/></Fab></td>
                    <td><Fab color="secondary" onClick={()=>display(Btnvalues[17].name)}>{Btnvalues[17].name}</Fab></td>
                <tr>
                    <td><Fab  color="secondary" onClick={()=>display(Btnvalues[0].name)}>{Btnvalues[0].name}</Fab></td>
                    <td><Fab  color="secondary" onClick={()=>display(Btnvalues[1].name)}>{Btnvalues[1].name}</Fab></td>
                    <td><Fab  color="secondary" onClick={()=>display(Btnvalues[2].name)}>{Btnvalues[2].name}</Fab></td>
                    <td><Fab  color="secondary" onClick={()=>display(Btnvalues[15].name)}>{Btnvalues[15].name}</Fab></td>

                </tr>
                <tr>
                    <td><Fab color="secondary" onClick={()=>display(Btnvalues[4].name)}>{Btnvalues[4].name}</Fab></td>
                    <td><Fab color="secondary" onClick={()=>display(Btnvalues[5].name)}>{Btnvalues[5].name}</Fab></td>
                    <td><Fab color="secondary" onClick={()=>display(Btnvalues[6].name)}>{Btnvalues[6].name}</Fab></td>
                    <td><Fab color="secondary" onClick={()=>display(Btnvalues[3].name)}>{Btnvalues[3].name}</Fab></td>
                </tr>
                <tr>
                    <td><Fab color="secondary" onClick={()=>display(Btnvalues[8].name)}>{Btnvalues[8].name}</Fab></td>
                    <td><Fab color="secondary" onClick={()=>display(Btnvalues[9].name)}>{Btnvalues[9].name}</Fab></td>
                    <td><Fab color="secondary" onClick={()=>display(Btnvalues[10].name)}>{Btnvalues[10].name}</Fab></td>
                    <td><Fab color="secondary" onClick={()=>display(Btnvalues[7].name)}><RemoveIcon /></Fab></td>
                </tr>
                <tr>
                    <td><Fab color="secondary" onClick={()=>display(Btnvalues[12].name)}>{Btnvalues[12].name}</Fab></td>
                    <td><Fab color="secondary" onClick={()=>display(Btnvalues[13].name)}>{Btnvalues[13].name}</Fab></td>
                    <td><Fab color="secondary" onClick={()=>solve()}>{Btnvalues[14].name}</Fab></td>
                    <td><Fab color="secondary" onClick={()=>display(Btnvalues[11].name)}>{Btnvalues[11].name}</Fab></td>
                </tr>
            </tbody>
      </table>

    );
}


export default Button;
