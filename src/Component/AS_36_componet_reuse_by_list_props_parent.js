
import AS_36_componet_reuse_by_list_props_child from "./AS_36_componet_reuse_by_list_props_child";

function AS_36_componet_reuse_by_list_props_parent(){
    const user=[
        {name:"Ganesh",email:"ganesh@gmail.com",address:"shevgaon"},
        {name:"sham",email:"sharma",address:"pathardi"},
        {name:"pankaj",email:"pankaj@gmail.com",address:"nagear"}
    ]
    return(
        <div style={{textAlign:"center"}}>
        <h1>List of component</h1>
            {
                user.map((item,i)=>(
                    <AS_36_componet_reuse_by_list_props_child key={i} data={item}></AS_36_componet_reuse_by_list_props_child>
                    ))
            }
            </div>
    )
}
export default AS_36_componet_reuse_by_list_props_parent;