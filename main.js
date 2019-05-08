var sfx = new Audio("data:audio/mp3;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAGAAAJXgA1NTU1NTU1NTU1NTU1NTU1ZWVlZWVlZWVlZWVlZWVlZWWUlJSUlJSUlJSUlJSUlJSUvLy8vLy8vLy8vLy8vLy8vLzr6+vr6+vr6+vr6+vr6+vr6/////////////////////8AAAA8TEFNRTMuOThyBK8AAAAAAAAAADQgJARVTQABzAAACV5qzv9nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQZAAAATMQ1O0EQAgPYAm9oAABG805T/mtgADqguh/BAABEEAjFAAADHGAGD5jHGP6nzuhAAABDLg+H3f4IBg5//4IBj//+sPgAAAAccfgAD//P9P+n/B+3qFswUAAAAAAFAApABz4A4UQ9mA3DcaLg0Ep2NPDVAjYMwwqYEkuhsSPiE5ONw00090HxAFgYIljft+YgKCEVMtTTOrUmgQABGYKoCQTFwEBDjTZ4xgkMiIQIDhgq3RmE2/RfBYkUhuXpMwpgNGuKGovKa0tzd9w7YOB32LcJ7BwgYKAAkODAZeUM3m5uxTvwwd+6epzNx2nWnilC6ZbANXGGq+6XVjkvt9p5XPuFG7j9SyHqGQu9rL5m9v86XdPbhyKTl6n7rjvvK7sM1WsxKerVeR2mh7u8a1qVNo2AwMzs0Qrqrqy673fbagAAaJu5nHFpYVDDhvCZbttbmm7/H3kgfTrfDf1uX+A733ksZpTcv//LM8a/mkImrchAAAAAA+/xaA5j3FqOhNFzUy5qq2imZd8Sp3+lbhMCLvI9LVAnpEikRD8//uAZBcCBIY/UX8/IAgj4Aov4AABD8j1R+y9FSC7AGi8AAAECuS0pUtK0llKmMFtNaq/j8UUNuksx94YgvL6suo7Mst4TsuqfepbsJbxOhk6KBECj9W7Uq73nz+ZaxpJRnjq7+OpVrWGd7X5d/Wst54dtb592hwpqa0GUf20LQ/lE4Q/9/e4IiZAAAHwwEc4iU4Eg5/rsn/1iq2///2q9n+r/XFxQ23IFSFABeTKkAAAP///jKS5fgQDN6mI2rZoq1mQUkiv50Vm9MzMZpIBXSiec7AOCA+OTCU2lEm59rqZYwZSAYrI2V+4QT+zdubfM6cpq189HM6NnmUqvN5uSvbn2f4VCJOJNQi/xzRdRxr1aLx1NRYVFoZLf7yrXwPi3erzCd+5IhqUETIBAO4a3iS/Flh1+vUtj8iL7KKK63Magh//fzy3Xaqdn9rFMXUfIJNi7Vbl/1IAq5hVEAAAAL////B3XxLiNDaO9TP/+4BkCoID50HR+wwtuCjAGi8AAAEN6P9H7DBW4J8C6LwAjAypNEo5Fn6l1LnUlEqz+dgp5hgYjk3RbENsjiVHQYVK0hHtkSIYFnuJXTg+crRxWiVK2fn6rjg6qYgdOxHLp78J7nuc6reiJUpxBqTSyxEs8w2HDgQYHUYgk4qSlP8VeR2a0+pO/0MTIhETIAAM/1oonCUGgoz6VSNayD1IX1im1dn/fs2f/f/03iI22cHjVldABdZKoQASv///qX8GiLApaQ802im3Yo6CplWqWqa1+MkdkcGkKiiXxZM5TOoVDPr4tTshy5C6an8C66yuzBHZq7dfmrrlVilpU2TapvmZ9tTmM5QqUdSt/NrZ8zhWEiSBmPJ/wWS9Ax5reN0f2/VSEBNSwPIAAUC8F0GAQtMc0sY////Fk1q///9Kn07Dcje1rzZIipWdXQAKmFZSAAkSb9qH6JqyrlGysKty1MMZnULXBiw2OEpxgP/7cGQQgANbP1H4D0F4LOCKLwAjAwu8+0XnoLUgw4LovACIHBWvweEIcUcNEjuZfklIUWTA81buLzFj+FJGuDUxkB4RiG/9YopFmxbgTzyQSJq/////jFjiBCNEdHKJNnUzhvh5ehqRY67xbsf9ARNxExAAKBBdwehFaMHyBhH/s//q7v+eduYm9bRYWQsVY5o/OK4utBIXLrEqQAJqncgAAIK37///FpY1bSqxILqNufLLifWGxs2GMEiVhJNJ0JVKVxDKKPLQsdvUXsdKfMRE25BIOCxx+x9f5+qshtpTB3+v/4wDhgvlzO/TFVBh6LUsTNK/eS99NQPMzcBABhsLtxANiTg3PoCjPmP76Er//Go3c0GWWLisS4DIRbHGFWF5hbiTDbSZQ0oAAAqIMABBDf+/9VUQYpD/+4BkB4AC/j7RfSmgCDxgCi+gAAEPhLtB+QyAAO6OJ/8GMAAsFI8YmmikWOJLPlgJscI9x6HC7SQPop2WgszQNz1aaamo7KZBKgkgZl0mImpyttTdk0VHmbVfpf//2MkyRMH62rACWREsm6HSzMXb+v9atqwiKmpgGkAabf+wi0NJNNdt7P/79p/T0aMwI4s8SjBjTodSDRp4yUIoHRwbNOBB54OsteJbEGPktSNzU8kAMARE0b2gEwy97dvwMAAB6RMeTguQkQShIyABYQF6ILnIJhkOJPDeXmUOsilUegeLDgT6pDKHMCycyDY5SA4tH0SRREm3dhyW0sHvBTx24/DFpGzzkP1pc3s1lL6ahglyuwZPuGzht2Kudy1S5/8DUU7TVP+TAsCv/xeH1VWdnd1aEWEV7fX9sLQAACI16RjEyk5Bu1yQYNxtFJWPnE0UmY76JD4OKGGDjm04mkwFUDyixVxb7J3WN3qqqf/7MGQCD/LPJNB/MGAKFyAJneAAAQAAAaQAAAAgAAA0gAAABFIUV7v+MsfLv0kg1BEGxOjORBBqTT2BQEBAVXZlUtVVV1VVUuKqqq/4ldmZuMzeqgLBQUFPChuIKDHdBXYgorgSC+FBX5BQV8IK///zf6CgrugruBIKAAAAB/hRgAP/57iLr/iUFf/KgqCoKh1MQU1FMy45OC40qg==");
var def_img = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
var loop,prev;
const MAX_CHOICES = 6;

