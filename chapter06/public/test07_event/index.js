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

function createSprite() {
  PIXI.Assets.load("sample.png").then((texture) => {
    const plane = new PIXI.SimplePlane(texture, 10, 10); 
    plane.x = 10; 
    plane.y = 10; 
    app.stage.addChild(plane); 
    const buffer = plane.geometry.getBuffer('aVertexPosition');
    let timer = 0;
    let enableEffect = true;
    app.ticker.add(() =>
    {
      if (enableEffect)
      {
        // Randomize the vertice positions a bit to create movement.
        for (let i = 0; i < buffer.data.length; i++)
        {
            buffer.data[i] += Math.sin((timer / 10) + i) * 0.5;
        }
        buffer.update();
        timer++;
      }
    });
    plane.eventMode = 'static'; 
    plane.addListener('pointerdown', () => { enableEffect = !enableEffect; });
  }); 

}
