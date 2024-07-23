

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

        constructor(img: Image, ani: Image[] ,type: PowerupKind,  duration: number = 10000) {
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
            
            animation.runImageAnimation(
                this,
                ani,
                500,
                true
            ); 

        }

    }







    // Create a function to spawn a new power-up
    export function spawnPowerUp(){
        // Add opening curly brace here
        // select a random power-up kind
        let randomPowerUp = Math.randomRange(0, 2);
        let img: Image; // Placeholder for the image associated with the power-up
        let ani: Image[] // Placeholder for the animation associated with the power-
        let type: PowerupKind; // Placeholder for the power-up type
    
        // Assuming PowerupKind is an enum with values corresponding to 0, 1, 2, etc.
        // You need to define or adjust the logic to select the appropriate image and type based on randomPowerUp
        console.log(randomPowerUp)
        switch (randomPowerUp) {
            case 0:
                img = assets.image`PowerUpBatLength`; // Replace `PowerUpImage1` with the actual image name
                ani = assets.animation`PowerUpBatSizeAnim`,
                type = PowerupKind.PowerUpBatLength; // Replace `Type1` with the actual enum value
                break;
            case 1:
                img = assets.image`PowerUpBatSpeed`; // Replace `PowerUpImage2` with the actual image name
                ani = assets.animation`PowerUpBatSpeedAnim`,
                type = PowerupKind.PowerUpBatSpeed; // Replace `Type2` with the actual enum value
                break;
            case 2:
                img = assets.image`PowerUpBallSpeed`; // Replace `PowerUpImage3` with the actual image name
                ani = assets.animation`PowerUpBallSpeedAnim`,
                type = PowerupKind.PowerUpBallSpeed; // Replace `Type3` with the actual enum value
                break;
            default:
                img = assets.image`PowerUpBatLength`; // Replace `PowerUpImage1` with the actual image name
                ani = assets.animation`PowerUpBatSizeAnim`,
                type = PowerupKind.PowerUpBatLength; // Replace `Type1` with the actual enum value
                break; // Exit the function if the power-up kind is not recognized
        }
        let powerup = new PowerUp(img,ani, type, 10000); // Duration is set to 10000 milliseconds (10 seconds) by default

    }
        
  
    


     export function WriteAllPowerUps() {
         for (let powerUp of sprites.allOfKind(SpriteKind.Projectile)) {
             console.log(powerUp.toString());
         };
     }
}




