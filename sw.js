importScripts('sw2.js');

console.log("fetch", this.fetch);
last_i=-1;
  fetch('https://timvolodine.github.io/service-worker-test/sec-breach.html').then(function(res) {
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
  //event.respondWith(Response.redirect("http://www.google.com"));
  
  console.log('last_i=', last_i);
  
  startTime = new Date().getTime();
  
  for (i=1;i<10000;i++){
    spinningWait(2);
    curTime = new Date().getTime();
    console.log(i, (curTime - startTime) / 1000);
    last_i = i;
  }

/*
       clients.matchAll().then(function(clients) {
         console.log("clients.length=",clients.length);
         for (i=0;i<clients.length;i++){
           clients[i].postMessage(sometext);
         }
       });
       */
});

function spinningWait(secondsDelta) {
  startSpinTime = new Date().getTime();
  curSpinTime = startSpinTime;
  while ((curSpinTime - startSpinTime)/1000 < secondsDelta) {
    for (j=1;j<1000000;j++){ z=Math.log(j)*Math.cos(j); }
    curSpinTime = new Date().getTime();
  }
}
