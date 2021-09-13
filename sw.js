const STATIC_CACHE_NAME = 'site-static-v2';
const DYNAMIC_CACHE_NAME = 'site-dynamic-v2';
const ASSETS = [//Los ASSETS son archivos en ruta para pre-cargar
    '/',
    '/manifest.json',
    '/package-lock.json',
    '/package.json',
    '/index.html',
    '/css/global.css',
    '/css/apoyo.css',
    '/js/app.js',
    '/js/components/addComponent.js',
    '/js/components/indexComponents.js',
    '/js/components/menuComponent.js',
    '/js/components/menuDesplegableComponent.js',
    '/js/components/recetaEnListaComponent.js',
    '/node_modules/lit-element/lit-element.js',
    '/fallback.html',
    '/js/db.js',
    '/js/components/listaDeRecetasComponent.js',
    '/js/components/contactPageComponent.js',
    '/js/components/aboutPageComponent.js',
    '/images/dish',
    '/images/404-Error-bro.svg',
    '/images/icons/icon-96x96.png',
    '/images/icon-128x128.ico',
    '/images/icons/icon-144x144.png',
    '/images/mail.svg',
    '/images/plus.svg',
    '/images/menu.png',
    '/node_modules/lit-html/lib/shady-render.js',
    '/node_modules/lit-element/lib/updating-element.js',
    '/node_modules/lit-element/lib/decorators.js',
    '/node_modules/lit-html/lit-html.js',
    '/node_modules/lit-element/lib/css-tag.js',
    '/node_modules/lit-html/lib/dom.js',
    '/node_modules/lit-html/lib/modify-template.js',
    '/node_modules/lit-html/lib/render.js',
    '/node_modules/lit-html/lib/template-factory.js',
    '/node_modules/lit-html/lib/template-instance.js',
    '/node_modules/lit-html/lib/directive.js',
    '/node_modules/lit-html/lib/part.js',
    '/node_modules/lit-html/lib/parts.js',
    '/node_modules/lit-html/lib/template.js',
    '/node_modules/lit-html/lib/default-template-processor.js',
    '/node_modules/lit-html/lib/template-result.js',
]

const LIMIT_CACHE_SIZE = (nameCache, size) =>{
    caches.open(nameCache).then(cache => {
        cache.keys().then(keys => {
            if(keys.length > size){
                cache.delete(keys[0]).then(LIMIT_CACHE_SIZE(nameCache,size))
            }
        })
    })
};

self.addEventListener('install', evento =>{
    // console.log('Service Worker Has Been Installed');
    // self.skipWaiting();
    //Carga los archivos en caché
    evento.waitUntil( 
        caches.open(STATIC_CACHE_NAME)
        .then(cache =>{
            cache.addAll(ASSETS);
        })
    );

});


self.addEventListener('activate', evento =>{
    // console.log('Service Worker Has Been Activated');
    //Borra los caché anteriores
    evento.waitUntil(
        caches.keys().then ( 
            keys => {
                return Promise.all ( 
                    keys.filter( key => key !== STATIC_CACHE_NAME && key !== DYNAMIC_CACHE_NAME) 
                                .map ( key => caches.delete(key) )
                                )
            }
        )
    );
});

self.addEventListener('fetch', evento =>{//Peticiones
    // ESTO TIENE UN BUG EN ALGÚN LADO
    // console.log('Fetch event', evento);
    if(navigator.onLine) {
        console.log('Online');
    } else {
        console.log('Offline');
        evento.respondWith(
            caches.match( evento.request )
                .then( cacheRespuesta => { //Si hay en caché, obtén de caché. Si no, hace la petición
                    console.log('aqui');

                    return cacheRespuesta || fetch(evento.request)
                        .then( fetchRespuesta => { //caché dinámico
                            console.log('aqui');
                                return caches.open( DYNAMIC_CACHE_NAME )
                                    .then ( cache => {
                                        console.log('aqui');

                                        cache.put ( evento.request.url, fetchRespuesta.clone() );
                                        //Limite de espacio de caché
                                        //RECORDAR CAMBIARLO AL CRECER APLICACIÓN
                                        LIMIT_CACHE_SIZE(DYNAMIC_CACHE_NAME, 60);
                                        return fetchRespuesta;
                                    })
                            }
                        );
                        console.log('NO catch request html');

                }).catch(() => {
                    console.log('catch request html');
                    //Solo ocurre si pide un archivo html que no tenga en caché
                    if(evento.request.url.indexOf('.html') > -1){
                        return caches.match('./fallback.html');
                    }
                })
        );
    }
});