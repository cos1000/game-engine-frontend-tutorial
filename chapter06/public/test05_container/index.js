let app = new PIXI.Application({ 
  // https://pixijs.download/release/docs/PIXI.settings.html
  width: window.innerWidth, 
  height: window.innerHeight, 
  antialias: true, // 反鋸齒
  transparent: true, // 透明度
  resolution: 1, // 分辨率 
  //backgroundColor: 0x00ff00, 
  autoResize: true, 
});

document.body.appendChild(app.view);

window.onresize = function (event){
  app.renderer.resize(window.innerWidth,window.innerHeight);
};

const particleContainer = new PIXI.ParticleContainer(10000, {
  scale: true,
  position: true,
  rotation: true,
  uvs: true,
  alpha: true,
});
app.stage.addChild(particleContainer);

const container = new PIXI.Container();
app.stage.addChild(container);


//app.ticker.add(createSprite); 
createSprite(); 

function createSprite() {
  const sample = PIXI.Sprite.from("sample.png");
  sample.anchor.set(0.5);
  sample.scale.set(0.8 + Math.random() * 0.3);
  sample.x = 0;
  sample.y = 0;
  sample.blendMode = PIXI.BLEND_MODES.ADD;
  sample.direction = Math.random() * Math.PI * 2;
  sample.turningSpeed = Math.random() - 0.8;
  sample.speed = 2 + Math.random() * 2;
  container.addChild(sample);  
  container.rotation = 45;
  container.x = 100;
  container.y = 100;
  //particleContainer.addChild(sample); 
}
