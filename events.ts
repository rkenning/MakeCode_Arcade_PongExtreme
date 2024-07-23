// Define the handles for collision

sprites.onOverlap(SpriteKind.Player, PowerUpNameSpace.SpriteKind.PowerUpBatLength, function (sprite: Sprite, otherSprite: Sprite) {
    //console.log("Player hit by PowerUpBatLength");
    PowerUpNameSpace.processPowerup(sprite, otherSprite);
    otherSprite.destroy();
});

sprites.onOverlap(SpriteKind.Player, PowerUpNameSpace.SpriteKind.PowerUpBatSpeed, function (sprite: Sprite, otherSprite: Sprite) {
    //console.log("Player hit by PowerUpBatSpeed");
    PowerUpNameSpace.processPowerup(sprite, otherSprite);
    otherSprite.destroy();
});

sprites.onOverlap(SpriteKind.Player, PowerUpNameSpace.SpriteKind.PowerUpBallSpeed, function (sprite: Sprite, otherSprite: Sprite) {
    //console.log("Player hit by PowerUpBallSpeed");
    PowerUpNameSpace.processPowerup(sprite, otherSprite);
    otherSprite.destroy();
});


sprites.onOverlap(SpriteKind.Enemy, PowerUpNameSpace.SpriteKind.PowerUpBatLength, function (sprite: Sprite, otherSprite: Sprite) {
    //console.log("Enemy hit by PowerUpBatLength");
    PowerUpNameSpace.processPowerup(sprite, otherSprite);
    otherSprite.destroy();
});


sprites.onOverlap(SpriteKind.Enemy, PowerUpNameSpace.SpriteKind.PowerUpBatSpeed, function (sprite: Sprite, otherSprite: Sprite) {
    //console.log("Enemy hit by PowerUpBatSpeed");
    PowerUpNameSpace.processPowerup(sprite, otherSprite);
    otherSprite.destroy();
});

sprites.onOverlap(SpriteKind.Enemy, PowerUpNameSpace.SpriteKind.PowerUpBallSpeed, function (sprite: Sprite, otherSprite: Sprite) {
    //console.log("Enemy hit by PowerUpBallSpeed");
    PowerUpNameSpace.processPowerup(sprite, otherSprite);
    otherSprite.destroy();
});


