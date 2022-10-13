import desert from '../assets/img/desert.jpg';

function Images(){
    return(
        <div>
            <img src="/vite.svg" />
            <br />
            <img src={desert} />
        </div>
    )
}

export default Images;