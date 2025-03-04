const themes = {
    unicorn: {
        name: "Unicorn",
        description: "A bright and clean theme for a fresh coding experience.",
        <img src="/screenshots/Unicorn.png" alt="Theme Preview">
    },
    gelato: {
        name: "Gelato",
        description: "Soft, creamy hues for a soothing and delightful workspace.",
        <img src="/screenshots/Gelato.png" alt="Theme Preview">
    },
    grimoire: {
        name: "Grimoire",
        description: "Dark, muted tones with smooth contrast for elegance and focus.",
        <img src="/screenshots/Grimoire.png" alt="Theme Preview">
    },
    liquorice: {
        name: "Liquorice",
        description: "Deep black with vibrant colors to make your code pop.",
        <img src="/screenshots/Liquorice.png" alt="Theme Preview">
    }
};

function changeTheme(themeKey, button) {
    // Rimuove la classe 'selected' da tutti i bottoni
    const themeButtons = document.getElementsByClassName('theme-btn');
    for (let i = 0; i < themeButtons.length; i++) {
        themeButtons[i].classList.remove('selected');
    }
    // Aggiunge la classe 'selected' al bottone cliccato
    if (button) {
        button.classList.add('selected');
    }

    const theme = themes[themeKey];
    document.getElementById('themeImage').src = theme.image;
    document.getElementById('themeName').textContent = theme.name;
    document.getElementById('themeDescription').textContent = theme.description;
    document.getElementById('themeInfo').classList.remove('hidden');
}

// Mostra automaticamente il tema "unicorn" al caricamento della pagina
document.addEventListener('DOMContentLoaded', function() {
    const unicornButton = document.querySelector('[data-theme="unicorn"]');
    changeTheme('unicorn', unicornButton);
});
