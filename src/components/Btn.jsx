import React from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Btnvalues from "../buttonvalues";
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

export default function Btn(props){
    var isBtnNo=props.btnNo;
    return (
        <>
            {isBtnNo%5==0? <tr>
                <Fab color="secondary">{props.name}</Fab>
            </tr>:
                <Fab color="secondary">{props.name}</Fab>
            }         
           
            
        </>
    );
}