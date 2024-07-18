// Function to stretch the sprite
function stretchSprite(sprite: Sprite, newWidth: number, newHeight: number) {
    // Create a new image with the desired dimensions
    let stretchedImage = image.create(newWidth, newHeight);
    
    // Copy the original image into the new image, stretching it
    for (let x = 0; x < newWidth; x++) {
        for (let y = 0; y < newHeight; y++) {
            // Map the new coordinates to the original image coordinates
            let origX = Math.floor(x * sprite.image.width / newWidth);
            let origY = Math.floor(y * sprite.image.height / newHeight);
            // Set the pixel color in the new image based on the original image
            stretchedImage.setPixel(x, y, sprite.image.getPixel(origX, origY));
        }
    }

    // Set the sprite's image to the stretched image
    sprite.setImage(stretchedImage);
}




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


// Debug message to confirm game start
game.splash("Game Started!")

// Player paddle movement
controller.moveSprite(player, 0, 100)

// Event handler for when PowerUpBat is touched by a paddle
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function(sprite: Sprite, otherSprite: Sprite) {
    if (otherSprite === PowerUpBat) {
        // Hide the PowerUpBat
        otherSprite.destroy()

        stretchSprite(player, player.image.width, player.image.height * 2);

        // Flash red for 3 seconds
        for (let i = 0; i < 12; i++) {
            sprite.setFlag(SpriteFlag.Invisible, true)
            pause(150)
            sprite.setFlag(SpriteFlag.Invisible, false)
            pause(350)
        }

        stretchSprite(player, player.image.width, player.image.height * 2);

        player.setImage(assets.image`PlayerPaddle`)

    }
})


//Set up powerup animation and initialise sprite as hidden
let PowerUpBadAnimation = assets.animation('PowerUpBat') 
let PowerUpBat = sprites.create(img`.`, SpriteKind.Food);
PowerUpBat.setFlag(SpriteFlag.Invisible,true)



// Game loop
let lastSpawnTime = game.runtime()
game.onUpdate(function () {
    // Check if 60 seconds have passed since the last spawn
    if (game.runtime() - lastSpawnTime > 10000) {
        // Spawn a PowerUpBat at a random position within the game screen
        let x = Math.randomRange(10, 150)
        let y = Math.randomRange(10, 110)
        
        // Destroy previous PowerUpBat if it exists
        if (PowerUpBat) {
            PowerUpBat.destroy()
        }
        
        // Create new PowerUpBat
        PowerUpBat = sprites.create(img`.`, SpriteKind.Food);
        //PowerUpBat = sprites.create(assets.animation('PowerUpBat') , SpriteKind.Food)
        PowerUpBat.setPosition(x, y)
        PowerUpBat.setVelocity(30, 30)
        PowerUpBat.setFlag(SpriteFlag.BounceOnWall, true)
        
        // Update the last spawn time to the current time
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
        // AI scores
        info.changeScoreBy(1)
        ball.setPosition(80, 60)
        ball.setVelocity(50, 50)
    } else if (ball.x >= 160) {
        // Player scores
        info.changeScoreBy(-1)
        ball.setPosition(80, 60)
        ball.setVelocity(-50, -50)
    }



    // Run animations
    // Run the animation on the food sprite
     animation.runImageAnimation(
         PowerUpBat,
         assets.animation`PowerUpBat`,
         100,
         true
     );


})