function repeat(fn,p,t){
  var d=false,i=0;
  var r=function(){
    if (d||(t&&i>=t)) return;
    fn(i,function(){d=true});
    if (p instanceof Array) {
      setTimeout(r,p[i%p.length]);
    }else{
      setTimeout(r,p);
    }
    i+=1;
  };
  r();
  return function(){d=true;};
}
function normalize(array) {
  var n=[];
  array.forEach(function(v){
    n.push(v); n.push(v);
  });
  return n;
}

function sendReport(color,action){
  var builder = analytics.EventBuilder.builder()
    .category('Color')
    .action(action||'Choose')
    .dimension(12,'Color');
    
  tracker.send(builder.label(color));
}
function select(color,ms){
  ms = ms?typeof ms=='number'?ms>=50?ms:50:ms instanceof Array?ms:50:50
  if (loop) loop();
  
  currentColor = color?color instanceof Array?'sequence':color:'off';
  prev = color;
  if (!color) {
    dell.led.turnOff();
  } else if (color instanceof Array) {
    loop = repeat(function(i){
      changeColor(color[i%color.length]);
    },ms);
  } else if (color && color.startsWith('blink ') && color.indexOf('black')!==0 && color.substr(6)) {
    sendReport(uppercase(color.substr(6)),'Blink');
    loop = repeat(function(i){
      if (i%2===0) changeColor(color.substr(6));
      else changeColor('black');
    },ms instanceof Array?normalize(ms):ms);
  } else if (color == 'randomize' || color=='random') {
    loop = repeat(function(i,loop){
      var colors = [];
      for (var k in dell.led.colors) {
        if (k!=='BLACK') colors.push(dell.led.colors[k]);
      }
      changeColor(colors[Math.floor(Math.random()*colors.length)%colors.length]);
      if (color=='random') loop();
    },ms);
    if (color=='random') loop();
  } else if (color == 'rainbow') {
    color = ['red','yellow','green','cyan','blue','magenta'];
    loop = repeat(function(i){
      changeColor(color[i%color.length]);
    },ms);
  } else {
    sendReport(uppercase(color),'Choose');
    changeColor(color);
  }
}

