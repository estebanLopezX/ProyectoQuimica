function checkAnswers() {
    const answers = {
        q1: '37',
        q2: '0',
        q3: '0',
        q4: '-273.15',
        q5: '100',
        q6: 'fusión',
        q7: 'vaporización',
        q8: 'condensación',
        q9: 'sublimación',
        q10: 'sublimación regresiva',
    };

    for (const [key, value] of Object.entries(answers)) {
        const input = document.getElementById(key);
        if (input.value.trim().toLowerCase() === value) {
            input.classList.add('correct');
        } else {
            input.classList.remove('correct');
        }
    }
}