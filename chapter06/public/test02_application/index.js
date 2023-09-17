let app = new PIXI.Application({ 
  // https://pixijs.download/release/docs/PIXI.settings.html
  width: window.innerWidth, 
  height: window.innerHeight, 
  antialias: true, // 反鋸齒
  transparent: true, // 透明度
  resolution: 1, // 分辨率 
  backgroundColor: 0x00ff00, 
  autoResize: true, 
});

document.body.appendChild(app.view);

window.onresize = function (event){
  app.renderer.resize(window.innerWidth,window.innerHeight);
};

