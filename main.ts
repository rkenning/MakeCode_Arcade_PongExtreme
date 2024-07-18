// Function to stretch the sprite
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

game.splash("Game Started!")

controller.moveSprite(player, 0, 100)

// Function to handle power-up effects
function handlePowerUp(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()

    stretchSprite(sprite, sprite.image.width, sprite.image.height * 2);

    for (let i = 0; i < 12; i++) {
        sprite.setFlag(SpriteFlag.Invisible, true)
        pause(150)
        sprite.setFlag(SpriteFlag.Invisible, false)
        pause(350)
    }

    stretchSprite(sprite, sprite.image.width, sprite.image.height / 2);
    if (sprite.kind() == SpriteKind.Player) {
        sprite.setImage(assets.image`PlayerPaddle`)
    } else if (sprite.kind() == SpriteKind.Enemy) {
        sprite.setImage(assets.image`AiPaddle`)
    }
}

// Event handlers for when PowerUpBat is touched by a paddle
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite: Sprite, otherSprite: Sprite) {
    handlePowerUp(sprite, otherSprite)
})

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite: Sprite, otherSprite: Sprite) {
    handlePowerUp(sprite, otherSprite)
})

// Create a function to spawn a new power-up
function spawnPowerUp() {
    let x = Math.randomRange(10, 150)
    let y = Math.randomRange(10, 110)
    let powerUp = sprites.create(assets.image`PowerUpBat`, SpriteKind.Food)
    powerUp.setPosition(x, y)
    powerUp.setVelocity(30, 30)
    powerUp.setFlag(SpriteFlag.BounceOnWall, true)

    // Run the animation on the power-up sprite
    animation.runImageAnimation(
        powerUp,
        assets.animation`PowerUpBat`,
        500,
        true
    )
}

// Game loop
let lastSpawnTime = game.runtime()
game.onUpdate(function () {
    // Check if 60 seconds have passed since the last spawn
    if (game.runtime() - lastSpawnTime > 5000) {
        spawnPowerUp()
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
