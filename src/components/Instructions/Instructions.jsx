import './Instructions.css';

function Instructions(){
    return(
        <div className="instructions">
            <div className='instructions_item'>
                <div className='instructions_item_number'>1</div>
                <img className='instructions_item_img' src='src/assets/chapoteo.png' alt='350px X 232px'/>
                <div className='instructions_item_description'>
                    <span className='instructions_item_description_title'>Upload your 3D models and start configuring</span>
                    <p className='instructions_item_description_description'>We support over 35 file formats including STL, OBJ, STEP, ZIP. All uploads are secure and confidential.</p>
                </div>
            </div>
            <div className='instructions_item'>
                <div className='instructions_item_number'>1</div>
                <img className='instructions_item_img' src='src/assets/chapoteo.png' alt='350px X 232px'/>
                <div className='instructions_item_description'>
                    <span className='instructions_item_description_title'>Upload your 3D models and start configuring</span>
                    <p className='instructions_item_description_description'>We support over 35 file formats including STL, OBJ, STEP, ZIP. All uploads are secure and confidential.</p>
                </div>
            </div>
            <div className='instructions_item'>
                <div className='instructions_item_number'>1</div>
                <img className='instructions_item_img' src='src/assets/chapoteo.png' alt='350px X 232px'/>
                <div className='instructions_item_description'>
                    <span className='instructions_item_description_title'>Upload your 3D models and start configuring</span>
                    <p className='instructions_item_description_description'>We support over 35 file formats including STL, OBJ, STEP, ZIP. All uploads are secure and confidential.</p>
                </div>
            </div>
        </div>
    )
}

export default Instructions;