//  first way of react fragment

//if we not use fragment it will cause an some syntax erorr in console
//it is advance part but alwase use fragment in component to wrap the element
//fragment is use to wrap the element

function AS_37_React_fragment_child(){
    return(
        // <> this is fragment
        < >
        <td>Ganesh</td>
        <td>Sham</td>
        </>
    )
}

//  second way of react fragment
// import React from "react"
// function AS_37_React_fragment_child(){
//     return(
//         // <> this is fragment
//         <React.Fragment>
//         <td>Ganesh</td>
//         <td>Sham</td>
//         </React.Fragment>
//     )
// }

//third way
// import { Fragment } from "react"}
// function AS_37_React_fragment_child(){
//     return(
//         // <> this is fragment
//         <Fragment>
//         <td>Ganesh</td>
//         <td>Sham</td>
//         </Fragment>
//     )
// }

export default AS_37_React_fragment_child;