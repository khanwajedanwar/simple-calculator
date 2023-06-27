import {React} from 'react';
import './table.css';
import { useState} from 'react';


const Calculator = ()=>{
    const [result, setResult] = useState([0]);


    const calculation = (e)=>{
        let value = e.target.value;
        if (value === "clear") {
            setResult([0])
        }else if(value === "delete"){
            if (result.length > 0) {
                result.pop(); 
                setResult([...result]);
            }
        }else{
            if(result[0] === 0){
                delete result[0];
                setResult([...result, value]);
            }else{
                setResult([...result, value]);
            }
            
        }
        
    }

    const showResult = ()=>{
        let calculatedValue = eval(result.toString().replaceAll(",", ""));
        setResult([calculatedValue]);
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        {
                            <td colSpan={4} className="result">{result.map(value => value)}</td>
                        }
                    </tr>
                    <tr>
                        <td><button onClick={calculation} value="clear">AC</button></td>
                        <td><button>+/-</button></td>
                        <td><button onClick={calculation} value="/">/</button></td>
                        <td><button className='lastColumn' onClick={calculation} value="delete">Delete</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={calculation} value={7}>7</button></td>
                        <td><button onClick={calculation} value={8}>8</button></td>
                        <td><button onClick={calculation} value={9}>9</button></td>
                        <td ><button className='lastColumn' onClick={calculation} value="*">x</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={calculation} value={4}>4</button></td>
                        <td><button onClick={calculation} value={5}>5</button></td>
                        <td><button onClick={calculation} value={6}>6</button></td>
                        <td ><button className='lastColumn' onClick={calculation} value="-">-</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={calculation} value={1}>1</button></td>
                        <td><button onClick={calculation} value={2}>2</button></td>
                        <td><button onClick={calculation} value={3}>3</button></td>
                        <td ><button className='lastColumn' onClick={calculation} value="+">+</button></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button onClick={calculation} value={0}>0</button></td>
                        <td><button onClick={calculation} value=".">.</button></td>
                        <td><button className='lastColumn' onClick={showResult} value="=">=</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Calculator