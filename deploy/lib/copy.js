var copydir = require('copy-dir');
var fs = require("fs");


module.exports = {
    copyFolder: function(pathFrom, pathTo){
        return new Promise((resolve,reject) => {
            try{
                
                copydir.sync(pathFrom, pathTo, {
                    utimes: true,  // keep add time and modify time
                    mode: true,    // keep file mode
                    cover: true    // cover file when exists, default is true
                });
            
                resolve();

            }catch(error){
                reject(error)
            }
        });
    },

    copyFile: function(pathFrom, pathTo){
        return new Promise((resolve,reject) => {
            try{

                fs.copyFile(pathFrom, pathTo, (err) => {
                    if (err) throw err;
                    console.log('source.txt was copied to destination.txt');
                });
            
                resolve();

            }catch(error){
                reject(error)
            }
        });
    }
}