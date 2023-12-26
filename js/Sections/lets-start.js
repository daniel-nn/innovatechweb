function initializeTyped(selector, strings, typeSpeed, backSpeed, startDelay, backDelay) {
    new Typed(selector, {
        strings: strings,
        typeSpeed: typeSpeed,
        backSpeed: backSpeed,
        startDelay: startDelay,
        backDelay: backDelay,
        smartBackspace: true,
        shuffle: false,
        loop: true,
        loopCount: false,
        showCursor: true,
        cursorChar: '|',
        contentType: 'html'
    });
}

//configuraciones comunes para Typed.js aquí
const typedConfig = {
    typeSpeed: 75,
    backSpeed: 75,
    startDelay: 300,
    backDelay: 1500
};

// configuraciones  de la página
const pageConfigurations = {
    '/index.html': {
        selector: '.typed',
        strings: ["<i class='texto-start'>let's Start!</i>", "<i class='texto-start'>let's get started</i!>", "<i class='texto-start'>let's make a start</i!>"]
    },
    '/': {  // Esto maneja la ruta raíz https://innovatechcorp.net
        selector: '.typed',
        strings: ["<i class='texto-start'>let's Start!</i>", "<i class='texto-start'>let's get started</i>", "<i class='texto-start'>let's make a start</i>"]
    },
    '/index-es.html': {
        selector: '.comencemos',
        strings: ["<i class='texto-start'>¡Comencemos!</i>", "<i class='texto-start'>¡Empieza tu viaje!</i>"]

    },
    //    posibles nuevas secciones

};
const path = window.location.pathname === '/' ? '/index.html' : window.location.pathname;
const config = pageConfigurations[path];
if (config) {
    initializeTyped(config.selector, config.strings, typedConfig.typeSpeed, typedConfig.backSpeed, typedConfig.startDelay, typedConfig.backDelay);
}
