importScripts('sw2.js');

console.log("fetch", this.fetch);

//  fetch('https://timvolodine.github.io/service-worker-test/sec-breach.html').then(function(res) {
  fetch('file://timvolodine.github.io/service-worker-test/sec-breach.html').then(function(res) {
    console.log("Response", res);
    res.text().then(function(res2) {
       sometext = res2;
       console.log(sometext);
    });
  });


self.addEventListener('fetch', function(event) {
  console.log("Caught a fetch!");

/*
var xhr = new XMLHttpRequest();
xhr.open('GET', "https://timvolodine.github.io/service-worker-test/sec-breach2.html");
xhr.responseType = 'json';

xhr.onload = function() {
  console.log(xhr.response);
};

xhr.onerror = function() {
  console.log("Booo");
};

xhr.send();
*/

fetch('https://timvolodine.github.io/service-worker-test/sec-breach2.html').then(function(res) {
    console.log("Response 2", res);
    res.text().then(function(res2) {
       console.log(res2);
    });
  });


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

