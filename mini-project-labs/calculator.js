function load() {
    let screen = document.getElementById('screen');
    let btns = document.querySelectorAll('#calculator span');
    var operator = ['+', '-', '×', '÷'];
    var btnValue;
    var input;

    for (let i = 0; i < allBtns.length; i++) {

        var decimalAdded = false; // Đặt cờ hiệu để tránh 2 số thập phân

        btns[i].addEventListener('click', function () {

            btnValue = this.innerHTML;
            input = inputScreen.innerHTML;

            switch (input) {
                case 'C':
                    screen.innerHTML = '';
                    decimalAdded = false;
                    break;
                case '=':

                    // Ký tự cuối cùng của chuỗi
                    var lastChar = input[input.length - 1];

                    // Thay × thanh *, ÷ thành / có thể được tính trong eval
                    input = input.replace(/×/g, '*').replace(/÷/g, '/');

                    // Kiểm tra ký tự cuối cùng đầu vào.
                    // Nếu đó là một toán tử hoặc một số thập phân, hãy xóa nó
                    // /.$/ có nghĩa là ký tự cuối cùng trong regex
                    if (operator.indexOf(lastChar) > -1 || lastChar == '.')
                        input = input.replace(/.$/, '');

                    if (input) {

                        inputScreen.innerHTML = eval(input);
                    }
                    decimalAdded = false;
                    break;
                case '.':
                    if (!decimalAdded) {
                        inputScreen.innerHTML += btnValue;
                        decimalAdded = true;
                    }
                    break;

                case '+':
                case '-':
                case '×':
                case '÷':

                    var lastChar = input[input.length - 1];

                    if (input != '' && operator.indexOf(lastChar) == -1)
                        inputScreen.innerHTML += btnValue;

                    else if (input == '' && btnValue == '-')
                        inputScreen.innerHTML += btnValue;

                    if (operator.indexOf(lastChar) > -1 && input.length > 1) {
                        inputScreen.innerHTML = input.replace(/.$/, btnValue);
                    }
                    decimalAdded = false;
                    break;
                default:
                    inputScreen.innerHTML += btnValue;
                    decimalAdded = false;
                    break;
            }
        });
    }
}