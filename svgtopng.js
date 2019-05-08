/*
SVG to PNG Converter

*/

function SVGConverter(svg,size){
  var def = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  var promise = new Promise(function(resolve, reject){
    if (!svg) reject('SVG Not Indicated');
    svg = svg?svg.slice(-4)=='.svg'?svg:def:def;
    size = Math.pow(2,Math.floor(Math.log2(size||128)));
    var canvas = document.createElement('canvas'),
        img = document.createElement('img'),
        ctx = canvas.getContext('2d');
    canvas.width = canvas.height = size;
    img.src = svg;
    
    img.onload = function(){
      ctx.drawImage(img,0,0,canvas.width,canvas.height);
      setTimeout(function(){
      var result = canvas.toDataURL('image/png'),
          name = svg.replace(/.svg/,'.png'),
          file = new File([result],name,{type:'image/png'}),
          a = document.createElement('a');
      if (resolve) setTimeout(function(){resolve(result,file);},1000);
      console.log(result);
      a.href = 'data:image/png;base64,'+result;
      a.download = name;
      //document.body.appendChild(a);
      setTimeout(function() {
        a.click();
        if (resolve) resolve(a);
        //document.body.removeChild(a);
      },66);
      },1000);
    };
  });
  return promise;
  /*
  self.save = function(){
    if (self.state!=='finished') return;
    var name = self.svg.replace(/.svg/,'.png');
    var file = new File([self.result],name); //window.atob(self.result.slice(22)
    chrome.fileSystem.chooseEntry({type:'saveFile',suggestedName:name},function(entry){
      name = entry.name;
      entry.createWriter(function(writer){
        writer.write(file);
      });
      return entry;
    });
  };
  });
  */
}
