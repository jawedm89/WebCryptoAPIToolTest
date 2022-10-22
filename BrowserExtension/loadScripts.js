var loadScript = function (file) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', file, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            resolve(xhr.response);
          } else {
            resolve('/* Could not load. Status = ' + xhr.status + '*/' + file);
          }
        }
      };
      xhr.send();
    });
  };


 
  async function laden(scripts, jsscripts) {
    for (let i = 0; i < scripts.length; i++) {
      if (scripts[i].src == '') {
        jsscripts[i] = scripts[i].innerHTML;
      }
      else {
        jsscripts[i] = await loadScript(scripts[i].src);
        //console.log(jsscripts[i])
      }
    }
    return jsscripts;
  }