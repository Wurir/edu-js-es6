import {files} from './data.js';

const calculateLength = (length, unit)=>{
    const lengthNum = parseFloat(length)

    if(isNaN(lengthNum)) return 0

    switch(unit.toUpperCase()) {
        case 'B':
            return lengthNum
        case 'KB':
            return lengthNum * 1024
        case 'MB':
            return lengthNum * 1024 * 1024
        case 'GB':
            return lengthNum * 1024 * 1024 * 1024
        default:
            return lengthNum
    }
}

const showFilesSize = () =>{
    let totalLength = 0

    files.forEach(file => {
        const {length, unit = 'B'} = file['size']

        totalLength += calculateLength(length, unit)
    })
    console.log(`${totalLength} Bytes`); 
}

showFilesSize()