import FileInput from '../../components/FileInput/FileInput';
import './UploadFile.css';

function UploadFile({stlFiles, setStlFiles}){

    return(
        <div className="upload_file">
            <FileInput stlFiles={stlFiles} setStlFiles={setStlFiles}/>
        </div>
    )
}

export default UploadFile;