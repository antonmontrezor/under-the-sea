// namespace object
const page = {};

// defining a function that will show a user's comment on the page
page.writeComment = function() {
    const form = document.getElementById('blog-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const inputTextElement = document.getElementById('user-name');
        const userName = inputTextElement.value;

        const inputEmailElement = document.getElementById('user-email');
        const userEmail = inputEmailElement.value;

        const textareaElement = document.getElementById('user-comment');
        const userComment = textareaElement.value;

        if(userName.trim() && userEmail.trim() && userComment.trim()) {
            const blogComment = document.createElement('article');
            blogComment.classList = "posted-comments";
            blogComment.innerHTML = `
                                    <div class="user-image">
                                        <img src="./assets/user-comment.png" alt="A default user's avatar of a smiling grey cartoon head">
                                    </div>
                                    `;

            // a special shout-out to Zell Liew from css-tricks.com who has inspired me to use such method to present a current date in an appropriate format reauired by the design
            const currentDate = new Date();
            const year = currentDate.getFullYear();

            const months = ['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            const monthName = months[currentDate.getMonth()];

            const dates = ['0', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];

            const date = dates[currentDate.getDate()];
    
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            
            const dayName = days[currentDate.getDay()];

            // formatted current date 
            const formattedDate = `${dayName} ${monthName} ${date}, ${year}`;

            const commentData = document.createElement('p');
            commentData.append(document.createTextNode(` by ${userName}`));

            const datePosted = document.createElement('time');
            datePosted.append(document.createTextNode(formattedDate));
            commentData.prepend(datePosted);

            const comment = document.createElement('p');
            comment.append(document.createTextNode(userComment));

            const commentContainer = document.createElement('div');
            commentContainer.classList = 'comment-text';
            commentContainer.append(commentData);
            commentContainer.append(comment);

            blogComment.append(commentContainer);

            form.prepend(blogComment);

            // clear inputs' values 
            inputTextElement.value = '';
            inputEmailElement.value = '';
            textareaElement.value = '';
        } 
    });
};

// document ready 
const documentReady = function(init) {
    if (document.readyState === 'loading') {
        // doc is not ready, wait until it is fully loaded and run page's scripts
         document.addEventListener('DOMContentLoaded', init);
    } else {
        // 'DOMContentLoaded' has already fired, run page's scripts
        init();
    }     
};

// initialize page's scripts
documentReady(function () {
    page.writeComment();
});
