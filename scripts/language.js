// Обработка переключения языка
// Language switch handling
// Gestione del cambio della lingua
// Manejo del cambio de idioma

document.getElementById('language-switcher').addEventListener('click', (e) => {
    if (e.target.dataset.lang) {
        const selectedLang = e.target.dataset.lang;

        // Сохранение выбранного языка в localStorage
        // Saving the selected language to localStorage
        // Salvataggio della lingua selezionata in localStorage
        // Guardar el idioma seleccionado en localStorage
        localStorage.setItem('lang', selectedLang);

        // Применение выбранного языка
        // Applying the selected language
        // Applicazione della lingua selezionata
        // Aplicar el idioma seleccionado
        applyLanguage(selectedLang);
    }
});

// Функция для применения языка
// Function to apply the language
// Funzione per applicare la lingua
// Función para aplicar el idioma
function applyLanguage(lang) {
    const translations = {
        ru: {
            about: 'Обо мне',
            skills: 'Навыки',
            portfolio: 'Портфолио',
            games: 'Игры',
            contacts: 'Контакты',
        },
        en: {
            about: 'About Me',
            skills: 'Skills',
            portfolio: 'Portfolio',
            games: 'Games',
            contacts: 'Contacts',
        },
        it: {
            about: 'Su di Me',
            skills: 'Competenze',
            portfolio: 'Portafoglio',
            games: 'Giochi',
            contacts: 'Contatti',
        },
        es: {
            about: 'Sobre mí',
            skills: 'Habilidades',
            portfolio: 'Portafolio',
            games: 'Juegos',
            contacts: 'Contactos',
        }
    };

    // Изменение текста для каждого элемента
    // Updating text for each element
    // Aggiornamento del testo per ogni elemento
    // Actualización del texto para cada elemento
    document.querySelector('a[href="#about"]').textContent = translations[lang].about;
    document.querySelector('a[href="#skills"]').textContent = translations[lang].skills;
    document.querySelector('a[href="#portfolio"]').textContent = translations[lang].portfolio;
    document.querySelector('a[href="#games"]').textContent = translations[lang].games;
    document.querySelector('a[href="#contacts"]').textContent = translations[lang].contacts;
}

// Автоопределение языка пользователя
// Auto-detecting user's language
// Rilevamento automatico della lingua dell'utente
// Detección automática del idioma del usuario
const userLang = localStorage.getItem('lang') || navigator.language.slice(0, 2);

// Применение языка при загрузке страницы
// Applying language on page load
// Applicazione della lingua al caricamento della pagina
// Aplicar el idioma al cargar la página
applyLanguage(['ru', 'en', 'it', 'es'].includes(userLang) ? userLang : 'en');
