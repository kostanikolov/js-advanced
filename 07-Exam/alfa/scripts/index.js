function mySolution() {

    let questionTextarea = document.getElementsByTagName('textarea')[0];
    let usernameInput = document.querySelector('input[type="username"]');
    let sendButton = document.querySelector('#inputSection div button');
    
    let pendingQuestionsSection = document.getElementById('pendingQuestions');
    let openQuestionsSection = document.getElementById('openQuestions');
    let singleQuestion;

    sendButton.addEventListener('click', pendingQuestions);

    function pendingQuestions() {
        let questionValue = questionTextarea.value;
        let usernameValue = usernameInput.value;
        
        if (!usernameValue) {
            singleQuestion = createSingleQuestion(questionValue, 'Anonymous');
        } else {
            singleQuestion = createSingleQuestion(questionValue, usernameValue);
        }

        pendingQuestionsSection.appendChild(singleQuestion);
    }

    function movePendingToOpenQuestion() {
        // singleQuestion.removeChild(singleQuestion.lastChild);
        singleQuestion.setAttribute('class', 'openQuestion');
        singleQuestion.removeChild(singleQuestion.lastChild);

        let actionsDiv = document.createElement('div');
        actionsDiv.setAttribute('class', 'actions');

        let replyButton = document.createElement('button');
        replyButton.setAttribute('class', 'reply');
        replyButton.textContent = 'Reply';
        actionsDiv.appendChild(replyButton);

        // let replyButton = document.createElement('button');
        // replyButton.setAttribute('class', 'reply');
        // replyButton.textContent = 'Reply';
        // actionsDiv.appendChild(replyButton);

        let replySection = document.createElement('div');
        replySection.setAttribute('class', 'replySection');
        replySection.setAttribute('style', 'display: none;');

        let replyInput = document.createElement('input');
        replyInput.setAttribute('class', 'replyInput');
        replyInput.setAttribute('type', 'text');
        replyInput.setAttribute('placeholder', 'Reply to this question here...');

        let replySendButton = document.createElement('button');
        replySendButton.setAttribute('class', 'replyButton');
        replySendButton.textContent = 'Send';

        let repliesList = document.createElement('ol');
        repliesList.setAttribute('class', 'reply');
        repliesList.setAttribute('type', '1');

        replySection.appendChild(replyInput);
        replySection.appendChild(replySendButton);
        replySection.appendChild(repliesList);

        singleQuestion.appendChild(actionsDiv);
        singleQuestion.appendChild(replySection);

        openQuestionsSection.appendChild(singleQuestion);
    }

    function createSingleQuestion(questionValue, usernameValue) {
        let pendingQuestionDiv = document.createElement('div');
        pendingQuestionDiv.setAttribute('class', 'pendingQuestion');

        let userImage = document.createElement('img');
        userImage.setAttribute('src', './images/user.png');
        userImage.setAttribute('width', '32');
        userImage.setAttribute('height', '32');

        let userSpan = document.createElement('span');
        userSpan.textContent = usernameValue;

        let questionParagraph = document.createElement('p');
        questionParagraph.textContent = questionValue;

        let actionsDiv = document.createElement('div');
        actionsDiv.setAttribute('class', 'actions');

        let archiveButton = document.createElement('button');
        archiveButton.setAttribute('class', 'archive');
        archiveButton.textContent = 'Archive';
        archiveButton.addEventListener('click', function () {
            pendingQuestionDiv.remove();
        });

        let openButton = document.createElement('button');
        openButton.setAttribute('class', 'open');
        openButton.textContent = 'Open';
        openButton.addEventListener('click', movePendingToOpenQuestion);

        actionsDiv.appendChild(archiveButton);
        actionsDiv.appendChild(openButton);
        pendingQuestionDiv.appendChild(userImage);
        pendingQuestionDiv.appendChild(userSpan);
        pendingQuestionDiv.appendChild(questionParagraph);
        pendingQuestionDiv.appendChild(actionsDiv);

        return pendingQuestionDiv;
    }
}
