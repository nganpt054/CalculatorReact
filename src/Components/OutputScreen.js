
const OutputScreen = (props) => {
    return (
        <div className="screen"  >
             <input type="text" readOnly value = {props.question}
              style={{textAlign: "right",width:"400px",background:"gray",height:"100px",color:"white"}}/>  
        </div>
    )
}

export default OutputScreen;