import React, { useEffect, useRef, useState } from 'react';
import './FileInput.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import * as THREE from 'three';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';

import scale from '../../assets/scale.png';
import close from '../../assets/close.png';
import impresion3dLogo from '../../assets/impresion-3d-logo.png';

function FileInput({stlFiles, setStlFiles}) {
    const navigate = useNavigate();
    const fileInputRef = React.createRef();
    const [nextId, setNextId] = useState(1);
    const [isOverlay, setIsOverlay] = useState(false);
    const [scalingItem, setScalingItem] = useState(null);

    const handleFileButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const filesWithDimensions = [];

        selectedFiles.forEach((selectedFile) => {
            const loader = new STLLoader();

            loader.load(URL.createObjectURL(selectedFile), (geometry) => {
                const bbox = new THREE.Box3().setFromObject(new THREE.Mesh(geometry));
                const width = bbox.max.x.toFixed(2) - bbox.min.x.toFixed(2);
                const height = bbox.max.y.toFixed(2) - bbox.min.y.toFixed(2);
                const depth = bbox.max.z.toFixed(2) - bbox.min.z.toFixed(2);

                const fileWithDimensions = {
                    file: selectedFile,
                    width,
                    height,
                    depth,
                };

                filesWithDimensions.push(fileWithDimensions);

                const filesWithId = filesWithDimensions.map((file) => ({ file, quantity: 1, id: nextId }));
                setNextId(nextId + 1);
                setStlFiles([...stlFiles, filesWithId]);
            });
        });
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const droppedFiles = Array.from(e.dataTransfer.files);
        const filesWithDimensions = [];

        droppedFiles.forEach((droppedFile) => {
            const loader = new STLLoader();

            loader.load(URL.createObjectURL(droppedFile), (geometry) => {
                const bbox = new THREE.Box3().setFromObject(new THREE.Mesh(geometry));
                const width = bbox.max.x.toFixed(2) - bbox.min.x.toFixed(2);
                const height = bbox.max.y.toFixed(2) - bbox.min.y.toFixed(2);
                const depth = bbox.max.z.toFixed(2) - bbox.min.z.toFixed(2);

                const fileWithDimensions = {
                    file: droppedFile,
                    width,
                    height,
                    depth,
                };

                filesWithDimensions.push(fileWithDimensions);

                const filesWithId = filesWithDimensions.map((file) => ({ file, quantity: 1, id: nextId }));
                setNextId(nextId + 1);
                setStlFiles([...stlFiles, filesWithId]);
            });
        });
    };

    const debug = () => {
        setStlFiles(stlFiles);
    }

    const loader = new STLLoader();

    const stlFilePath = 'src/assets/wrapping_paper_cutter_min_double.stl';

    loader.load(stlFilePath, (geometry) => {
        const bbox = new THREE.Box3().setFromObject(new THREE.Mesh(geometry));
        const width = bbox.max.x - bbox.min.x;
        const height = bbox.max.y - bbox.min.y;
        const depth = bbox.max.z - bbox.min.z;
    });

    //

    const handleIncrementQuantity = (index) => {
        const updatedFiles = [...stlFiles];
        const foundObject = updatedFiles.flat().find((file) => file.id === index);
        if (foundObject) {
            foundObject.quantity += 1;
            setStlFiles(updatedFiles);
        }
    };

    const handleDecrementQuantity = (index) => {
        const updatedFiles = [...stlFiles];
        const foundObject = updatedFiles.flat().find((file) => file.id === index);
        if (foundObject && foundObject.quantity > 1) {
            foundObject.quantity -= 1;
            setStlFiles(updatedFiles);
        }
    };

    const handleInputChange = (value, index) => {
        const updatedFiles = [...stlFiles];
        const foundObject = updatedFiles.flat().find((file) => file.id === index);
        if (foundObject && value > 0) {
            foundObject.quantity = parseInt(value);
            setStlFiles(updatedFiles);
        }
    }

    const handleScalingChange = (value, index) => {
        const updatedFiles = [...stlFiles];
        const foundObject = updatedFiles.flat().find((file) => file.id === index);
        console.log(foundObject.file);
        if (foundObject && value > 0) {
            foundObject.file.width = parseFloat(value);
            console.log(foundObject.file);
            setStlFiles(updatedFiles);
        }
    }

    //

    const deleteItem = (index) => {
        const updatedFiles = [...stlFiles];
        const indexToDelete = updatedFiles.flat().findIndex((file) => file.id === index);
        updatedFiles.splice(indexToDelete, 1);
        setStlFiles(updatedFiles);
    }

    const checkLength = () => {
        if(stlFiles.length > 0){
            navigate('/select-material');
        }
        else{
            alert('Ingresa tus archivos');
        }
    }



    return (
        <div className='file_input'>
            <div className='file_input_container'>
                <div className='file_input_presentation'>
                <span className='file_input_presentation_title'>{stlFiles.length} modelo(s) cargados</span>
                <span className='file_input_presentation_description'>
                    Ingresa tus archivos aquí para tener una referencia de tus necesidades, recuerda que todos estos archivos se trabajan de manera <strong>confidencial</strong>.
                </span>
                <span className='file_input_presentation_description'>
                    Aceptamos únicamente modelos .stl de máximo 50mb, si tienes algún problema con el tamaño de tu archivo, puedes ponerte en contacto con nosotros por diferentes medios para solucionar eso dando click <Link to={'/contact'}><strong>aquí</strong></Link>.
                </span>
                </div>
                <div className='file_input_input' onDragOver={handleDragOver} onDrop={handleDrop}>
                    <Link className="file_input_button" onClick={handleFileButtonClick}>
                        <span>Seleccionar archivo</span> o arrastra tu archivo aquí
                    </Link>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".stl"
                        multiple={false}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                </div>
                {stlFiles.length > 0 &&
                    <div className='file_input_gallery'>
                        {stlFiles.map((file) => {
                            return(
                                <div className='file_input_item' key={file[0].id}>
                                    <div className='file_input_item_top_belt'>
                                        <div className='file_input_item_left'>
                                            <div className='file_input_item_counter'>
                                                Cantidad: &nbsp;
                                                <button onClick={() => handleDecrementQuantity(file[0].id)}>
                                                    -
                                                </button>
                                                <input
                                                    type="tel"
                                                    inputMode="numeric"
                                                    pattern="[0-9]*"
                                                    onKeyDown={(e) => {
                                                        if (
                                                        !(
                                                            (e.key >= "0" && e.key <= "9") ||
                                                            e.key === "Backspace" ||
                                                            e.key === "Delete" ||
                                                            e.key === "ArrowLeft" ||
                                                            e.key === "ArrowRight" ||
                                                            e.key === "Tab" ||
                                                            e.key === "Enter"
                                                        )
                                                        ) {
                                                        e.preventDefault();
                                                        }
                                                    }}
                                                    onChange={(e) => handleInputChange(e.target.value, file[0].id)}
                                                    value={file[0].quantity}
                                                />
                                                <button onClick={() => handleIncrementQuantity(file[0].id)}>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className='file_input_item_right'>
                                            <Link className='file_input_item_icon'>
                                                <img src={scale} onClick={() => {setScalingItem(file[0]); setIsOverlay(true)}}/>
                                            </Link>
                                            <Link className='file_input_item_icon' onClick={() => deleteItem(file[0].id)}>
                                                <img src={close}/>
                                            </Link>
                                            {/* <Link className='file_input_item_icon'>
                                                <img src='src/assets/nav.png'/>
                                            </Link> */}
                                        </div>
                                    </div>
                                    <div className='file_input_item_all'>
                                        <img src={impresion3dLogo}/>
                                        <div className='file_input_item_content'>
                                            {file[0].file.file.name}
                                            <div className='file_input_item_dimensions'>
                                                <span>{file[0].file.width.toFixed(2)}mm</span>
                                                <span>x</span>
                                                <span>{file[0].file.height.toFixed(2)}mm</span>
                                                <span>x</span>
                                                <span>{file[0].file.depth.toFixed(2)}mm</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
                <button onClick={checkLength} className='display_button_main'>Continuar</button>
            </div>
            {isOverlay && 
                <div className='overlay'>
                    <div className='file_input_overlay'>
                        <div className='file_input_overlay_container'>
                            <button onClick={() => setIsOverlay(false)}>Salir</button>
                            {console.log(scalingItem)}
                            <input type='text' value={scalingItem.file.width.toFixed(2)} onChange={(e) => handleScalingChange(e.target.value, scalingItem.id)}/>
                            <input type='text' value={scalingItem.file.height.toFixed(2)}/>
                            <input type='text' value={scalingItem.file.depth.toFixed(2)}/>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default FileInput;
