import { unknownError as tryErr } from "../utils/responses";


const showCardQuery = async (formData) => {

    const response = await fetch('https://flash-card-learning-tool.vercel.app/give/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    const resData = await response.json();
    if( !response.ok ){
      throw new Error( JSON.stringify(resData.msg || tryErr ));
    }

    return resData;
  };


  export {
    showCardQuery
  }