function changeColor(color) {
  if (!dell.led.isOn()) dell.led.turnOn();
  dell.led.changeColor(color);
  $('div.colors input[type=checkbox]').each(function(i,v){
    v.checked = v.name==color;
  });
  $('.speed-slider').toggleClass('red yellow green cyan blue magenta white black',false);
  $('.speed-slider').toggleClass(color||'',true);
  if (color){
    $('img.led-indicator').prop('src','assets/images/glowsticks/'+color+'.png');
  }else{
    $('img.led-indicator').prop('src',def_img);
  }
}

window.onkeydown = function(key){
  switch (key.keyCode){
    case 27: window.close();
      break;
    case 49: if (key.ctrlKey) $('input.led-red').click(); break;
    case 50: if (key.ctrlKey) $('input.led-yellow').click(); break;
    case 51: if (key.ctrlKey) $('input.led-green').click(); break;
    case 52: if (key.ctrlKey) $('input.led-cyan').click(); break;
    case 53: if (key.ctrlKey) $('input.led-blue').click();; break;
    case 54: if (key.ctrlKey) $('input.led-magenta').click(); break;
    case 55: if (key.ctrlKey) $('input.led-white').click(); break;
    case 67: $('#set-custom').click(); break;
    case 66: $('#set-blink').click(); break;
    case 78: $('#set-normal').click();
  }
};

window.onload = function(){
  dell.led.initialize(function(){
    dell.led.turnOn();
  });
  $('img.led-indicator').prop('src',def_img);
  var ver=chrome.runtime.getManifest().version;
  console.info("Dell Rave v%s loaded",ver);
  $('div.app-version').text(ver);

  updateChoices('ul.btn-choice')
  select('random');
};

function updateChoices(){
  $('ul.btn-choice').buttonset({
    items: 'li.btn',
    create: function(){
      $(this).find('li.btn').click(function(e){
        var btn=e.currentTarget,isOn=$(btn).hasClass('button-on');
        $(btn).parent().find('li.button-on').toggleClass('button-on',false);
        if (!isOn){
          $(btn).toggleClass('button-on');
          $(btn).parent().prop('color',$(btn).prop('classList')[1]);
        }else{
          $(btn).parent().prop('color','black');
        }
        selectCustom();
      });
      $(this).find('input.btn.interval').spinner({
        min:0.05,
        max:2.5,
        step:0.05,
        page:5,
        numberFormat:'n2',
        change:function(){selectCustom(); $(this).css('font-weight','bold');},
        start: function(){$(this).css('font-weight','normal');},
        create: function(){$(this).css('font-weight','bold');},
      }).val('1.00');
    }
  });
  $('ul.btn-choice .remove').button({
    icons: {
      primary: 'ui-icon-close'
    },
    text:false,
    label:'Remove Color',
  }).click(function(e){
    if ($('.btn-choice').length>1) $(this).parent().remove();
    $('div#tab-custom button').button('option','disabled',$('.btn-choice').length>=MAX_CHOICES);
  });
}

