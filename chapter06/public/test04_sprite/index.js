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

PIXI.Assets.load("character.json").then(createSprite);
const frames = ["main01.png", "main02.png", "main03.png"]; 

//app.ticker.add(createSprite); 
createSprite(); 

function createSprite() {
  frames.forEach(element => {
    const sample = PIXI.Sprite.from(element);
    sample.anchor.set(0.5);
    sample.scale.set(0.8 + Math.random() * 0.3);
    sample.x = Math.floor(Math.random() * app.screen.width);
    sample.y = Math.floor(Math.random() * app.screen.height);
    sample.blendMode = PIXI.BLEND_MODES.ADD;
    sample.direction = Math.random() * Math.PI * 2;
    sample.turningSpeed = Math.random() - 0.8;
    sample.speed = 2 + Math.random() * 2;
    app.stage.addChild(sample);        
  });
}
