function setting(){
    let grade = document.getElementById('grade').value;
    let className = document.getElementById('class').value;
    let stuId = document.getElementsByClassName('stu-id-input')[0].value;
    let name = document.getElementsByClassName('name-input')[0].value;
    
    if(grade === ""){
        return alert("학년을 선택해주세요!");
    }
    if(className === ''){
        return alert('반을 선택해주세요!');
    }
    if(stuId === ''){
        return alert('번호를 입력해주세요!');
    }
    if(stuId < 1){
        return alert('번호를 다시 입력해주세요!');
    }
    if(name === ''){
        return alert('이름을 입력해주세요!');
    }
    if(!(isNaN(name))){
        return alert('이름을 다시 입력해주세요!');
    }
    alert('회원가입 되었습니다!');

    window.location.href = '/index.html';
}