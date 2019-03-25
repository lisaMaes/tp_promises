const fse = require('fs-extra');
const fs = require('fs');
const tmp = './temp';
const oldFile = './pubs.json';
const newFile = './temp/pubs.json';
// Promise usage:
/*
fse.pathExists(tmp)
    .then(exists =>
        fse.remove('/tmp/myfile', err => {
            if (err) return console.error(err)
            console.log('removed !')
            fse.ensureDir(tmp)
                .then(() => {
                    console.log('success DIr!');
                    // With Promises:
                    fse.copy(oldFile, newFile)
                        .then(() => {
                            console.log('success!')
                            fs.watchFile('message.text', (curr, prev) => {
                                console.log(`the current mtime is: ${curr.mtime}`);
                                console.log(`the previous mtime was: ${prev.mtime}`);
                            });
                        })
                        .catch(err => {
                            console.error(err)
                        })
                })
                .catch(err => {
                    console.error(err)
                })
        })
    )
*/

fse.pathExists(tmp)
    .then(exists =>{

        if(exists){
            return fse.remove('/tmp/myfile');
        }
        return ;
    })
    .then(() =>{
        return fse.ensureDir(tmp);

    })
    .then(() =>{
        return  fse.copy(oldFile, newFile);

    })
    .then(() =>{
        return fs.watchFile('message.text', (curr, prev) => {
            console.log(`the current mtime is: ${curr.mtime}`);
            console.log(`the previous mtime was: ${prev.mtime}`);
        });
    })

    .catch(err => {
        console.error(err)
    })

