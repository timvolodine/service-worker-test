console.log("fetch", this.fetch);

  fetch('https://timvolodine.github.io/service-worker-test/sec-breach.html').then(function(res) {
    console.log("Response", res);
    res.blob().then(function(res2) {
       sometext = res2;
       console.log(sometext);
    });
  });


self.addEventListener('fetch', function(event) {
  console.log("Caught a fetch!");

  //event.respondWith(new Response("ALOHA!"));
  event.respondWith(new Response(sometext));

/*
       clients.matchAll().then(function(clients) {
         console.log("clients.length=",clients.length);
         for (i=0;i<clients.length;i++){
           clients[i].postMessage(sometext);
         }
       });
       */
});

