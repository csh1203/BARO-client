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

let editArr = document.getElementsByClassName("edit-content-btn");
for(let i in editArr){
    editArr[i].onclick = () => editContent(i);
}

function editContent(i){
    let button = editArr[i];
    // let buttonRect = button.
}