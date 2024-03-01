function convertToGrade() {
    var markInput = document.getElementById('mark-input').value;
    var gradeResult = document.getElementById('grade-result');
    var validationMessage = document.getElementById('validation-message');
    
    gradeResult.textContent = '';
    validationMessage.textContent = '';

    if (isNaN(markInput) || markInput === '' || markInput < 0 || markInput > 100) {
        validationMessage.textContent = 'Please enter a valid mark between 0 and 100.';
        return;
    }

    var mark = parseFloat(markInput);
    if (mark >= 90) {
        gradeResult.textContent = 'Grade A';
    } else if (mark >= 80) {
        gradeResult.textContent = 'Grade B';
    } else if (mark >= 70) {
        gradeResult.textContent = 'Grade C';
    } else if (mark >= 50) {
        gradeResult.textContent = 'Grade D';
    } else {
        gradeResult.textContent = 'Grade F';
    }
}

var currentDate = new Date();
var formattedDate = currentDate.toLocaleDateString('en-US');
document.getElementById('current-date').textContent = formattedDate;