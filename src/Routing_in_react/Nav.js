import { NavLink } from "react-router-dom";
import style from './Main.module.css';
function Nav() {
    return (
        <>
            <div className={style.NavLink}>
                {/*  css style for active link  */}
                {/* <ul>
                    <li><NavLink
                        style={({ isActive }) => { return ({ color: isActive ? 'blue' : 'red' }) }}
                        className={style.link} to="/">Home</NavLink></li>
                    <li><NavLink
                        style={({ isActive }) => { return ({ color: isActive ? 'blue' : 'red' }) }}
                        className={style.link} to="/about">About</NavLink></li>
                    <li><NavLink
                        style={({ isActive }) => { return ({ color: isActive ? 'blue' : 'red' }) }}
                        className={style.link} to="/contact">Contact</NavLink></li>
                    <li><NavLink
                        style={({ isActive }) => { return ({ color: isActive ? 'blue' : 'red' }) }}
                        className={style.link} to="/contact">Contact</NavLink></li>
                </ul> */}

                   {/*  css style for active link  */}
                <ul>
                    <li><NavLink
                        className={style.link} to="/"state={{age:334,name:"ganesh"}}>Home</NavLink></li>
                    <li><NavLink
                        className={style.link} to="/about">About</NavLink></li>
                    <li><NavLink className={style.link} to="/contact">Contact</NavLink></li>
                    <li><NavLink   className={style.link} to="Router_7_button_and_conditional_navigation">useNavitage</NavLink></li>
                    <li><NavLink   className={style.link} to="Route_9_Nested_Routing">NestedRouting</NavLink></li>
                  
                   
                </ul>
            </div>
        </>
    )

}
export default Nav;