/* eslint-disable react/prop-types */
import  "./component.css"
import logo from "../assets/Fill 219.png"
import "@fontsource/inter"; 

const Place = (props) => {
    return(
        <div className="place">
            <div >
            <img className="img" src={props.imageUrl}/>
            </div>
            <div className="info">
            <div className="firstLine">
                <img src={logo} style={{paddingRight:"10px",width:"14px",height:"20px"}}/>
                <span style={{wordSpacing:"5px",fontSize:"20.4px"}}>{props.location}</span>
                <a  style={{paddingLeft:"20px",color:"#918E9B",fontSize:"20.4px"}} href={props.googleMapsUrl}>View on Google Maps</a>
            <div/>
            </div>
            <h1 style={{paddingTop:"10px",paddingBottom:"30px",fontWeight:"bold",fontSize:"50px"}}>{props.title}</h1>
            <h4 style={{fontWeight:"bold",fontSize:"20.4px",paddingBottom:"20px"}}>{props.startDate} - {props.endDate}</h4> 
            <p style={{fontWeight:"regular",fontSize:"20.4px"}}>{props.description}</p>   
        </div>
        </div>
    )
}

export default Place;