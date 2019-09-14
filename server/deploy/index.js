/** 
 *  ----------------------------------------------------- --
 *  --                                                    --
 *  --  | TokPets Firebase & Git Deploy Methods        |  --
 *  --  |                                              |  --
 *  --  | Created By : Jorge Luis Mayorga Taborda      |  --
 *  --  | Created At : Bogotá, Colombia.               |  --
 *  --  |                                              |  --
 *  --                                                    --
 *  ----------------------------------------------------- --
 */




// --------------------------------------------------------- //
// -- Config & Settings ------------------------------------ //
// --------------------------------------------------------- //
const configBranchs = require('./config/branch-strategies.json');
const AppDeploy = require('./class/AppDeploy.class');
// --------------------------------------------------------- //




// --------------------------------------------------------- //
// -- Main & Deploy ---------------------------------------- //
// --------------------------------------------------------- //
const appDeploy = new AppDeploy();
appDeploy.setBranchs(configBranchs);
appDeploy.run("TokPets PWA Deploying App");
// --------------------------------------------------------- //






