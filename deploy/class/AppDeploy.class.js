'use strict';
const util = require("util");
const gitBranch = require("git-branch");
const exeCommand = util.promisify(require("child_process").exec);
const logs = require('../lib/log');
const copy = require('./../lib/copy');
const remove = require('./../lib/remove');

class AppDeploy {

    constructor() {
        this.welcomeMessage = '';
        this.branchs = [];
    }

    setBranchs(Branchs) {
        this.branchs = Branchs;
    }

    setBuild(BuildCommand) {

    }

    async run(initMessage) {

        logs.consoleLogTitle(initMessage);

        try {

            const currentBranch = await gitBranch();
            const currentStrategy = this.branchs.filter((branch) => branch.branch === currentBranch)[0];

            if (currentStrategy) {

                const currentProject = currentStrategy.project;
                const currentCommitMessage = 'Git Update on ' + currentBranch;

                const isCLS = await exeCommand(`cls`);
                logs.succesfull(' == > isCLS  Ok ...');

                const isBuild = await exeCommand(`npm run build`);
                logs.succesfull(' == > isBuild  Ok ...');
                
                try{

                    const isDistClearCSS = await remove.removeFolder(`${process.cwd()}\\server\\public\\css\\`);
                    const isDistClearJS = await remove.removeFolder(`${process.cwd()}\\server\\public\\js\\`);
                    const isDistClearIMG = await remove.removeFolder(`${process.cwd()}\\server\\public\\img\\`);
                    const isDistClearFonts = await remove.removeFolder(`${process.cwd()}\\server\\public\\fonts\\`);

                    const isDistClearAppBladePHP = await remove.removeFile(`${process.cwd()}\\server\\resources\\views\\app.blade.php`);
                    const isDistClearFavicon = await remove.removeFile(`${process.cwd()}\\server\\public\\favicon.ico`);
                    const isDistClearIndexHTML = await remove.removeFile(`${process.cwd()}\\server\\public\\index.html`);
                    const isDistClearManifiest = await remove.removeFile(`${process.cwd()}\\server\\public\\manifest.json`);
                    const isDistClearServiceWorker = await remove.removeFile(`${process.cwd()}\\server\\public\\service-worker.js`);
                    const isDistClearPreCache = await remove.removeFile(`${process.cwd()}\\server\\public\\precache-manifest.ca747aba887dd9ebb2ef8a38be69adf0.js`);

                    logs.succesfull(' ==> isDistClear Ok ...');

                    const isDistCopy = await copy.copyFolder(`${process.cwd()}\\dist`,`${process.cwd()}\\server\\public`);
                    const isDistIndexCopy = await copy.copyFile(`${process.cwd()}\\dist\\index.html`,`${process.cwd()}\\server\\resources\\views\\app.blade.php`);
                    logs.succesfull(' ==> isDistCopy Ok ...');

                }catch(error){
                    console.log(error);
                }


                /*
                const isGitAdd = await exeCommand(`git add *`);
                logs.succesfull(' == > isGit Add  Ok ...');

                const isGitCommit = await exeCommand(`git commit -m "${currentCommitMessage}"`);
                logs.succesfull(' == > isGit Commit -m ' + currentCommitMessage + '  Ok ...');

                const isGitPull = await exeCommand(`git pull`);
                logs.succesfull(' == > isGit Pull Ok ...');

                const isGitPush = await exeCommand(`git push`);
                logs.succesfull(' == > isGit Push Ok ...');

                const isChanged = await exeCommand(`firebase use ${currentProject}`);
                logs.succesfull(` == > isChanged OK to ${currentProject}...`);

                const isDeployed = await exeCommand(`firebase deploy`);
                logs.succesfull(' == > isDeployed Ok !!!!');
                */

                logs.succesfull('');
                logs.succesfull(` Hosting URL: ${currentStrategy['hosting-url']} `);
                logs.succesfull('');

            } else {
                logs.info(' Current Branch has not any deploy strategt :v')
            }

        } catch (error) {
            logs.error(error);
        }

    }
}

module.exports = AppDeploy;