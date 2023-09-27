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


//app.ticker.add(createSprite); 
createSprite(); 
createSprite2();
createSprite3();

function createSprite() {
  const sample = PIXI.Sprite.from("sample.png");
  sample.anchor.set(0.5);
  sample.scale.set(0.8 + Math.random() * 0.3);
  sample.x = Math.floor(Math.random() * app.screen.width);
  sample.y = Math.floor(Math.random() * app.screen.height);
  sample.blendMode = PIXI.BLEND_MODES.ADD;
  sample.direction = Math.random() * Math.PI * 2;
  sample.turningSpeed = Math.random() - 0.8;
  sample.speed = 2 + Math.random() * 2;
  sample.tint = Math.random() * 0xFFFFFF;
  app.stage.addChild(sample);  
}

function createSprite2() {
  PIXI.Assets.load("sample.png").then((texture) => {
    const plane = new PIXI.SimplePlane(texture, 10, 10); 
    plane.x = 1000; 
    plane.y = 10; 
    app.stage.addChild(plane); 
    const buffer = plane.geometry.getBuffer('aVertexPosition');
    let timer = 0;
    app.ticker.add(() =>
    {
        // Randomize the vertice positions a bit to create movement.
        for (let i = 0; i < buffer.data.length; i++)
        {
            buffer.data[i] += Math.sin((timer / 10) + i) * 0.5;
        }
        buffer.update();
        timer++;
    });
  }); 
}

function createSprite3() {
  const { width, height } = app.screen; 
  const stageSize = { width, height };
  const sample = PIXI.Sprite.from("sample.png");
  const sample2 = PIXI.Sprite.from("sample2.png");
  const renderTexture = PIXI.RenderTexture.create(stageSize); 
  const renderTextureSprite = new PIXI.Sprite(renderTexture); 
  sample2.mask = renderTextureSprite;
  app.stage.addChild(sample, sample2, renderTextureSprite);  
  app.stage.eventMode = 'static';
  app.stage.on('pointermove', pointerMove); 

  const brush = new PIXI.Graphics().beginFill(0xffffff).drawCircle(0, 0, 50);
  let oldX = 0;
  let oldY = 0; 
  function pointerMove({ global: {x, y}})
  {
    brush.position.set(x, y); 
    app.renderer.render(brush, { renderTexture, clear: false, skipUpdateTransform: false}); 
    brush.position.set(oldX, oldY); 
    app.renderer.render(brush, { renderTexture, clear: true, skipUpdateTransform: false}); 
    oldX = x;
    oldY = y; 
  }

}

