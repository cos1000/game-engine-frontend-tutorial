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

const style = new PIXI.TextStyle({
  fontFamily: 'Arial',
  fontSize: 36,
  fontStyle: 'italic',
  fontWeight: 'bold',
  fill: ['#ffffff', '#00ff99'], // gradient
  stroke: '#4a1850',
  strokeThickness: 5,
  dropShadow: true,
  dropShadowColor: '#000000',
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
  wordWrap: true,
  wordWrapWidth: 440,
});

const SYMBOL_SIZE = 150;
const margin = (app.screen.height - SYMBOL_SIZE * 3) / 2;

const bottom = new PIXI.Graphics();
bottom.beginFill(0, 1);
bottom.drawRect(0, SYMBOL_SIZE * 3 + margin, app.screen.width, margin);
bottom.eventMode = 'static';
bottom.cursor = 'pointer';
bottom.addListener('pointerdown', () => { startPlay(); });
app.stage.addChild(bottom);

const playText = new PIXI.Text('Spin the wheels! 我', style);
playText.x = Math.round((bottom.width - playText.width) / 2);
playText.y = app.screen.height - margin + Math.round((margin - playText.height) / 2);
bottom.addChild(playText);

