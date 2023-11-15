function backHome(){
    window.location.href = "/main.html"
}

// 세션에서 로그인한 사용자 정보 불러오는거 하고 싶었는데 안됨 계속 401뜸 (없다는뜻;; 아니 근데 있는데?;;;;)
axios.get(`${BASE_URL}/auth/userinfo`, { withCredentials: true})
    .then(response => {
        console.log('User info:', response.data);
    })
    .catch(error => {
        console.error('There has been a problem with your axios request:', error);
    });

document.getElementsByClassName("student-id")[0].innerHTML = "2314_조서현";
document.getElementsByClassName("major")[0].innerHTML = "뉴미디어웹솔루션과";
document.getElementsByClassName("level-name")[0].innerHTML = "Lv.1 거북이"

function shareMyPost(){
    window.location.href = "/shareMyPost.html";
}

function goMyAccount(){
    window.location.href = "/myAccount.html";
}

function goMyLevel(){
    window.location.href = "/myLevel.html";
}