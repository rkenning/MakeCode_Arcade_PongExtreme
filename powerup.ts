

    // Assuming the context of the PowerUp class and related functionality
    // Define or adjust the PowerUp class and related functions within the GameLogic namespace
namespace PowerUp {
    export enum PowerupKind {
        PowerUpBatLength,
        PowerUpBatSpeed,
        PowerUpBallSpeed
    }

    export class PowerUp extends Sprite {
        type: PowerupKind;
        isActive: boolean;
        duration: number;

        constructor(img: Image, type: PowerupKind, duration: number = 10000) {
            super(img);
            this.type = type;
            this.isActive = false;
            this.duration = duration;
            this.setVelocity(10, 10);
            this.setPosition(10, 10);
            this.setBounceOnWall(true);
        }

        activate() {
            this.isActive = true;
            game.onUpdateInterval(this.duration, () => this.deactivate());
        }

        deactivate() {
            this.isActive = false;
        }
    
    
    
    }


    // Create a function to spawn a new power-up
    export function spawnPowerUp() {
        let powerup = new PowerUp(assets.image`PowerUpBat`, PowerupKind.PowerUpBatLength);

        // Run the animation on the power-up sprite
        animation.runImageAnimation(
            powerup,
            assets.animation`PowerUpBat`,
            500,
            true
        );
    }
}

