import React, { useState, useEffect } from "react";
import {Table} from 'react-bootstrap';

// go to node C:\Users\91935\Documents\Vs code\Node js\Node Js\41_post_get_delete_put_api_mongoose
// and start the node 
function AS_51_fetch_api_from_database() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000")
            .then((result) => {
                result.json()
                    .then((resp) => {
                        setData(resp);
                    })
            })
    },[])
    console.log(data);
    return (
        <>
            <h1 >Data</h1>
            <Table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>rollno</th>
                    </tr>
                    {
                        data.map((item)=>(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.rollno}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
export default AS_51_fetch_api_from_database;