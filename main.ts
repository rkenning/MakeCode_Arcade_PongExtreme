// Initialize player paddle
let player = sprites.create(img`
    1 1 
    1 1 
    1 1 
    1 1 
    1 1 
    1 1 
    1 1 
    1 1 
    1 1
`, SpriteKind.Player)
player.setPosition(10, 60)

// Initialize AI paddle
let ai = sprites.create(img`
    1 1 
    1 1 
    1 1 
    1 1 
    1 1 
    1 1 
    1 1 
    1 1 
    1 1
`, SpriteKind.Enemy)
ai.setPosition(150, 60)

// Initialize ball
let ball = sprites.create(img`
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
`, SpriteKind.Projectile)
ball.setPosition(80, 60)
ball.setVelocity(50, 50)
ball.setFlag(SpriteFlag.BounceOnWall, true)

// Initialize pickup (initially null)
let pickup: Sprite = null

// Debug message to confirm game start
game.splash("Game Started!")

// Player paddle movement
controller.moveSprite(player, 0, 100)

// Event handler for when pickup is touched by a paddle
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function(sprite: Sprite, otherSprite: Sprite) {
    if (otherSprite === pickup) {
        // Hide the pickup
        otherSprite.destroy()

        // Temporarily replace player or AI paddle image with a larger version
        if (sprite.kind() === SpriteKind.Player) {
            // Player paddle
            player.setImage(img`
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
            `)
        } else if (sprite.kind() === SpriteKind.Enemy) {
            // AI paddle
            ai.setImage(img`
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
            `)
        }

        // Flash red for 3 seconds
        for (let i = 0; i < 6; i++) {
            sprite.setFlag(SpriteFlag.Invisible, true)
            pause(250)
            sprite.setFlag(SpriteFlag.Invisible, false)
            pause(250)
        }

        // Revert to the original image
        if (sprite.kind() === SpriteKind.Player) {
            // Player paddle
            player.setImage(img`
                1 1 
                1 1 
                1 1 
                1 1 
                1 1 
                1 1 
                1 1 
                1 1 
                1 1
            `)
        } else if (sprite.kind() === SpriteKind.Enemy) {
            // AI paddle
            ai.setImage(img`
                1 1 
                1 1 
                1 1 
                1 1 
                1 1 
                1 1 
                1 1 
                1 1 
                1 1
            `)
        }
    }
})

// Game loop
let lastSpawnTime = game.runtime()
game.onUpdate(function () {
    // Check if 60 seconds have passed since the last spawn
    if (game.runtime() - lastSpawnTime > 10000) {
        // Spawn a pickup at a random position within the game screen
        let x = Math.randomRange(10, 150)
        let y = Math.randomRange(10, 110)
        
        // Destroy previous pickup if it exists
        if (pickup) {
            pickup.destroy()
        }
        
        // Create new pickup
        pickup = sprites.create(img`
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 2 2 1 1 1 
            1 1 1 2 2 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
        `, SpriteKind.Food)
        pickup.setPosition(x, y)
        pickup.setVelocity(30, 30)
        pickup.setFlag(SpriteFlag.BounceOnWall, true)
        
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
})
