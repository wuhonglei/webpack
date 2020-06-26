console.info('worker is running');

self.addEventListener('fetch', function(event) {
    debugger;
    event.request.url; // -> '/my/app.js'
});