import React, { useEffect, useRef, useState } from 'react';
import './FileInput.css';
import { Link } from 'react-router-dom';

import * as THREE from 'three';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';

function FileInput() {
    const [files, setFiles] = useState([]);
    const fileInputRef = React.createRef();
    const [nextId, setNextId] = useState(1);

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
                const width = bbox.max.x - bbox.min.x;
                const height = bbox.max.y - bbox.min.y;
                const depth = bbox.max.z - bbox.min.z;

                const fileWithDimensions = {
                    file: selectedFile,
                    width,
                    height,
                    depth,
                };

                filesWithDimensions.push(fileWithDimensions);

                const filesWithId = filesWithDimensions.map((file) => ({ file, quantity: 1, id: nextId }));
                setNextId(nextId + 1);
                setFiles([...files, filesWithId]);
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
                const width = bbox.max.x - bbox.min.x;
                const height = bbox.max.y - bbox.min.y;
                const depth = bbox.max.z - bbox.min.z;

                const fileWithDimensions = {
                    file: droppedFile,
                    width,
                    height,
                    depth,
                };

                filesWithDimensions.push(fileWithDimensions);

                const filesWithId = filesWithDimensions.map((file) => ({ file, quantity: 1, id: nextId }));
                setNextId(nextId + 1);
                setFiles([...files, filesWithId]);
            });
        });
    };

    const debug = () => {
        console.log(files);
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
        const updatedFiles = [...files];
        const foundObject = updatedFiles.flat().find((file) => file.id === index);
        if (foundObject) {
            foundObject.quantity += 1;
            setFiles(updatedFiles);
        }
    };

    const handleDecrementQuantity = (index) => {
        const updatedFiles = [...files];
        const foundObject = updatedFiles.flat().find((file) => file.id === index);
        if (foundObject) {
            foundObject.quantity -= 1;
            setFiles(updatedFiles);
        }
    };

    const handleInputChange = (value, index) => {
        const updatedFiles = [...files];
        const foundObject = updatedFiles.flat().find((file) => file.id === index);
        if (foundObject) {
            foundObject.quantity = value;
            setFiles(updatedFiles);
        }
    }

    //





    return (
        <div className='file_input'>
            <div className='file_input_container'>
                <div className='file_input_presentation'>
                <span className='file_input_presentation_title'>{files.length} model uploaded</span>
                <span className='file_input_presentation_description'>
                    We support over 35 file formats including{' '}
                    <strong>STL, OBJ, STEP, ZIP</strong> files and many more! Please be
                    aware of our current maximum file size of 200 MB.
                </span>
                </div>
                <div className='file_input_input' onDragOver={handleDragOver} onDrop={handleDrop}>
                    <Link className="file_input_button" onClick={handleFileButtonClick}>
                        <span>Seleccionar Archivo</span> o arrastra el archivo
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
                {files.length > 0 &&
                    <div className='file_input_gallery'>
                        {files.map((file) => {
                            return(
                                <div className='file_input_item' key={file[0].id}>
                                    <div className='file_input_item_top_belt'>
                                        <div className='file_input_item_left'>
                                            <div className='file_input_item_counter'>
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
                                                {console.log(files)}
                                                <button onClick={() => handleIncrementQuantity(file[0].id)}>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className='file_input_item_right'>
                                            <div>
                                                Erase
                                            </div>
                                            <div>
                                                Menu
                                            </div>
                                        </div>
                                    </div>
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
                            )
                        })}
                    </div>
                }
                <div onClick={debug}>debug</div>
            </div>
        </div>
    );
}

export default FileInput;
