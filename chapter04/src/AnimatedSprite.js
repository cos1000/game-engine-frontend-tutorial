import { Stage, Container, AnimatedSprite } from '@pixi/react';
import React from 'react';
import {Texture, Assets } from 'pixi.js';
import * as PIXI from 'pixi.js';

export const AnimatedSpriteComponent = () =>
{
  const [frames, setFrames] = React.useState([]);
  const spriteSheet = "./img/Characters.json";

  React.useEffect(() => {
    const sheets = Assets.load(spriteSheet).then() {
      const spriteSheetObj = new PIXI.spritesheetAsset(PIXI.BaseTexture.from(sheets.meta.image), sheets);
      setFrames(
        Object.keys(sheets.frames).map(frame => Texture.from(frame))
      );  
    };
    /*
    loader.add(spriteSheet).load((_, resource) => {
      setFrames(
        Object.keys(resource[spriteSheet].data.frames).map(frame =>
          Texture.from(frame)
        )
      );
    });
    */
  }, []);

  return (
    <Stage width={300} height={300} options={{ backgroundColor: 0xeef1f5 }}>
      <Container position={[150, 150]}>
        <AnimatedSprite
          anchor={0.5}
          textures={frames}
          isPlaying={true}
          initialFrame={0}
          animationSpeed={0.1}
        />
      </Container>
    </Stage>
  );
}
