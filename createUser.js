import axios from "axios";

try {
    const response = await axios.post(
        'https://www.abibliadigital.com.br/api/users',
        {
            "name": "Gustavo",
            "email": "gustavoacs2000@gmail.com",
            "password": "29102022", // minimum size 6 digits
            "notifications": true // receive update emails from www.abibliadigital.com.br
        },
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );

    console.log(response.data); // Assuming you want to log the response data
} catch (error) {
    console.error('Error:', error);
}
