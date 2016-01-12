//
fetch('https://timvolodine.github.io/service-worker-test/sec-breach-dedicated.html').then(function(res) {
    console.log("Response", res);
    res.text().then(function(res2) {
       sometext = res2;
       console.log(sometext);
    });
  });
  
