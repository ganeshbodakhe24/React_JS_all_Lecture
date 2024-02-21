import "./AS_31_external_css.css";
import style from "./AS_31_modular_css.module.css";

function AS_31_css_type(){
return(
    <>
    <h1  style={{color:"pink" , backgroundColor:"black"}}>internal css only for one element</h1>

    <h1  className="primary" > External css as global in all component class available</h1>

    <h2 className={style.success}>Modular css only for module import in that component only can accss component</h2>
    </>
)
}
export default AS_31_css_type;