console.log("fetch", this.fetch);

  fetch('https://timvolodine.github.io/service-worker-test/sec-breach.html').then(function(res) {
  console.log("Response", res);
  
  sometext = res.text();
  
//  return res.text();


self.addEventListener('fetch', function(event) {
  console.log("Caught a fetch!");
  //event.respondWith(new Response("ALOHA!"));
  event.respondWith(new Response(sometext));
}


});

