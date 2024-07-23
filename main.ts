 // Rest of the code...
//namespace GameUtilities {
/*

    function stretchSprite(sprite: Sprite, newWidth: number, newHeight: number) {
        let stretchedImage = image.create(newWidth, newHeight);
        for (let x = 0; x < newWidth; x++) {
            for (let y = 0; y < newHeight; y++) {
                let origX = Math.floor(x * sprite.image.width / newWidth);
                let origY = Math.floor(y * sprite.image.height / newHeight);
                stretchedImage.setPixel(x, y, sprite.image.getPixel(origX, origY));
            }
        }
        sprite.setImage(stretchedImage);
    }


    // Placeholder for adjusting ball speed
    function adjustBallSpeed(ball: Sprite, speedMultiplier: number) {
        // Implementation depends on your game's logic for ball movement
        // This could involve adjusting a speed variable or directly manipulating movement vectors
    
    }



    // Placeholder for adjusting bat speed
    // Placeholder for adjusting bat speed
    function adjustBatSpeed(bat: Sprite, speedMultiplier: number) {
        // Similar to adjustBallSpeed, implement based on how bat movement is controlled
    }

//}

*/
//import { PongNamespace } from "./PowerUp";



    // Initialize player paddle
    let player = sprites.create(assets.image`PlayerPaddle`, SpriteKind.Player)
    player.setPosition(10, 60)

    // Initialize AI paddle
    let ai = sprites.create(assets.image`AiPaddle`, SpriteKind.Enemy)
    ai.setPosition(150, 60)

    let ball = sprites.create(assets.image`Ball`, SpriteKind.Projectile)
    ball.setPosition(80, 60)
    ball.setVelocity(50, 50)
    ball.setFlag(SpriteFlag.BounceOnWall, true)

    //game.splash("Game Started!")

    controller.moveSprite(player, 0, 100)

    // Function to handle power-up effects
    /*function handlePowerUp(powerUp: PowerUp, player: Sprite, ball: Sprite) {
            console.log(powerUp.toString());
        } */




    // Game loop
let lastSpawnTime = game.runtime()
    
    game.onUpdate(function () {
        // Check if 60 seconds have passed since the last spawn
        if (game.runtime() - lastSpawnTime > 5000) {
            PowerUp.spawnPowerUp();
            lastSpawnTime = game.runtime()

        }


        // AI paddle follows the ball
        ai.y = ball.y

        // Ball collision with player paddle
        if (ball.overlapsWith(player)) {
            ball.vx = ball.vx * -1
        }

        // Ball collision with AI paddle
        if (ball.overlapsWith(ai)) {
            ball.vx = ball.vx * -1
        }

        // Check for scoring
        if (ball.x <= 0) {
            info.changeScoreBy(1)
            ball.setPosition(80, 60)
            ball.setVelocity(50, 50)
        } else if (ball.x >= 160) {
            info.changeScoreBy(-1)
            ball.setPosition(80, 60)
            ball.setVelocity(-50, -50)
        }
    })
