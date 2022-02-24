$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $(function() {
        $("#slides").slidesjs({
            width: 940,
            height: 528,
            play: {
                active: false,
                // [boolean] Generate the play and stop buttons.
                effect: "fade",
                // [string] Can be either "slide" or "fade".
                interval: 4000,
                // [number] Time spent on each slide in milliseconds.
                auto: true,
                // [boolean] Start playing the slideshow on load.
                swap: false,
                // [boolean] show/hide stop and play buttons
                pauseOnHover: true,
                // [boolean] pause a playing slideshow on hover
                restartDelay: 100
                        // [number] restart delay on inactive slideshow
            },
            navigation: {
                effect: "fade"
            },
            pagination: {
                effect: "fade"
            },
            effect: {
                slide: {
                    // Slide effect settings.
                    speed: 400
                            // [number] Speed in milliseconds of the slide animation.
                },
                fade: {
                    speed: 500,
                    // [number] Speed in milliseconds of the fade animation.
                    crossfade: true
                            // [boolean] Cross-fade the transition.
                }
            }
        });
    });
    
    //remove the generated slidejs-navigation buttons and keep mines
    $(function() {
        $(".slidesjs-navigation").each(function() {
            if(!$(this).hasClass("keep-me")){
                $(this).remove();
            }
        })
    })
    
});