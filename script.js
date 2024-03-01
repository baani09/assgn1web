document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('picName').style.display = 'block';
    }, 10000);
    
    
    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleDateString('en-US');
    document.getElementById('current-date').textContent = formattedDate;
});