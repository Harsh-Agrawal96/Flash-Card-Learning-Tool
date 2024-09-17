const sendDataToBackend = async (formData) => {
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Handle successful login
        alert('Login successful!');
        console.log('Response:', data);
      } else {
        // Handle errors
        alert('Login failed: ' + data.message);
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }

    console.log(formData);
  };


  const addingcardtodb = async (formData) => {
    try {

      console.log( "data is " , formData);
      const response = await fetch('https://flash-card-learning-tool.vercel.app/add/card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Handle successful login
        alert('Login successful!');
        console.log('Response:', data);
      } else {
        // Handle errors
        alert('Login failed: ' + data.message);
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }

    console.log(formData);
  };

  export {

    sendDataToBackend,
    addingcardtodb,
  }
  