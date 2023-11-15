function navChoose(ch, no){
    document.getElementsByClassName('nav-page')[ch].classList.add('choose-page');
    document.getElementsByClassName('nav-page')[ch].classList.remove('no-choose-page');

    document.getElementsByClassName('nav-page')[no].classList.add('no-choose-page');
    document.getElementsByClassName('nav-page')[no].classList.remove('choose-page');

    if(ch){
        window.location.href = '/learnMyPost.html'
    }else{
        window.location.href = '/learn.html'
    }
}

function showContent(){
    window.location.href = "/learnShowPost.html";
}

function plusPost(){
    window.location.href = "/learnNewPost.html"
}

function backHome(){
    window.location.href = "/main.html";
}