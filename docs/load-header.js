document.addEventListener('DOMContentLoaded', function() {
    
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    
    // Configure it to fetch the header.html file
    xhr.open('GET', '/header.html', true);

    
    // Set up what to do when the request is complete
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // If successful, insert the header HTML at the beginning of the body
            document.body.insertAdjacentHTML('afterbegin', xhr.responseText);

        } else {
            console.error('Failed to load header');
        }
    };
    
    // Set up what to do in case of an error
    xhr.onerror = function() {
        console.error('Error loading header');
    };
    
    // Send the request
    xhr.send();
}); 