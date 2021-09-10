const STATIC_CACHE_NAME = 'site-static-v1';
const DYNAMIC_CACHE_NAME = 'site-dynamic-v1';
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
    '/node_modules/lit-element/lit-element.js',
    '/images/404-Error-bro.svg',
    '/images/icons/icon-96x96.png',
    '/fallback.html'
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
    // evento.respondWith(
    //     caches.match( evento.request )
    //         .then( cacheRespuesta => { //Si hay en caché, obtén de caché. Si no, hace la petición
    //             return cacheRespuesta || fetch(evento.request)
    //                 .then( fetchRespuesta => { //caché dinámico
    //                         return caches.open( DYNAMIC_CACHE_NAME )
    //                             .then ( cache => {
    //                                 cache.put ( evento.request.url, fetchRespuesta.clone() );
    //                                 //Limite de espacio de caché
    //                                 //RECORDAR CAMBIARLO AL CRECER APLICACIÓN
    //                                 LIMIT_CACHE_SIZE(DYNAMIC_CACHE_NAME, 60);
    //                                 return fetchRespuesta;
    //                             })
    //                     }
    //                 );
    //         }).catch(() => {
    //             //Solo ocurre si pide un archivo html que no tenga en caché
    //             if(evento.request.url.indexOf('.html') > -1){
    //                 return caches.match('./fallback.html');
    //             }
    //         })
    // );
});