// EN: Detect user's browser language
// RU: Определение языка браузера пользователя
// IT: Rileva la lingua del browser dell'utente
// ES: Detecta el idioma del navegador del usuario
const supportedLanguages = ['en', 'ru', 'it', 'es'];
const userLanguage = navigator.language.slice(0, 2);

// EN: Set the page language or fallback to English
// RU: Устанавливаем язык страницы или английский по умолчанию
// IT: Imposta la lingua della pagina o torna all'inglese
// ES: Configura el idioma de la página o vuelve al inglés
document.documentElement.lang = supportedLanguages.indexOf(userLanguage) !== -1
  ? userLanguage
  : 'en';
