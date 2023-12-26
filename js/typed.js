function initializeTyped(configurations) {
    configurations.forEach(config => {
        new Typed(config.selector, {
            strings: config.strings,
            typeSpeed: config.typeSpeed,
            backSpeed: config.backSpeed,
            startDelay: config.startDelay,
            backDelay: config.backDelay,
            smartBackspace: true,
            shuffle: false,
            loop: true,
            loopCount: false,
            showCursor: true,
            cursorChar: '|',
            contentType: 'html'
        });
    });
}

const typedConfig = {
    typeSpeed: 75,
    backSpeed: 75,
    startDelay: 300,
    backDelay: 1500
};

const pageConfigurations = {
    '/index.html': [
        {
            selector: '.typed',
            strings: ["<i class='texto-start'>let's Start!</i>", "<i class='texto-start'>let's get started</i>", "<i class='texto-start'>let's make a start</i>"]
        },
        {
            selector: '.we-are',
            strings: ['<i>We are innovatech</i>', '<i>We are innovatech</i>']
        }
    ],
    '/': [
        {
            selector: '.typed',
            strings: ["<i class='texto-start'>let's Start!</i>", "<i class='texto-start'>let's get started</i>", "<i class='texto-start'>let's make a start</i>"]
        },
        // Agrega más configuraciones para otros selectores aquí
    ],
    '/index-es.html': [
        {
            selector: '.comencemos',
            strings: ["<i class='texto-start'>¡Comencemos!</i>", "<i class='texto-start'>¡Empieza tu viaje!</i>"]
        },

    ]
    //  configuraciones para otras rutas 
};

const path = window.location.pathname === '/' ? '/index.html' : window.location.pathname;
const configurations = pageConfigurations[path];
if (configurations) {
    initializeTyped(configurations.map(config => ({ ...config, ...typedConfig })));
}
