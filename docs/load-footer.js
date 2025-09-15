document.addEventListener('DOMContentLoaded', function() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    
    // Configure it to fetch the footer.html file
    xhr.open('GET', '/footer.html', true);
    
    // Set up what to do when the request is complete
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // If successful, insert the footer HTML before the closing body tag
            document.body.insertAdjacentHTML('beforeend', xhr.responseText);
        } else {
            console.error('Failed to load footer');
        }
    };
    
    // Set up what to do in case of an error
    xhr.onerror = function() {
        console.error('Error loading footer');
    };
    
    // Send the request
    xhr.send();
});
