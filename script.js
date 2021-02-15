const page = {};



const documentReady = function(init) {
    if (document.readyState === 'loading') {
        // doc is not ready, wait until it is fully loaded and run page's scripts
         document.addEventListener('DOMContentLoaded', init);
    } else {
        // 'DOMContentLoaded' has already fired, run page's scripts
        init();
    }     
}

// initialize page's scripts
documentReady(function () {
    
});
