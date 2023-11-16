function backHome(){
    window.location.href = '/main.html';
}

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

function plusPost(){
    window.location.href = '/shareNewPost.html';
}

function showPost(){
    window.location.href = '/shareShowPost.html';
}

let posts;
axios.get(`${BASE_URL}/share/post`)
.then(Response => {
    getUserName(Response.data);
})
.catch(error => {
    console.error('There has been a problem with your axios request:', error);
});

function getUserName(posts){
    for(let post of posts){
        axios.get(`${BASE_URL}/user/${post.user_no}`)
        .then(Response => {
            showPosts(post, Response.data.result.name)
        })
        .catch(error => {
            console.error('There has been a problem with your axios request:', error);
        });
    }
    
}

function showPosts(post, userName){
    console.log(post, userName);
    // <div class="share-content-div" onclick="showPost()">
    //     <div class="content-title-div">
    //         <iconify-icon icon="healthicons:ui-user-profile" class="user-profile"></iconify-icon>
    //         <div class="stu-id"></div>
    //         <iconify-icon icon="simple-line-icons:check" class="content-check"></iconify-icon>
    //     </div>
    //     <div class="hr"></div>
    //     <div class="content-text">
    //         오늘 5교시 체육인데 체육복을 안갖고 왔어요ㅜㅠㅠㅠ 
    //         2학년 학생 중 점심시간에 체육복 빌려주실 분 구해요ㅜㅜ 
    //         6교시에 바로 돌려드릴게요!!!!!!!!!!!!!!
    //         원하시면 빨래까지 해드릴게요ㅠㅠㅠㅠㅠㅠㅠ 
    //     </div>
    //     <div class="comment-cnt-div">
    //         <img src="/img/comment-cnt.png" class="comment-cnt-img">
    //         <div class="comment-cnt-num"></div>
    //     </div>
    // </div>
    let finalDiv = document.createElement('div');
    finalDiv.className = "share-content-div";
    finalDiv.onclick = () => showPost();

    let titleDiv = document.createElement('div');
    titleDiv.className = "content-title-div";

    let stu_id = document.createElement('div');
    stu_id.className = "stu-id";
    stu_id.innerText = `${userName}`

    titleDiv.innerHTML += `<iconify-icon icon="healthicons:ui-user-profile" class="user-profile"></iconify-icon>`;
    titleDiv.appendChild(stu_id);
    titleDiv.innerHTML += `<iconify-icon icon="simple-line-icons:check" class="content-check"></iconify-icon>`;

    let hr = document.createElement('div');
    hr.className = "hr";

    let contentDiv = document.createElement('div');
    contentDiv.className = "content-text";
    contentDiv.innerText = `${post.content}`;

    let commentDiv = document.createElement('div');
    commentDiv.className = "comment-cnt-div";
    commentDiv.innerHTML += `<img src="/img/comment-cnt.png" class="comment-cnt-img">`;

    let commentNum = document.createElement('comment-cnt-num');
    commentNum.className = "comment-cnt-num";
    commentDiv.appendChild(commentNum);

    finalDiv.appendChild(titleDiv);
    finalDiv.appendChild(titleDiv);
    finalDiv.appendChild(hr);
    finalDiv.appendChild(contentDiv);
    finalDiv.appendChild(commentDiv);

    document.body.appendChild(finalDiv);
}


