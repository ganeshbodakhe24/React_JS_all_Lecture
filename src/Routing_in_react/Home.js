import { useLocation } from "react-router-dom";

function Home(){
    const location=useLocation();
    console.log(location);
    return(
        <>
            <h2>This is the Home page</h2>
        </>
    )
}
export default Home;