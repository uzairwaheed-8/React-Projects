import logo from "../assets/Fill 213.png"
import  "./component.css"
import "@fontsource/inter";
const Header = ( )=>{
    return(
        <div className="head">
        {    <img src={logo} style={{width:"24px",height:"24px"}}/>}
            <h1 style={{ fontSize: "14.46px",marginLeft:"10px"}}>My Travel Journal</h1>
        </div>
    )
}

export default Header;