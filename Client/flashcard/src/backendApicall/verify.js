import { unknownError as tryErr } from "../utils/responses";


const loginQuery = async (formData) => {

    const response = await fetch('http://localhost:8000/login', {
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
    loginQuery
}

