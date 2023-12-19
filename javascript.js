
    document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();

    var moreTabs = document.getElementById('moreTabs');
    var additionalLists = moreTabs.querySelectorAll('.additional');

    var numToShow = 3; // Number of elements to show each time
    var numHidden = additionalLists.length;
    var numVisible = moreTabs.querySelectorAll('.visible').length;

    var startIndex = numVisible;
    var endIndex = startIndex + numToShow;

    // Check if there are more elements to show
    if (startIndex < numHidden) {
        var remainingElements = [];
        for (var i = startIndex; i < numHidden; i++) {
            remainingElements.push(additionalLists[i].outerHTML);
        }

        // Store remaining elements in localStorage to access in the new page
        localStorage.setItem('remainingElements', JSON.stringify(remainingElements));

        // Redirect to a new page
        window.location.href = 'newPage.html';
    }
});

