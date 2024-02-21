import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import AS_53_post_api from "./AS_53_post_api";

// go to node C:\Users\91935\Documents\Vs code\Node js\Node Js\41_post_get_delete_put_api_mongoose
// and start the node 
function AS_56_update_api() {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [rollno, setRollno] = useState("");
    const [id, setId] = useState("");
    useEffect(() => {
        getData();
    }, []);
    function deleteData(data) {
        // alert(data);
        fetch(`http://localhost:4000/${data}`
            , { method: "DELETE" })
            .then((responce) => {
                responce.json()
                    .then((result) => {
                        console.log(result);
                        getData();
                    })
            })
    }
    function getData() {
        fetch("http://localhost:4000")
            .then((result) => {
                result.json()
                    .then((resp) => {
                        setData(resp);
                    })
            })
    }

    function selectUser(id) {
        setId(id);
        const selectedItem = data.find(item => item._id === id);
        // console.log(selectedItem);
        if (selectedItem) {
            setName(selectedItem.name);
            setRollno(selectedItem.rollno);

        }
    }

    function updateData(e) {
        e.preventDefault();
        let data = { name, rollno, id };
        // console.log(data);
        // fetch("http://localhost:4000",{
        //     method:"POST",
        //     headers:{
        //         'Accept':'application/json',
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(data)
        //     }).then((result)=>{
        //        result.json().then((resp)=>{
        //         console.log(resp);
        //         props.getData();
        //        })
        //     })
        fetch(`http://localhost:4000/${id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((result) => {
                result.json()
                    .then((resp) => {
                        console.log(resp);
                        getData();
                    })
            })
    }

    // function updateData(){
    //     let data={name,rollno,id};
    //     fetch(`http://localhost:4000/${id}`),{
    //     method:"PUT",
    //      headers:{
    //         'Accept':"application/json",
    //         'Content-Type':'application/json'
    //     },
    //     body:{}
    // }

    // }
    // console.log(data);
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Send Data</h1>
                <AS_53_post_api getData={getData} ></AS_53_post_api>

                {/* update form */}
                <form onSubmit={updateData}>
                    <h1>upate Data</h1>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input><br></br><br></br>
                    <input type="number" value={rollno}  onChange={(e)=>{setRollno(e.target.value)}}></input><br></br><br></br>
                    <button >Update Info</button>
                </form>

                <h1 >Data</h1>
            </div>
            <Table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>rollno</th>
                    </tr>
                    {
                        data.map((item) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.rollno}</td>
                                <td><button onClick={() => { deleteData(item._id) }}>
                                    Delete</button></td>
                                <td><button onClick={() => { selectUser(item._id) }}>Update</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
export default AS_56_update_api;