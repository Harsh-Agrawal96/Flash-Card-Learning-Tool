
import passport from "passport";
import passportLocal from "passport-local";
import * as loginservice from "../../services/loginPassportServices.js";


let localStrategy = passportLocal.Strategy;


let passportOfAdmin = () => {

    passport.use( "local" , new localStrategy(
        {
            usernameField : "email",
            passwordField : "password",
            passReqToCallback : true
        },
        async ( req,email, password, done) => {

            try{
                
                await loginservice.findAdmin(email)
                .then( async (user) => {
                    let val = JSON.stringify(user);
                    if( val.length <= 2 ){
                        return done(null, false, "user not found! ");
                    }
                    let message = await loginservice.checkPassword( password, user );
                    if( message == true ){
                        return done(null, user, null);
                    }else{
                        return done( null, false, "wrong password");
                    }
                })
                .catch( error => {
                    return done(null, false, error);
                });

            }catch(err){
                return done(null, false, err)
            }
        }
    ))

}


passport.serializeUser( (user,done) => {

    return done(null, user[0].dataValues.id );
});

passport.deserializeUser( async (id, done ) => {

    console.log("deserealize");
    console.log(id);

    
    loginservice.findAdminforDeserialize( id ).then( async (user) => {
        console.log(user);
        
        return done( null , user[0].dataValues);
    }).catch( error => {
        return done( error, null);
    } )
    
});

export {
    passportOfAdmin
}