console.log("fetch", this.fetch);

self.addEventListener('fetch', function(event) {
  console.log("Caught a fetch!");
  event.respondWith(new Response("ALOHA!"));
});

fetch('./').then(function(res) {
  console.log("Response", res);
  return res.text();
}
