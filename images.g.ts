// Auto-generated code. Do not edit.
namespace myImages {

    helpers._registerFactory("image", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "image1":
            case "PlayerPaddle":return img`
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 7 9 9 . . . . . . . 
. . . . . 9 7 7 9 . . . . . . . 
. . . . . 9 7 7 9 . . . . . . . 
. . . . . 9 7 7 9 . . . . . . . 
. . . . . 9 7 7 9 . . . . . . . 
. . . . . 9 7 7 9 . . . . . . . 
. . . . . 9 7 7 9 . . . . . . . 
. . . . . 9 7 7 9 . . . . . . . 
. . . . . 9 7 7 9 . . . . . . . 
. . . . . 9 7 7 9 . . . . . . . 
. . . . . 9 7 7 9 . . . . . . . 
. . . . . 9 7 7 9 . . . . . . . 
. . . . . 9 7 7 9 . . . . . . . 
. . . . . 9 9 7 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
`;
            case "image2":
            case "Ball":return img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . d d . . . . . . . 
. . . . . . . d d . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`;
            case "image3":
            case "AiPaddle":return img`
. . . . . 9 9 9 9 . . . . . . . 
. . . . . 9 2 9 9 . . . . . . . 
. . . . . 9 2 2 9 . . . . . . . 
. . . . . 9 2 2 9 . . . . . . . 
. . . . . 9 2 2 9 . . . . . . . 
. . . . . 9 2 2 9 . . . . . . . 
. . . . . 9 2 2 9 . . . . . . . 
. . . . . 9 2 2 9 . . . . . . . 
. . . . . 9 2 2 9 . . . . . . . 
. . . . . 9 2 2 9 . . . . . . . 
. . . . . 9 2 2 9 . . . . . . . 
. . . . . 9 2 2 9 . . . . . . . 
. . . . . 9 2 2 9 . . . . . . . 
. . . . . 9 2 2 9 . . . . . . . 
. . . . . 9 9 2 9 . . . . . . . 
. . . . . 9 9 9 9 . . . . . . . 
`;
            case "image4":
            case "PowerUpBat":return img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`;
        }
        return null;
    })

    helpers._registerFactory("animation", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "PowerUpBat":
            case "anim1":return [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . 2 3 3 3 3 3 3 2 . . . . 
. . . . 2 3 7 7 7 7 3 2 . . . . 
. . . . 2 3 7 3 3 7 3 2 . . . . 
. . . . 2 3 7 7 7 3 3 2 . . . . 
. . . . 2 3 7 3 3 7 3 2 . . . . 
. . . . 2 3 7 7 7 3 3 2 . . . . 
. . . . 2 3 3 3 3 3 3 2 . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . 2 3 3 3 3 3 3 3 2 . . . . 
. . . 2 3 7 7 7 7 7 3 2 . . . . 
. . . 2 3 7 3 7 3 7 3 2 . . . . 
. . . 2 3 7 3 7 3 7 3 2 . . . . 
. . . 2 3 3 7 3 7 7 3 2 . . . . 
. . . 2 3 3 3 3 3 3 3 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . 2 3 3 3 3 3 3 2 . . . . 
. . . . 2 3 3 7 7 7 3 2 . . . . 
. . . . 2 3 7 3 3 7 3 2 . . . . 
. . . . 2 3 3 7 7 7 3 2 . . . . 
. . . . 2 3 7 3 3 7 3 2 . . . . 
. . . . 2 3 7 7 7 7 3 2 . . . . 
. . . . 2 3 3 3 3 3 3 2 . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 2 . . . . 
. . . . 2 3 3 3 3 3 3 3 2 . . . 
. . . . 2 3 7 7 3 7 3 3 2 . . . 
. . . . 2 3 7 3 7 3 7 3 2 . . . 
. . . . 2 3 7 3 7 3 7 3 2 . . . 
. . . . 2 3 7 7 7 7 7 3 2 . . . 
. . . . 2 3 3 3 3 3 3 3 2 . . . 
. . . . . 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`];
        }
        return null;
    })

    helpers._registerFactory("song", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

}
// Auto-generated code. Do not edit.

// Auto-generated code. Do not edit.
namespace myTiles {

}
// Auto-generated code. Do not edit.
