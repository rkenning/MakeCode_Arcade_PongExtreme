 


    let ballvelocity = 20



    // Initialize player paddle
    let player = sprites.create(assets.image`PlayerPaddle`, SpriteKind.Player)
    player.setPosition(10, 60)

    // Initialize AI paddle
    let ai = sprites.create(assets.image`AiPaddle`, SpriteKind.Enemy)
    ai.setPosition(150, 60)

    let ball = sprites.create(assets.image`Ball`, SpriteKind.Projectile)
    ball.setPosition(80, 60)
    ball.setVelocity(ballvelocity, ballvelocity)
    
    ball.setFlag(SpriteFlag.BounceOnWall, true)

    //game.splash("Game Started!")

    controller.moveSprite(player, 0, 100)





    // Game loop
let lastSpawnTime = game.runtime()
    
    game.onUpdate(function () {
        // Check if 60 seconds have passed since the last spawn
        if (game.runtime() - lastSpawnTime > 5000) {
            PowerUpNameSpace.spawnPowerUp();
            //PowerUpNameSpace.WriteAllPowerUps();
            lastSpawnTime = game.runtime()
            
        }


    // Define maximum speed for AI paddle movement
    let maxSpeed = 1; // Adjust this value as needed

    // Calculate the difference in y position between the ball and the AI paddle
    let deltaY = ball.y - ai.y;

    // Limit the deltaY to the maxSpeed to avoid moving too fast
    if (deltaY > maxSpeed) {
        deltaY = maxSpeed;
    } else if (deltaY < -maxSpeed) {
        deltaY = -maxSpeed;
    }

    // Update the AI paddle's position
    ai.y += deltaY;

        
        

        // Ball collision with player paddle
        if (ball.overlapsWith(player)) {
            ball.vx = ball.vx * -1
        }

        // Ball collision with AI paddle
        if (ball.overlapsWith(ai)) {
            ball.vx = ball.vx * -1
        }

        // Check for scoring
        if (ball.x <= 1) {
            info.changeScoreBy(-1)
            ball.setPosition(80, 60)
            ball.setVelocity(50, 50)
        } else if (ball.x >= 160) {
            info.changeScoreBy(1)
            ball.setPosition(80, 60)
            ball.setVelocity(-50, -50)
        }
   
   
   
       // Add the score check here
        if (info.score() < -5) {
            game.over(false, effects.dissolve) // Use an appropriate effect
        }
        if (info.score() > 5) {
            game.over(true, effects.confetti) // Use an appropriate effect
        }
   
   
    })
