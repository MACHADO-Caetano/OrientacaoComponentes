import { useNavigate } from "react-router-dom";

function ContatoPage(){
    const navigation = useNavigate();

    return <>
        <h1>ContatoPage</h1>
        <button onClick={() => navigation('/home')}>Home</button>
    </>
    
}

export default ContatoPage;