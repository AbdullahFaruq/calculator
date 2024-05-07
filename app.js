const input1 = document.querySelector('.inp1')
const input2 = document.querySelector('.inp2')
const options = document.querySelector('.options');
const calcBtn = document.querySelector('.btn');
const result = document.querySelector('.result');
const p = document.querySelector('p')




calcBtn.addEventListener('click', function() {
    // Check if either input is empty
    if (input1.value === '' || input2.value === '') {
        result.textContent = "Please fill both inputs first.";
        result.style.fontSize='16px'
        result.style.paddingTop='6px'
        result.style.color='red'
        return; // Exit the function early
    }

    switch(options.value) {
        case 'addition':
            result.textContent = Number(input1.value) + Number(input2.value);
            result.style.fontSize='25px'
            result.style.paddingTop='0'
            result.style.color='black'
            break;

        case 'subtraction':
            result.textContent = Number(input1.value) - Number(input2.value);
            result.style.fontSize='25px'
            result.style.paddingTop='0'
            result.style.color='black'
            break;

        case 'multiplication':
            result.textContent = Number(input1.value) * Number(input2.value);
            result.style.fontSize='25px'
            result.style.paddingTop='0'
            result.style.color='black'
            break;

        case 'division':
            // Check if the divisor is 0
            if (Number(input2.value) === 0) {
                result.textContent = "Cannot divide by zero.";
                result.style.fontSize='16px'
                result.style.paddingTop='7px'
                result.style.color='red'
                return; // Exit the function early
            }
            result.textContent = Number(input1.value) / Number(input2.value);
            result.style.fontSize='25px'
            result.style.paddingTop='0'
            result.style.color='black'
            break;

        default:
            result.textContent = "Invalid operation.";
    }

    // Clear input fields after calculation
    input1.value = '';
    input2.value = '';
});
