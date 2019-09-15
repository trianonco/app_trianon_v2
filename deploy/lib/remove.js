var fs = require("fs");

module.exports = {
    
    removeFolder: function(pathToRemove){
        return new Promise((resolve,reject) => {

                    var d = pathToRemove;
                    var self = arguments.callee
                    try{
                        if (fs.existsSync(d)) {
                            fs.readdirSync(d).forEach(function(file) {
                                var C = d + '/' + file
                                if (fs.statSync(C).isDirectory()) self(C)
                                else fs.unlinkSync(C)
                            })
                            fs.rmdirSync(d)
                        }
                        resolve();
                    }catch(error){
                        reject(error)
                    }

                    
        });
    },

    removeFile: function(pathToRemove){
        return new Promise((resolve,reject) => {

            try{
                fs.exists(pathToRemove, function(exists) {
                    if(exists) {
                    //Show in green
                    fs.unlink(pathToRemove, function(err) {
                        if(err && err.code == 'ENOENT') {
                            // file doens't exist
                            console.info("File doesn't exist, won't remove it.");
                            reject(err);
                        } else if (err) {
                            // other errors, e.g. maybe we don't have enough permission
                            console.error("Error occurred while trying to remove file");
                            reject(err);
                        } else {
                            console.info(`removed`);
                            resolve();
                        }
                    });
                    
                    } else {
                    //Show in red
                    reject('FILE DOESNT EXIST');
                    }
                });
                resolve();
            }catch(error){
                reject(error)
            }

        });
    }
}
                