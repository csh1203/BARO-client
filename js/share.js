let stuId = document.getElementsByClassName('stu-id')[0];
let id = "2314";
let name = "조서현"
stuId.innerHTML = `${id}_${name}`;

commentCnt = document.getElementsByClassName('comment-cnt-num')[0];
commentCnt.innerHTML = 3;

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