function uppercase(w){return w.substr(0,1).toUpperCase()+w.substr(1);}

function addChoice(ch){
  var choice="<ul color='' class='btn-choice'><li class='btn red'></li><li class='btn yellow'></li><li class='btn green'></li><li class='btn cyan'></li><li class='btn blue'></li><li class='btn magenta'></li><li class='btn white'></li><input readonly class='btn interval' type='spinner'></input><li class='remove'></li></ul>";
  $('div#tab-custom ul:last-of-type').after(choice);
  updateChoices();
  selectCustom();
}

function selectCustom(){
  if ($('div.colors').prop('mode')!=='custom') return;
  var c=[],t=[];
  $('.btn-choice').each(function(i,v){
    var cr = $(v).prop('color');
    c.push(cr&&cr!==''?cr:'black');
    t.push($(v).find('.ui-spinner input.btn.interval').spinner('value')*1000);
  });
  select(c,t);
}

$(document).ready(function(){
  // Tabs
  $('div.tabs').tabs({
    collapsible:false,
    heightStyle:'content', //fill
    disabled:[2],
    create: function(){
      $(this).find('.ui-tabs-nav').sortable();
    },
    activate: function(e,ui){
      tracker.sendAppView($(ui.newTab).text());
    }
  });
  
  // Tab Modes
  $('div#tab-modes ul.btn-set').buttonset({
    items: 'li',
    create: function(){
      $(this).find('li').click(function(e){
        var btn=e.currentTarget,
            speed=$('.speed-slider').slider('value'),
            color=dell.led._lastSelectedColor;
        $('div.colors').prop('mode',$(btn).find('span.ui-button-text').text().toLowerCase());
        $(btn).parent().find('li.button-on').toggleClass('button-on',false);
        $(btn).toggleClass('button-on');
        switch ($('div.colors').prop('mode')) {
          case 'normal': select(color);
            break;
          case 'blink': select('blink '+color,speed);
            break;
          case 'rainbow': select('rainbow',speed);
            break;
          case 'custom': selectCustom();
            break;
          default: select(color);
        }
        sfx.play();
      });
    }
  });
  $('.speed-slider').slider({
    min: 50,
    max: 500,
    step: 25,
    value: 200,
    range: 'min',
    change: function(e,ui){
      var mode = $('div.colors').prop('mode'),
          color = dell.led._lastSelectedColor;
      if (mode=='blink'||mode=='rainbow') select(prev,ui.value);
    }
  });

  // Add Color Choice
  $('div#tab-custom button').button({
    icons: {
      primary: 'ui-icon-plus'
    },
    text:false,
    label:'Add Color'
  }).click(function(e){
    if ($('.btn-choice').length<MAX_CHOICES) addChoice();
    if ($('.btn-choice').length>=MAX_CHOICES) $(this).button('option','disabled',true)
    //$(e.currentTarget).toggleClass('button-on')
  });
  
  // Checkboxes
  $("div.colors input[type=checkbox]").on("click",function(e){
    var mode = e.target.parentElement.mode;
    if (e.target.checked) {
      switch (mode){
        case 'blink': select('blink '+e.target.name,$('.speed-slider').slider('value'));
          break;
        default: select(e.target.name);
      }
    } else {
      select('black');
    }
    sfx.play();
  });
  
  //Exit Button
  $(".winBtn.winClose").click(function(e) {
    dell.led.exit();
    //window.close();
  });
  $('.winBtn.winMinimize').click(function(e){
    chrome.app.window.current().minimize();
  });
});