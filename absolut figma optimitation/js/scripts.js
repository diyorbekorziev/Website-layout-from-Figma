let btn = document.querySelectorAll('.green_box');

btn.forEach(function(button) {
    button.addEventListener('click', function() {

        if (button.style.height === '220px') {
            button.style.backgroundColor = '';
            button.style.height = '';
        } else {
            button.style.backgroundColor = '#B9FF66';
            button.style.height = '220px';
        }

    });
});
