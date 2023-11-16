function navChoose(ch, no){
    document.getElementsByClassName('nav-page')[ch].classList.add('choose-page');
    document.getElementsByClassName('nav-page')[ch].classList.remove('no-choose-page');

    document.getElementsByClassName('nav-page')[no].classList.add('no-choose-page');
    document.getElementsByClassName('nav-page')[no].classList.remove('choose-page');

    if(ch){
        window.location.href = '/shareMyPost.html'
    }else{
        window.location.href = '/share.html'
    }
}

function backHome(){
    window.location.href = "/main.html";
}

let index = -1;
document.addEventListener('click', (e) => {
    let editDiv = document.getElementsByClassName('edit-post-div')[0];
    if(e.target.className != "edit-content"){
        editDiv.style.visibility = "hidden";
    }
    
});
let editArr = [...document.getElementsByClassName("edit-content-btn")];
editArr.forEach((e, i) => {
    e.onclick = () => showEditDiv(e, i);
});

let successBtnArr = [...document.getElementsByClassName('edit-success')];
successBtnArr.forEach((e) => {
    e.onclick = () => editSuccess(e);
})

function showEditDiv(e, i){
    let editDiv = document.getElementsByClassName('edit-post-div')[0];
    if(index != i){
        let buttonRect = e.getBoundingClientRect();
        let buttonX = buttonRect.left + window.pageXOffset;
        let buttonY = buttonRect.top + window.pageYOffset;
        editDiv.style.visibility = "visible";
        editDiv.style.top = `${buttonY}px`;
        editDiv.style.left =`${buttonX - 80}px`;
        index = i;
    }else{
        editDiv.style.visibility = "hidden";
        index = -1;
    }

    let editButton = document.getElementsByClassName('edit-post')[0];
    let deleteButton = document.getElementsByClassName('delete-post')[0];
    editButton.onclick = () => editMyPost(i);
    deleteButton.onclick = () => deleteMyPost(i);
}

function editMyPost(i){
    console.log(i);
    window.location.href = "/shareEditMyPost.html";
}

function deleteMyPost(i){
    console.log(i);
}

function editSuccess(e){
    if(e.innerHTML === "완료하기") e.innerHTML = "완료함"
    else e.innerHTML = "완료하기"
}

function showContent(){
    window.location.href = "/shareShowPost.html";
}

{/* <div class="share-content-div">
        <div class="content-title-div">
            <div class="content-profile">
                <iconify-icon icon="healthicons:ui-user-profile" class="user-profile"></iconify-icon>
                <div class="stu-id">2314_조서현</div>
                <iconify-icon icon="simple-line-icons:check" class="content-check"></iconify-icon>
            </div>
            <div class="edit-content edit-content-btn">
                <div class="edit-success">완료하기</div>
                <iconify-icon icon="iconamoon:menu-kebab-vertical-light" class="edit-content"></iconify-icon>
            </div>
        </div>
        <div class="hr"></div>
        <div class="content-text" onclick="showContent()">
            오늘 5교시 체육인데 체육복을 안갖고 왔어요ㅜㅠㅠㅠ 
            2학년 학생 중 점심시간에 체육복 빌려주실 분 구해요ㅜㅜ 
            6교시에 바로 돌려드릴게요!!!!!!!!!!!!!!
            원하시면 빨래까지 해드릴게요ㅠㅠㅠㅠㅠㅠㅠ 
        </div>
        <div class="comment-cnt-div">
            <img src="/img/comment-cnt.png" class="comment-cnt-img">
            <div class="comment-cnt-num"></div>
        </div>
    </div> */}



// axios.get(`${BASE_URL}/auth/userinfo`, { withCredentials: true})
//     .then(response => {
//         // console.log('User info:', response.data.user_no);
//         getUserPosts(response.data.user_no);
//     })
//     .catch(error => {
//         console.error('There has been a problem with your axios request:', error);
//     });

// function getUserPosts(user_no){
    // console.log(user_no);
    axios.get(`${BASE_URL}/share/post/user/${getUserNo()}`)
    .then(Response => {
        console.log(Response.data);
    })
    .catch(error => {
        console.error('There has been a problem with your axios request:', error);
    });
// }