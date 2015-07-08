$(document).ready(function() {
        for(var i = 1; i<=16; i++) {
            for(var j = 1; j<=16; j++) {
                var div = document.createElement("div");
                $(div).html("&nbsp;");
                $(div).addClass("gridel");
                $(div).on("mouseleave", function() {
                    $(this).addClass("painted");
                });
                $(".container").append($(div));
            }
        }
    var grid_lines = document.createElement("button");
    $(grid_lines).text("show lines");
    $(grid_lines).addClass("centeredLargeButton").addClass("position");
    $(grid_lines).click(function() {
            $(".gridel").toggleClass("grid_lines");
            // $(".gridel").addClass("grid_lines");
    });
    $("body").append(grid_lines);
    var clear_button = document.createElement("button");
    var resolution_limit = 100;

    $(clear_button).text("advance grid");
    $(clear_button).addClass("centeredLargeButton");

    $(clear_button).click(function() {
        $("div.gridel").removeClass("painted");
        $(".gridel").toggleClass("grid_lines");

        do {
            var resolution = checkInput("Sketchpad resolution: (between 1 and " + resolution_limit + ")");
        } while (resolution > resolution_limit);

        draw_grid(resolution);
    });

    $("body").append(clear_button);

    function clear_old_grid() {
        $(".container").html("");
    }

    function draw_grid(number) {
        clear_old_grid();
        for(var i = 1; i<= number*number; i++) {
            // to split rows <div>
            //for(var j =1 ; j<=number; j++)
            {
                var div = document.createElement("div");
                $(div).html("&nbsp;");

                $(div)
                    .width(100/number + "%")
                    .height(100/number + "%")
                    .addClass("gridel")
                    .on("mouseenter", function() {
                        $(this).css({
                            'background-color': getRandomColor()
                        });
                    });
                $(".container").append($(div));
            }
        }

    }

    function getRandomColor() {
        var r, g, b;
        r = parseInt((Math.random()*255));
        g = parseInt((Math.random()*255));
        b = parseInt((Math.random()*255));
        var css = "rgb("+r+","+g+","+b+")"
        return css;
    }

    function checkInput(message) {
        do {
            var d = prompt(message);
            if(d === null) {
                var number = 16;
            } else {
                var number = parseInt(d);
            }
        } while(isNaN(number))

        return number;
    }
});

