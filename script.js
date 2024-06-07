document.addEventListener('DOMContentLoaded', function() {
    // Romme Section
    const buttonSection = document.getElementById('buttonSection');
    const inputSection = document.getElementById('inputSection');
    const scoreForm = document.getElementById('scoreForm');
    const selectedButton = document.getElementById('selectedButton');

    document.getElementById('button1').addEventListener('click', function() {
        selectedButton.value = 'Florian';
        buttonSection.classList.add('hidden');
        inputSection.classList.remove('hidden');
    });

    document.getElementById('button2').addEventListener('click', function() {
        selectedButton.value = 'Lydia';
        buttonSection.classList.add('hidden');
        inputSection.classList.remove('hidden');
    });

    scoreForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const player = selectedButton.value;
        const score = parseInt(document.getElementById('scoreInput').value);

        let scores = JSON.parse(localStorage.getItem('scores')) || { Florian: 0, Lydia: 0, gamesPlayed: 0 };
        scores[player] += score;
        scores.gamesPlayed += 1;
        localStorage.setItem('scores', JSON.stringify(scores));
        window.location.href = 'romme.html';
    });

    // Ideensammlung Section
    const addIdeaButton = document.getElementById('addIdeaButton');
    const ideaFormSection = document.getElementById('ideaFormSection');
    const ideaForm = document.getElementById('ideaForm');

    addIdeaButton.addEventListener('click', function() {
        addIdeaButton.classList.add('hidden');
        ideaFormSection.classList.remove('hidden');
    });

    ideaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const category = document.getElementById('categorySelect').value;
        const idea = document.getElementById('ideaInput').value;

        let ideas = JSON.parse(localStorage.getItem('ideas')) || {};
        if (!ideas[category]) {
            ideas[category] = [];
        }
        ideas[category].push(idea);
        localStorage.setItem('ideas', JSON.stringify(ideas));
        window.location.href = 'ideas.html';
    });
});
