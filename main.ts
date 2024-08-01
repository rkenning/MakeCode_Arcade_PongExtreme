 


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

    let screenoffset = 10
    let screenheight = screen.height + screenoffset

    let lastSpawnTime = game.runtime()

    // Initialize lives
    info.setLife(5)


game.onUpdate(function () {
    // Check if 60 seconds have passed since the last spawn
    if (game.runtime() - lastSpawnTime > 500) {
        PowerUpNameSpace.spawnPowerUp();
        lastSpawnTime = game.runtime();
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


    // Limit AI paddle to the top and bottom of the screen
    if (ai.y < 0) {
        ai.y = 0;
    } else if (ai.y > screenheight - ai.height) {
        ai.y = screenheight - ai.height;
    }

    // Limit player paddle to the top and bottom of the screen
    
    if (player.y < 0) {
        player.y = 0;
  } else if (player.y > screenheight - player.height) {
        player.y = screenheight - player.height;
    }

    // Ball collision with player paddle
    if (ball.overlapsWith(player)) {
        console.log("Ball Overlaps with Player")
        ball.vx = ball.vx * -1;
    }

    // Ball collision with AI paddle
    if (ball.overlapsWith(ai)) {
        console.log("Ball Overlaps with AI")
        ball.vx = ball.vx * -1;
    }

    // Check for scoring
    if (ball.x <= 1) {
        info.changeLifeBy(-1);
        ball.setPosition(80, 60);
        ball.setVelocity(50, 50);
    } else if (ball.x >= 160) {
        info.changeScoreBy(1);
        ball.setPosition(80, 60);
        ball.setVelocity(-50, -50);
    }

    // Add the score check here
    if (info.score() > 100) {
        game.over(true, effects.confetti); // Use an appropriate effect
    }

    // Check for game over based on lives
    if (info.life() <= 0) {
        game.over(false, effects.dissolve); // Use an appropriate effect
    }
});    // Game loop

    
 