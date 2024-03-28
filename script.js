document.addEventListener('DOMContentLoaded', function() {
    var reloadButton = document.getElementById('reloadButton');

    reloadButton.addEventListener('click', function() {
        location.reload();
    });
});