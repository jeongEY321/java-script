const $checkbox = document.querySelectorAll('input[type="checkbox"]');
        const $idRe = document.getElementById('remember');
        const $id = document.getElementById('id');
        document.addEventListener('change', e => {
            if(e.target.checked) {
                if(e.target.id === 'remember') {
                    return;
                }
                alert(`동의하셨습니다.${e.target.value}`);
            }
        });

        const $check2 = document.getElementById('check2');
        $check2.addEventListener('click', e => {
            // console.log($id.value);
            if($id.value === '') {
                alert(`id를 작성해주세요.`);
            } else if(!$idRe.checked) {
                alert(`기억하기를 체크해주세요.`);
            }
            
        });