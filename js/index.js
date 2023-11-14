const loginButton = document.getElementsByClassName('logIn')[0]

function logIn(){



    const response = axios.get(`${BASE_URL}/google`);
    console.log(response.data)


    window.location.href = '/main.html';
}

