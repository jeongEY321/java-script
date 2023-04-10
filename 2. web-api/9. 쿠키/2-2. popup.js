
function createCookie(name) {
    const date = new Date();
    date.setDate(date.getDate+1); //수명을 하루로 설정.
    let cookie = '';
    cookie += `${name}='true;`; //문자열 안에 세미콜론을 반드시 찍으세요.
    cookie += 'expires=' + date.toUTCString();
    document.cookie = cookie;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for(let c of cookies) {
        if(c.search(name) !== -1) {
            return true;
        }
    }
    // return false; 쓰면 좀 더 확실하지만 리턴이 없어 undefind가 넘겨지고 flasy값을 뜬다. 자바는 무조건 써야한다.
}