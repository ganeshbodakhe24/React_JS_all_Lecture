import { useState, useEffect } from "react";
import { Table } from 'react-bootstrap'
function AS_51_fetch_api() {
    let [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((result) => {
                result.json()
                    .then((resp) => {
                        // console.log(resp);
        
                        setData(resp);
                    })
            })
    },[])
    return (
        <>
            <h1>Fetching the API by get Method</h1>
            <Table>
                <tbody>
                    <tr>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>

                    {
                        data.map((item,i)=>(
                            <tr key={i} >
                            <th>{item.id}</th>
                            <th>{item.title}</th>
                            <th>{item.body}</th>
                        </tr>  
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
export default AS_51_fetch_api;