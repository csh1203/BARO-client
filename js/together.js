let joinArr = [...document.getElementsByClassName('join-btn')];
console.log(joinArr);
joinArr.forEach((e) => {
    e.onclick = () => togetherJoin(e);
});

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

    if(!ch){
        window.location.href = '/together.html'
    }else{
        window.location.href = '/togetherMyPost.html'
    }
}

function togetherJoin(e){
    if(e.innerHTML ===  "참여하기"){
        e.innerHTML = "참여함"
    }else e.innerHTML = "참여하기"
}

function plusPost(){
    window.location.href = '/togetherNewPost.html';
}

function showContent(){
    window.location.href = '/togetherShowPost.html';
}
