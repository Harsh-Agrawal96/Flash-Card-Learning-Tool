
// import { db } from "../models/index.js";


// let findAdmin = async ( email ) => {

//     return new Promise ( async ( resolve, reject ) => {

//         try{

//             let admin = db.admin.findAll({
//                 where : {
//                     email : email
//                 }
//             })

//             let data = JSON.stringify(admin);
//             if( data.length > 2 ){
//                 return resolve(admin);
//             }else{
//                 reject();
//             }

//         }
//         catch(err){
//             console.log(err)
//             reject(err);
//         }
//     })
// }


// let checkPassword = async ( password, user ) => {

//     return new Promise ( async ( resolve, reject ) => {

//         try{

//             if( user[0].dataValues.password === password ){
//                 resolve(true);
//             }else{
//                 resolve(false);
//             }

//         }
//         catch(err){
//             console.log(err)
//             reject(err);
//         }
//     })
// }


// let findAdminforDeserialize = async ( id ) => {

//     return new Promise ( async ( resolve, reject ) => {

//         try{

//             let admin = db.admin.findAll({
//                 where : {
//                     id : id
//                 }
//             })

//             let data = JSON.stringify(admin);
//             if( data.length > 2 ){
//                 return resolve(admin);
//             }else{
//                 reject();
//             }

//         }
//         catch(err){
//             console.log(err)
//             reject(err);
//         }
//     })
// }


// export {

//     findAdmin,
//     checkPassword,
//     findAdminforDeserialize
// }