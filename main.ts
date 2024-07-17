
// Import statement for sprites.ts
import { Sprites } from "./sprites";

// Initialize pickup (initially null)
let pickup: Sprite = null

// Debug message to confirm game start
game.splash("Game Started!")

// Player paddle movement
controller.moveSprite(Sprites.player, 0, 100)

// Event handler for when pickup is touched by a paddle
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function(sprite: Sprite, otherSprite: Sprite) {
    if (otherSprite === pickup) {
        // Hide the pickup
        otherSprite.destroy()

        // Temporarily replace player or AI paddle image with a larger version
        if (sprite.kind() === SpriteKind.Player) {
            // Player paddle
            Sprites.player.setImage(img`
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
            Sprites.ai.setImage(img`
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
            Sprites.player.setImage(img`
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
            Sprites.ai.setImage(img`
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
    Sprites.ai.y = Sprites.ball.y

    // Ball collision with player paddle
    if (Sprites.ball.overlapsWith(Sprites.player)) {
        Sprites.ball.vx = Sprites.ball.vx * -1
    }

    // Ball collision with AI paddle
    if (Sprites.ball.overlapsWith(Sprites.ai)) {
        Sprites.ball.vx = Sprites.ball.vx * -1
    }

    // Check for scoring
    if (Sprites.ball.x <= 0) {
        // AI scores
        info.changeScoreBy(1)
        Sprites.ball.setPosition(80, 60)
        Sprites.ball.setVelocity(50, 50)
    } else if (Sprites.ball.x >= 160) {
        // Player scores
        info.changeScoreBy(-1)
        Sprites.ball.setPosition(80, 60)
        Sprites.ball.setVelocity(-50, -50)
    }
})
