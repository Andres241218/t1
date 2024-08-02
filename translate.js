document.addEventListener("DOMContentLoaded", function() {
    console.log("INICIADO")
    const translations = {
        en: {
            inicio: "Home",
            contacto: "Contact Us",
            video: "Video",
            traducir: "Translate",
            bienvenida: "Welcome to Sáenz & Hdez <br>investments",
            informacion: "Information",
            texto: "We are dedicated to the production and marketing of palm oil, with over 20 years of experience in the field, carrying out sustainable and environmentally friendly work. We specialize in the breeding and management of buffalo cattle, known for its superior quality in meat, milk, and better working capacity in various agricultural tasks. Our cattle are raised in controlled and natural environments, ensuring healthy and excellent products. We also raise smaller species like pigs and chickens, focusing on sustainable and ethical practices, ensuring animal welfare and consumer satisfaction. Promoting sustainable agricultural development.",
            ubicacion: "We are located in Tibu, Norte de Santander",
            copy: "© 2024 Sáenz & Hdez Investments. All rights reserved.",
            redes: "© Social Networks",
            facebook: "Facebook",
            twitter: "Twitter",
            instagram: "Instagram"
        },
        es: {
            inicio: "Inicio",
            contacto: "Contáctenos",
            video: "Video",
            traducir: "Traducir",
            bienvenida: "Bienvenido a Sáenz & Hdez <br>inversiones",
            informacion: "Información",
            texto: "Nos dedicamos a la producción y comercialización de palma de aceite, con más de 20 años de experiencia en la misma, haciendo labores sostenibles amigables al ambiente. Nos especializamos en la cría y manejo de ganado bufalino, conocido por ser mejor que el ganado bovino en cuanto a calidad de carne, leche y mejor capacidad de trabajo en diversas labores agrícolas. Nuestro ganado es criado en ambientes controlados y naturales, garantizando productos saludables y de excelencia. También criamos especies menores como cerdos y pollos, enfocándonos en prácticas sostenibles y éticas, asegurando el bienestar animal y la satisfacción del consumidor. Promoviendo el desarrollo agropecuario sostenible.",
            ubicacion: "Estamos ubicados en Tibu, Norte de Santander",
            copy: "© 2024 Sáenz & Hdez Inversiones. Todos los derechos reservados.",
            redes: "© Redes",
            facebook: "Facebook",
            twitter: "Twitter",
            instagram: "Instagram"
        }
    };

    // Función para traducir la página
    function translatePage(language) {
        console.log("TRANSLATE")
        const text = translations[language];
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            element.innerHTML = text[key] || key;
        });
        localStorage.setItem('language', language); // Guardar el idioma en localStorage

    }

    // Obtener el idioma guardado en localStorage o usar 'es' por defecto
    const savedLanguage = localStorage.getItem('language') || 'es';
    //translatePage(savedLanguage);

    // Configurar el botón de traducción
    document.getElementById('translate-btn').addEventListener('click', function() {
        const currentLanguage = localStorage.getItem('language');
        const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
       // if (currentLanguage == 'es') newLanguage = 'en';
        //if (currentLanguage == 'en') newLanguage = 'es';
        console.log(newLanguage)
        translatePage(newLanguage);
    });
});
