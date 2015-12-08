console.log("fetch", this.fetch);

  fetch('./').then(function(res) {
  console.log("Response", res);
  return res.text();

/*
self.addEventListener('fetch', function(event) {
  console.log("Caught a fetch!");
  event.respondWith(new Response("ALOHA!"));
}
*/

});

