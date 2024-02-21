import {Route,Routes ,Link } from 'react-router-dom';
import Users from './Users';
function About(){
    const list=[
        {id:1,name:"Ganesh"},
        {id:2,name:"sham"},
        {id:3,name:"rani"}
    ]
    return(
        <>
            <h2>This is the About page</h2>
        {
            list.map((item,i)=>(
                <div key={i}>
                <Link to={"/about/user/"+item.id+"/"+item.name}><h3>{item.name}</h3></Link>
                </div>
            ))
        }
        </>
    )
}
export default About;