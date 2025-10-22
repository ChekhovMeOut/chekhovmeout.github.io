document.addEventListener('DOMContentLoaded', function() {
    
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Determine if local
    const isLocal = window.location.hostname !== 'ianwiatric.com';
    
    // Fetch the footer.html file, based on host type
    if (isLocal) {
        xhr.open('GET', '/docs/header.html', true); // local
    } else {
        xhr.open('GET', '/header.html', true); // remote
    }

    // Set up what to do when the request is complete
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // If successful, insert the header HTML at the beginning of the body
            document.body.insertAdjacentHTML('afterbegin', xhr.responseText);

            // NOW modify the hrefs after header is loaded
            if (isLocal) {
                document.querySelectorAll('nav.topnav a').forEach(link => {
                    const currentHref = link.getAttribute('href');
                    link.href = '/docs' + currentHref;
                });
            }

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