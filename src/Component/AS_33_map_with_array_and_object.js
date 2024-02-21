
// for loop can't use in return of function 
//hance we have to use map insed of for loop
import { Table } from "react-bootstrap";

function AS_33_map_with_array_and_object() {
    const list1 = ["ganehs", "sham", "raj", "gautam"];

    const students = [
        { name: "Ganesh", email: "ganehs@gamil.com", contact: "111" },
        { name: "Raj", email: "raj@gamil.com", contact: "222" },
        { name: "Sham", email: "sham@gamil.com", contact: "333" },
        { name: "Geeta", email: "geeta@gamil.com", contact: "444" },


    ]

    // list1.map((item)=>{
    //     console.log("Map",item);
    // })
    // for loop can use in here but not in return in functlion
    // for(let i=0; i<list1.length;i++){
    //     console.log( " for loop ",list1[i]);
    // }


    return (
        <>
            <h1>List of Students</h1>
            {
                list1.map((item,index) => (
                    <h1 key={index}>{item}</h1>
                ))
            }
            {/* object with multiple value */}
            <Table striped variant="dark">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                    {
                        students.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>

    )
}
export default AS_33_map_with_array_and_object;