
import { checkAdmin } from "../../services/verifyServices.js";
import jwt from "jsonwebtoken";
import { unknownError as tryErr } from "../../utils/responses.js";
import dotenv from "dotenv"

dotenv.config();


let handleLogin = async (req,res) => {

    try{

        const user = await checkAdmin(req.body.email, req.body.password, req.body.key);
        if( user.success === false ){
            return res.status(400).json({ success: false, msg: user.msg });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const { password: _, ...userDetails } = user;

        res.status(200).json({
            success : true,
            data : {
                token,
                userDetails,
                msg : ["login successful"]
            }
        });
    }catch(err){
        res.status(500).json({ success: false, msg: tryErr });
    }
}


export{
    handleLogin
}