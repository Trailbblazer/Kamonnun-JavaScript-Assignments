/* JavaScript Assignments Module 3 */

/* Number 10 */

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('source');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var firstName = document.querySelector('input[name="firstname"]').value;
        var lastName = document.querySelector('input[name="lastname"]').value;
        document.getElementById('target').textContent = 'Your name is ' + firstName + ' ' + lastName;
    });
});
