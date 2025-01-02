
import { unknownError as tryErr } from "../utils/responses";


const addCardQuery = async (formData) => {

    const response = await fetch('https://flash-card-learning-tool.vercel.app/card/add', {
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

const updateCardQuery = async (formData) => {

    const response = await fetch('https://flash-card-learning-tool.vercel.app/card/update', {
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

  
const deleteCardQuery = async (formData) => {

    const response = await fetch('https://flash-card-learning-tool.vercel.app/card/delete', {
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
  addCardQuery,
  deleteCardQuery,
  updateCardQuery
}

