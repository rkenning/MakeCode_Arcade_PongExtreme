

    // Assuming the context of the PowerUp class and related functionality
    // Define or adjust the PowerUp class and related functions within the GameLogic namespace
namespace PowerUpNameSpace


{

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


    export enum SpriteKind {
        Player,
        ai,
        PowerUpBatLength,
        PowerUpBatSpeed,
        PowerUpBallSpeed,
        PowerUpNewBall,
        Projectile
        
    }




    export class PowerUp extends Sprite {
        duration: number;

        constructor(img: Image, ani: Image[] ,type: SpriteKind,  duration: number = 10000) {
            super(img);
            this.duration = duration;
            // Set a random velocity for x and y between -50 and 50, excluding 0
            const velocityX = Math.random() * 100 - 50 || 10; // Ensures non-zero velocity, defaults to 10 if 0
            const velocityY = Math.random() * 100 - 50 || 10; // Ensures non-zero velocity, defaults to 10 if 0
            //super.setVelocity(velocityX, velocityY);
            super.setVelocity(velocityX, velocityY)
            super.setPosition(50, 50);
            super.setFlag(SpriteFlag.BounceOnWall, true)
            super.setKind(type);
            //super.setKind(SpriteKind.Projectile);
            
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
    export function spawnPowerUp() {
        // Add opening curly brace here
        // select a random power-up kind
        let randomPowerUp = Math.randomRange(0, 3);
        let img: Image; // Placeholder for the image associated with the power-up
        let ani: Image[] // Placeholder for the animation associated with the power-
        let type: SpriteKind; // Placeholder for the power-up type
    
        // Assuming PowerupKind is an enum with values corresponding to 0, 1, 2, etc.
        // You need to define or adjust the logic to select the appropriate image and type based on randomPowerUp
        switch (randomPowerUp) {
            case 0:
                img = assets.image`PowerUpBatLength`; // Replace `PowerUpImage1` with the actual image name
                ani = assets.animation`PowerUpBatSizeAnim`,
                    type = SpriteKind.PowerUpBatLength; // Replace `Type1` with the actual enum value
                break;
            case 1:
                img = assets.image`PowerUpBatSpeed`; // Replace `PowerUpImage2` with the actual image name
                ani = assets.animation`PowerUpBatSpeedAnim`,
                    type = SpriteKind.PowerUpBatSpeed; // Replace `Type2` with the actual enum value
                break;
            case 2:
                img = assets.image`PowerUpBallSpeed`; // Replace `PowerUpImage3` with the actual image name
                ani = assets.animation`PowerUpBallSpeedAnim`,
                    type = SpriteKind.PowerUpBallSpeed; // Replace `Type3` with the actual enum value
                break;
            case 3:
                img = assets.image`PowerUpNewBall`; // Replace `PowerUpImage3` with the actual image name
                ani = assets.animation`PowerUpNewBallAnim`,
                    type = SpriteKind.PowerUpNewBall; // Replace `Type3` with the actual enum value
                break;

            default:
                img = assets.image`PowerUpBatLength`; // Replace `PowerUpImage1` with the actual image name
                ani = assets.animation`PowerUpBatSizeAnim`,
                    type = SpriteKind.PowerUpBatLength; // Replace `Type1` with the actual enum value
                break; // Exit the function if the power-up kind is not recognized
        }
        let powerup = new PowerUp(img, ani, type, 10000); // Duration is set to 10000 milliseconds (10 seconds) by default

    
    }
  
        //Method to mange the processing of the powerup collisions
        export function processPowerup(sourcesprite: Sprite, powerup: Sprite) {
            
            //Console log the type of both sprites
            console.log("Source Sprite Kind (P): " + sourcesprite.kind() + " PowerUp Sprite Kind: " + powerup.kind());

            //Check if the sprite is a player or enemy
            if (sourcesprite.kind() == SpriteKind.Player) {
                console.log("Player hit by PowerUp");
            }
            else {
                console.log("Enemy hit by PowerUp");
            }
        
            //Check the type of powerup
            switch (powerup.kind()) {
                case SpriteKind.PowerUpBatLength:
                // Extend the bat length
                stretchSprite(sourcesprite, sourcesprite.width, sourcesprite.height + 10);
    
                    // Set a timer to revert the bat size after 10 seconds
                    setTimeout(() => {
                    // Assuming stretchSprite can also be used to revert to original size
                    // You might need to adjust the parameters according to your original bat size
                        stretchSprite(sourcesprite, sourcesprite.width, sourcesprite.height - 10);
                    }, 10000); // 10000 milliseconds = 10 seconds
                    break;
                case SpriteKind.PowerUpBatSpeed:
                    //adjustBatSpeed(sourcesprite, 1.5);
                    
                    break;
                case SpriteKind.PowerUpBallSpeed:
                    ball.setVelocity( ball.vx*1.2,  ball.vy*1.2);
                    console.log("Ball Speed : " + ball.vx + " " + ball.vy);
                    break;
                default:
                    break;
            }


            //Check the type of powerup

        }

    //Method to adjust the ball speed



// Function to spawn an additional ball
export function spawnAdditionalBall() {
    let ball = sprites.create(assets.image`Ball`, SpriteKind.Projectile)
    ball.setPosition(80, 60)
    ball.setVelocity(50, 50)
    ball.setFlag(SpriteFlag.BounceOnWall, true)
}
}
