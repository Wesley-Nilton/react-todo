import AnotherComponent from "./AnotherComponent";

function FirstComponent(){
    const name = "Wesley";
    const age = 2022 - 2003;

    return(
        <div>
            {/* Comentário JSX */}
            <p>Primeiro Componente</p>
            <p>{name}, {age} anos.</p>
            <AnotherComponent />
        </div>
    )
}

export default FirstComponent;