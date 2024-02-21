import {Link} from 'react-router-dom';

function AS_49_Nav(){
    return(

        <>
        <div style={{display:"flex", justifyContent:"space-around"}}>
        <Link to='/'>Home</Link><br/><br/>
        <Link to='/about'>About</Link><br/>
        <Link to='/index'>Index</Link><br/>
        </div>
        </>
    )

}
export default AS_49_Nav;