import OutputScreenRow from './OutputScreenRow';
const OutputScreen = (props) => {
    return (
        <div className="screen" style={{textAlign: "right",width:"400px",background:"gray",height:"100px",color:"white"}} >
            <OutputScreenRow value = {props.question} />
            <OutputScreenRow value = {props.answer}  />
            
            
        </div>
    )
}

export default OutputScreen;