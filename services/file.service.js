const fsp = require('fs').promises;

const getFile = async (fileName, type) => {

    const path = __dirname + `/../db/${fileName}.${type}`;

    const json = await fsp.readFile(path);

    return JSON.parse(json);
}

const writeToFile = async (fileName, type, filecontent) => {
    
    const path = __dirname + `/../db/${fileName}.${type}`;
    // return file content by name
    return await fsp.writeFile(path, JSON.stringify(filecontent));
}

module.exports = {
    getFile,
    writeToFile,
}