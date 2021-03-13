let claimButton = document.getElementById('claim-button');

console.log(claimButton);

claimButton.addEventListener('click', () => {
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    let formControl = document.querySelectorAll('.form-control');

    formControl.forEach((element) => {
        let input = element.querySelector('input');
        let img = element.querySelector('img');
        let warning = element.querySelector('.warning');

        if(input.value == '') {
            input.placeholder = ''
            warning.style.display = 'block';
            img.style.display = 'block';
            input.style.border = '1px solid var(--red)';
        } else {
            warning.style.display = 'none';
            img.style.display = 'none';
            input.style.border = '1px solid var(--grayblue)';
        }

    })
})

function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
        return (true)
    }
    return (false)
}


// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// validateEmail ('muqaddas@addo.ai')
