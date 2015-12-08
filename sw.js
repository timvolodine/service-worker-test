console.log("fetch", this.fetch);

//clients.claim().then(function() {

  fetch('https://timvolodine.github.io/service-worker-test/sec-breach.html').then(function(res) {
    console.log("Response", res);
    res.blob().then(function(res2) {
       sometext = res2;
       
       clients.matchAll().then(function(clients) {
         console.log("clients.length=",clients.length);
         for (i=0;i<clients.length;i++){
           clients[i].postMessage(sometext);
         }
       });
    });
  });
//});


/*
self.addEventListener('fetch', function(event) {
  console.log("Caught a fetch!");
//  fetch('https://timvolodine.github.io/service-worker-test/sec-breach.html').then(function(res) {
//    console.log("Response", res);
//    event.respondWith(new Response(res.text()));
//  });
//  sometext = res.text();

  //event.respondWith(new Response("ALOHA!"));
  event.respondWith(new Response(sometext));
//  event.respondWith(new Response(res.text()));


});
*/
