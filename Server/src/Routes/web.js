import { allAdminVerifyRoutes } from "./adminVerifyRoutes.js";
import { allcardUpdateRoutes } from "./cardupdateRoutes.js";
import { cardShowRoutes } from "./cardShowRoutes.js";
import { allCardQueryRoutes } from "./cardQueryRoutes.js";


let initAllWebRoutes = (app) => {

    allAdminVerifyRoutes(app);
    allcardUpdateRoutes(app);
    cardShowRoutes(app);
    allCardQueryRoutes(app);

}


export{
    initAllWebRoutes
}