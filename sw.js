const STATIC_CACHE_NAME = 'site-static-v1';
const ASSETS = [//Los ASSETS son archivos en ruta para pre-cargar
    '/',
    '/manifest.json',
    '/package-lock.json',
    '/package.json',
    '/sw.js',
    '/index.html',
    '/css/global.css',
    '/css/apoyo.css',
    '/images/dish',
    '/js/app.js',
    '/js/components/addComponent.js',
    '/js/components/indexComponents.js',
    '/js/components/menuComponent.js',
    '/js/components/menuDesplegableComponent.js',
    '/js/components/recetaEnListaComponent.js',
    '/node_modules/lit-element/lit-element.js'


]

self.addEventListener('install', evento =>{
    // console.log('Service Worker Has Been Installed');

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
                    keys.filter( key => key !== STATIC_CACHE_NAME) 
                                .map ( key => caches.delete(key) )
                                )
            }
        )
    );
});

self.addEventListener('fetch', evento =>{//Peticiones
    // console.log('Fetch event', evento);

    evento.respondWith(
        caches.match( evento.request )
            .then( cacheRespuesta => { //Si hay en caché, obtén de caché. Si no, hace la petición
                return cacheRespuesta || fetch(evento.request);
            })
    );

})