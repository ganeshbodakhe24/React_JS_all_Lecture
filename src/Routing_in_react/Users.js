import { useParams } from "react-router-dom";

function Users(){
    let params=useParams();
   return(
    <>
     <h1> The id is {params.id}</h1>
     <h1>The Name is {params.name}</h1>
    </>
   )
}
export default Users;