import { Stage, Container, AnimatedSprite } from '@pixi/react';

export const AnimatedSpriteComponent = () =>
{
  const alienImages = [
    'https://pixijs.io/pixi-react/img/bunny.png',
    'https://pixijs.io/pixi-react/img/coin.png',
  ];

  return (
    <Stage width={300} height={300} options={{ backgroundColor: 0xeef1f5 }}>
      <Container position={[150, 150]}>
        <AnimatedSprite
          anchor={0.5}
          textures={alienImages}
          isPlaying={true}
          initialFrame={0}
          animationSpeed={0.1}
        />
      </Container>
    </Stage>
  );
}
