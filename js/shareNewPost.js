function backShare(){
    window.location.href = '/share.html'
}

function makePost(){
    let titleC = document.getElementsByClassName("post-title")[0].value;
    let contentC = document.getElementsByClassName('post-main')[0].value;
    
    const req = {
        title: titleC,
        content: contentC
    }
    axios.post(`${BASE_URL}/share/post`, req)
    .then(result => {
        // console.log(response)
    })
    .catch(error => {
        console.error('There has been a problem with your axios request:', error);
    });
    // window.location.href = '/share.html'
}