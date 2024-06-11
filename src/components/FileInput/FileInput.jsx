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
    const [scalingItemCurrentWidth, setScalingItemCurrentWidth] = useState(null);
    const [scalingItemCurrentHeight, setScalingItemCurrentHeight] = useState(null);
    const [scalingItemCurrentDepth, setScalingItemCurrentDepth] = useState(null);
    const [scalingItemCurrentAspectRatio, setScalingItemCurrentAspectRatio] = useState(null);

    useEffect(() => {
        flattenStlFiles(stlFiles);
    }, []);

    const flattenStlFiles = (stlArray) => {
        setStlFiles(stlArray.flat());
    };

    const handleFileButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const filesWithDimensions = [];
        console.log(selectedFiles[0].size);
        if(selectedFiles[0].size > 500000){
            alert('Tamaño de archivo supera el máximo (50mb)');
            return;
        }

        selectedFiles.forEach((selectedFile) => {
            const loader = new STLLoader();

            loader.load(URL.createObjectURL(selectedFile), (geometry) => {
                const bbox = new THREE.Box3().setFromObject(new THREE.Mesh(geometry));
                const width = bbox.max.x.toFixed(2) - bbox.min.x.toFixed(2);
                const height = bbox.max.y.toFixed(2) - bbox.min.y.toFixed(2);
                const depth = bbox.max.z.toFixed(2) - bbox.min.z.toFixed(2);
                const original_width = width;
                const original_height = height;
                const original_depth = depth;

                const fileWithDimensions = {
                    file: selectedFile,
                    width,
                    height,
                    depth,
                    original_width,
                    original_height,
                    original_depth
                };

                filesWithDimensions.push(fileWithDimensions);

                const filesWithId = filesWithDimensions.map((file) => ({ file, quantity: 1, id: nextId, aspectRatio: 100}));
                setNextId(nextId + 1);
                flattenStlFiles([...stlFiles, filesWithId]);
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
                flattenStlFiles([...stlFiles, filesWithId]);
            });
        });
    };

    const debug = () => {
        console.log(scalingItemCurrentWidth);
        console.log(stlFiles);
    };

    const handleScalingItem = (file) => {
        setScalingItem(file);
        setScalingItemCurrentWidth(file.file.width);
        setScalingItemCurrentHeight(file.file.height);
        setScalingItemCurrentDepth(file.file.depth);
        setScalingItemCurrentAspectRatio(file.aspectRatio);
    }

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

    const handleScalingChange = (value, index, type) => {
        const updatedFiles = [...stlFiles];
        var foundObject = updatedFiles.flat().find((file) => file.id === index);
        if(value < 0 || !foundObject || value == '') return;
        switch(type){
            case 1:     // width
                foundObject.aspectRatio = parseFloat((value * 100 / scalingItem.file.original_width).toFixed(2));
                foundObject.file.width = parseFloat(value);
                foundObject = getAspectRatioValues(foundObject);
                break;
            case 2:     // height
                foundObject.aspectRatio = parseFloat((value * 100 / scalingItem.file.original_height).toFixed(2));
                foundObject.file.height = parseFloat(value);
                foundObject = getAspectRatioValues(foundObject);
                break;
            case 3:     // depth
                foundObject.aspectRatio = parseFloat((value * 100 / scalingItem.file.original_depth).toFixed(2));
                foundObject.file.depth = parseFloat(value);
                foundObject = getAspectRatioValues(foundObject);
                break;
            case 4:     // ratio
                foundObject.aspectRatio = parseFloat(value);
                foundObject = getAspectRatioValues(foundObject);
                break;
        }
        setStlFiles(updatedFiles);
    }

    const getAspectRatioValues = (foundObject) => {
        foundObject.file.width = parseFloat((foundObject.file.original_width * foundObject.aspectRatio / 100).toFixed(2));
        foundObject.file.height = parseFloat((foundObject.file.original_height * foundObject.aspectRatio / 100).toFixed(2));
        foundObject.file.depth = parseFloat((foundObject.file.original_depth * foundObject.aspectRatio / 100).toFixed(2));
        handleScalingItem(foundObject)
        return foundObject;
    }

    const resetScaling = (index) => {
        const updatedFiles = [...stlFiles];
        var foundObject = updatedFiles.flat().find((file) => file.id === index);
        foundObject.file.width = foundObject.file.original_width;
        foundObject.file.height = foundObject.file.original_height;
        foundObject.file.depth = foundObject.file.original_depth;
        foundObject.aspectRatio = 100;
        handleScalingItem(foundObject);
        setStlFiles(updatedFiles);
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
                                <div className='file_input_item' key={file.id}>
                                    <div className='file_input_item_top_belt'>
                                        <div className='file_input_item_left'>
                                            <div className='file_input_item_counter'>
                                                Cantidad: &nbsp;
                                                <button onClick={() => handleDecrementQuantity(file.id)}>
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
                                                    onChange={(e) => handleInputChange(e.target.value, file.id)}
                                                    value={file.quantity}
                                                />
                                                <button onClick={() => handleIncrementQuantity(file.id)}>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className='file_input_item_right'>
                                            <Link className='file_input_item_icon'>
                                                <img src={scale} onClick={() => {handleScalingItem(file); setIsOverlay(true)}}/>
                                            </Link>
                                            <Link className='file_input_item_icon' onClick={() => deleteItem(file.id)}>
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
                                            {file.file.file.name}
                                            <div className='file_input_item_dimensions'>
                                                <span>{file.file.width.toFixed(2)}mm</span>
                                                <span>x</span>
                                                <span>{file.file.height.toFixed(2)}mm</span>
                                                <span>x</span>
                                                <span>{file.file.depth.toFixed(2)}mm</span>
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
                            <span className='file_input_overlay_title'>Escalar modelo 3D</span>
                            <div className='file_input_overlay_wrapper'>
                                <div className='file_input_overlay_item'>
                                    <span>X</span>
                                    <input type='text'
                                    onKeyDown={(e) => {
                                        if (
                                        !(
                                            (e.key >= "0" && e.key <= "9") ||
                                            e.key === "Backspace" ||
                                            e.key === "Delete" ||
                                            e.key === "ArrowLeft" ||
                                            e.key === "ArrowRight" ||
                                            e.key === "Tab" ||
                                            e.key === "Enter" ||
                                            e.key === "."
                                        )
                                        ) {
                                        e.preventDefault();
                                        }
                                    }} value={scalingItemCurrentWidth} onChange={(e) => setScalingItemCurrentWidth(e.target.value)} onBlur={(e) => handleScalingChange(e.target.value, scalingItem.id, 1)}/>
                                    <span>mm</span>
                                </div>
                                <div className='file_input_overlay_item'>
                                    <span>Y</span>
                                    <input type='text'
                                    onKeyDown={(e) => {
                                        if (
                                        !(
                                            (e.key >= "0" && e.key <= "9") ||
                                            e.key === "Backspace" ||
                                            e.key === "Delete" ||
                                            e.key === "ArrowLeft" ||
                                            e.key === "ArrowRight" ||
                                            e.key === "Tab" ||
                                            e.key === "Enter" ||
                                            e.key === "."
                                        )
                                        ) {
                                        e.preventDefault();
                                        }
                                    }} value={scalingItemCurrentHeight} onChange={(e) => setScalingItemCurrentHeight(e.target.value)} onBlur={(e) => handleScalingChange(e.target.value, scalingItem.id, 2)}/>
                                    <span>mm</span>
                                </div>
                                <div className='file_input_overlay_item'>
                                    <span>Z</span>
                                    <input type='text'
                                    onKeyDown={(e) => {
                                        if (
                                        !(
                                            (e.key >= "0" && e.key <= "9") ||
                                            e.key === "Backspace" ||
                                            e.key === "Delete" ||
                                            e.key === "ArrowLeft" ||
                                            e.key === "ArrowRight" ||
                                            e.key === "Tab" ||
                                            e.key === "Enter" ||
                                            e.key === "."
                                        )
                                        ) {
                                        e.preventDefault();
                                        }
                                    }} value={scalingItemCurrentDepth} onChange={(e) => setScalingItemCurrentDepth(e.target.value)} onBlur={(e) => handleScalingChange(e.target.value, scalingItem.id, 3)}/>
                                    <span>mm</span>
                                </div>
                                <div className='file_input_overlay_item'>
                                    <input type='text'
                                    onKeyDown={(e) => {
                                        if (
                                        !(
                                            (e.key >= "0" && e.key <= "9") ||
                                            e.key === "Backspace" ||
                                            e.key === "Delete" ||
                                            e.key === "ArrowLeft" ||
                                            e.key === "ArrowRight" ||
                                            e.key === "Tab" ||
                                            e.key === "Enter" ||
                                            e.key === "."
                                        )
                                        ) {
                                        e.preventDefault();
                                        }
                                    }} value={scalingItemCurrentAspectRatio} onChange={(e) => setScalingItemCurrentAspectRatio(e.target.value)} onBlur={(e) => handleScalingChange(e.target.value, scalingItem.id, 4)}/>
                                    <span>%</span>
                                </div>
                            </div>
                            <div className='file_input_overlay_buttons'>
                                <button className='file_input_overlay_button' onClick={() => resetScaling(scalingItem.id)}>
                                    Reiniciar
                                </button>
                                <button className='file_input_overlay_button' id='file_input_overlay_button_send' onClick={() => setIsOverlay(false)}>
                                    Continuar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default FileInput;
