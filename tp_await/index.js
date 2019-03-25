const fse = require('fs-extra');
const fs = require('fs');
const tmp = './temp';
const oldFile = './pubs.json';
const newFile = './temp/pubs.json';

async function creaDir (f) {


    try{

        const exists = await fse.pathExists(f);

        if(exists){
            await fse.remove(f);
        }

        await fse.ensureDir(f);
        await fse.copy(oldFile, newFile);

        await fs.watchFile('message.text', (curr, prev) => {
            console.log(`the current mtime is: ${curr.mtime}`);
            console.log(`the previous mtime was: ${prev.mtime}`);
        });

    }catch(error){
        console.error(error);
    }

}

creaDir(tmp);

//console.log(tmp);
