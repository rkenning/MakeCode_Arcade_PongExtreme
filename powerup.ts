

    // Assuming the context of the PowerUp class and related functionality
    // Define or adjust the PowerUp class and related functions within the GameLogic namespace
namespace PowerUp

{

    export enum PowerupKind {
        PowerUpBatLength,
        PowerUpBatSpeed,
        PowerUpBallSpeed
    }

    export class PowerUp extends Sprite {
        type: typeof SpriteKind.Projectile;
        duration: number;

        constructor(img: Image, type: PowerupKind, duration: number = 10000) {
            super(img);
            this.duration = duration;
            // Set a random velocity for x and y between -50 and 50, excluding 0
            const velocityX = Math.random() * 100 - 50 || 10; // Ensures non-zero velocity, defaults to 10 if 0
            const velocityY = Math.random() * 100 - 50 || 10; // Ensures non-zero velocity, defaults to 10 if 0
            //super.setVelocity(velocityX, velocityY);
            super.setVelocity(velocityX, velocityY)
            super.setPosition(50, 50);
            super.setFlag(SpriteFlag.BounceOnWall, true)
            super.setKind(SpriteKind.Projectile);
            
            // You need this to ad physics to the object            
            const scene = game.currentScene();
            scene.physicsEngine.addSprite(this);
            

        }

    }

    // Create a function to spawn a new power-up
    export function spawnPowerUp(){
        // Add opening curly brace here
        // select a random power-up kind
        let randomPowerUp = Math.randomRange(0, 2);
        let powerup: PowerUp;
        switch(randomPowerUp){
            case 0:
                powerup = new PowerUp(assets.image`PowerUpBatSize`, PowerupKind.PowerUpBatLength);
                // Run the animation on the power-up bat sprite
                animation.runImageAnimation(
                    powerup,
                    assets.animation`PowerUpBatSizeAnim`,
                    500,
                    true
                );
                break;
            case 1:
                powerup = new PowerUp(assets.image`PowerUpBatSpeed`, PowerupKind.PowerUpBatSpeed);
                  // Run the animation on the power-up Bat Speed sprite
                  animation.runImageAnimation(
                    powerup,
                    assets.animation`PowerUpBatSpeedAnim`,
                    500,
                    true
                );
                break;
            case 2:
                powerup = new PowerUp(assets.image`PowerUpBallSpeed`, PowerupKind.PowerUpBallSpeed);
                // Run the animation on the power-up Ball Speed sprite
                animation.runImageAnimation(
                    powerup,
                    assets.animation`PowerUpBallSpeedAnim`,
                    500,
                    true
                );
                break;
        }

    }
        
        let powerup = new PowerUp(assets.image`PowerUpBat`, PowerupKind.PowerUpBatLength);

        // Run the animation on the power-up sprite
        animation.runImageAnimation(
            powerup,
            assets.animation`PowerUpBat`,
            500,
            true
        );        
    


    // export function WriteAllPowerUps() {
    //     for (let powerUp of sprites.allOfKind(SpriteKind.Projectile)) {
    //         console.log(powerUp.toString());
    //     };
    // }
}




