console.log("fetch", this.fetch);


//  return res.text();
  fetch('https://timvolodine.github.io/service-worker-test/sec-breach.html').then(function(res) {
    console.log("Response", res);
    //console.log("res.text()", res.json());
    sometext = res.text();
    //event.respondWith(new Response(res.text()));
  });

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

