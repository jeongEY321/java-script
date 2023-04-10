const $input = document.querySelector('.box input');
const $btn = document.querySelector('.btn');
const $list = document.querySelector('.new');

document.addEventListener('click', e => {
    if (e.target.matches('span') || e.target.matches('button')) {
        if ($input.value === '') {
            $input.placeholder = '공백을 적을 수 없습니다!';
            $input.style.background = 'orangered';
            
        } else {
            $input.placeholder = '할 일을 입력하세요';
            $input.style.background = 'rgb(176, 174, 174)';
            const $newLi = document.createElement('li');
            $newLi.textContent = $input.value;
            $list.appendChild($newLi);
            $newLi.insertAdjacentHTML('afterbegin', '<input class="new-chec" type="checkbox">');
            $input.value = '';
        }
    }
});

const $newCh = document.querySelectorAll('.new-chec');
for(let $c of [...$newCh]) {
    $c.addEventListener('change', e => {
        if(e.target.checked) {
            $newLi.textDecoration = 'underline';
        }
    })
}