import {useState, useEffect} from 'react';

function Hooks(){
    let age = 30;
    const [newAge, setNewAge] = useState(40);

    function changeAge(){
        age = 31;
        console.log(age);
    }

    function changeNewAge(){
        setNewAge(45);
    }

    useEffect(() => {
        console.log("Testando!");
    })

    return(
        <div>
            <p>Idade: {age}</p>
            <button onClick={changeAge}>Mudar idade</button>
            <p>Idade: {newAge}</p>
            <button onClick={changeNewAge}>Mudar nova idade</button>
        </div>
    )
}

export default Hooks;