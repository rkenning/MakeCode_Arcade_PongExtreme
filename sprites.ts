// sprites.ts

namespace Sprites {
    // Define player paddle
    export const player = sprites.create(img`
        1 1 
        1 1 
        1 1 
        1 1 
        1 1 
        1 1 
        1 1 
        1 1 
        1 1
    `, SpriteKind.Player);
    player.setPosition(10, 60);

    // Define AI paddle
    export const ai = sprites.create(img`
        1 1 
        1 1 
        1 1 
        1 1 
        1 1 
        1 1 
        1 1 
        1 1 
        1 1
    `, SpriteKind.Enemy);
    ai.setPosition(150, 60);

    // Define ball
    export const ball = sprites.create(img`
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
    `, SpriteKind.Projectile);
    ball.setPosition(80, 60);
    ball.setVelocity(50, 50);
    ball.setFlag(SpriteFlag.BounceOnWall, true);
}
