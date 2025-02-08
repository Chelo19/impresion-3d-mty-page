import React, { useEffect, useState } from 'react';

const SelectFiles = ({ stlFiles, setStlFiles }) => {
    useEffect(() => {
        console.log(stlFiles);
    }, [stlFiles])
    return (
        <div className="select-files">
        </div>
    );
};

export default SelectFiles;