import RequestForm from '../../components/RequestForm/RequestForm';
import './RequestUpload.css'

function RequestUpload({stlFiles, material, isSanded, infill, color}){
    return(
        <div className="request_upload">
            <RequestForm stlFiles={stlFiles} material={material} isSanded={isSanded} infill={infill} color={color}/>
        </div>
    )
}

export default RequestUpload;