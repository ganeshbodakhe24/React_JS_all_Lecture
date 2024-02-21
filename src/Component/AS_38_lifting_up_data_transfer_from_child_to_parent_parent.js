import AS_38_lifting_up_data_transfer_from_child_to_parent_child from "./AS_38_lifting_up_data_transfer_from_child_to_parent_child";

function AS_38_lifting_up_data_transfer_from_child_to_parent_parent(){
    function parentfun(data){
        alert(data);
    }
    return(
        <>
        <h1>Parent </h1>
        <AS_38_lifting_up_data_transfer_from_child_to_parent_child alert={parentfun}></AS_38_lifting_up_data_transfer_from_child_to_parent_child>
        </>
    )
}
export default AS_38_lifting_up_data_transfer_from_child_to_parent_parent;

// to transfer data from child to parent for that make function in parent and pass it is as parameter
//in the child function then you can pass your data in child props function to parent