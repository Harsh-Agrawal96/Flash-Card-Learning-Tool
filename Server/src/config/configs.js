
import configDB from "./dbConfig.js";
import configLibraries from "./packageConfig.js";

function allConfigurations ( app ){

    configDB(app);
    configLibraries(app);

}


export default allConfigurations;