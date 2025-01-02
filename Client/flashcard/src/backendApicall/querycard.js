import { unknownError as tryErr } from "../utils/responses";


  const queryAdminCard = async ( data ) => {

    const response = await fetch( 'https://flash-card-learning-tool.vercel.app/cards',{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(data)
    });

    const resData = await response.json();
    if( !response.ok ){
      throw new Error( JSON.stringify(resData.msg || tryErr ));
    }

    return resData;
  }


export {
  queryAdminCard
}