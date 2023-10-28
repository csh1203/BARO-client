function clickEye(index){
    let isOpen = document.getElementsByClassName('input-icon')[index].classList.contains('open');

    if(isOpen){
        document.getElementsByClassName('pw-eye')[index].type = "password";
        document.getElementsByClassName('icon-div')[index].innerHTML = `<iconify-icon icon="fluent:eye-28-regular" class="input-icon" onclick="clickEye(${index})"></iconify-icon>`
        document.getElementsByClassName('input-icon')[index].classList.remove('open');
    }else{
        document.getElementsByClassName('pw-eye')[index].type = "text";
        document.getElementsByClassName('icon-div')[index].innerHTML = `<iconify-icon icon="ph:eye-closed-light" class="input-icon" onclick="clickEye(${index})"></iconify-icon>`
        document.getElementsByClassName('input-icon')[index].classList.add('open');
    }
}

function idCheck(){
    let id = document.getElementsByClassName('id-input')[0].value;
    alert('이미 사용중인 아이디입니다');

}

function signup(){
    idValue = document.getElementsByClassName('id-input')[0].value;
    pwValue = document.getElementsByClassName('pw-input')[0].value;
    pwCheckValue = document.getElementsByClassName('pw-check-input')[0].value;
    if(idValue === ''){
        return alert('아이디를 입력해주세요!');
    }
    if(pwValue === ''){
        return alert('비밀번호를 입력해주세요!');
    }
    if(pwValue !== pwCheckValue){
        return alert('비밀번호를 확인해주세요!');
    }

    window.location.href = '/settingProfile.html';
}