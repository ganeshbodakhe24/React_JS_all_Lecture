
import { Table } from "react-bootstrap";
function AS_35_nested_table_with_map() {
    const user = [
        {
            name: "ganesh", email: "ganesh@gail.com", address: [
                { Houseno: "33", city: "shevgaon", country: "india" },
                { Houseno: "334", city: "shevgaon", country: "india" },
                { Houseno: "3323", city: "shevgaon", country: "india" },
                { Houseno: "333", city: "shevgaon", country: "india" }

            ]
        },
        {
            name: "ganesh", email: "ganesh@gail.com", address: [
                { Houseno: "33", city: "shevgaon", country: "india" },
                { Houseno: "334", city: "shevgaon", country: "india" },
                { Houseno: "3323", city: "shevgaon", country: "india" },
                { Houseno: "333", city: "shevgaon", country: "india" }

            ]
        },
        {
            name: "ganesh", email: "ganesh@gail.com", address: [
                { Houseno: "33", city: "shevgaon", country: "india" },
                { Houseno: "334", city: "shevgaon", country: "india" },
                { Houseno: "3323", city: "shevgaon", country: "india" },
                { Houseno: "333", city: "shevgaon", country: "india" }

            ]
        },
        {
            name: "ganesh", email: "ganesh@gail.com", address: [
                { Houseno: "33", city: "shevgaon", country: "india" },
                { Houseno: "334", city: "shevgaon", country: "india" },
                { Houseno: "3323", city: "shevgaon", country: "india" },
                { Houseno: "333", city: "shevgaon", country: "india" }

            ]
        },
    ]
    return (
        <>
            <Table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                   
                    {
                        user.map((item,i) =>
                        <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>
                            <Table>
                                <tbody>
                           {
                             item.address.map((data)=>(
                                <tr>
                                    <td>{data.Houseno}</td>
                                    <td>{data.city}</td>
                                    <td>{data.country}</td>
                                </tr>
                             ))
                            
                           }
                            </tbody>
                             </Table>
                        </td>
                        </tr>
                        
                        )
                    }
                     </tbody>
            </Table>
        </>
    )
}
export default AS_35_nested_table_with_map;