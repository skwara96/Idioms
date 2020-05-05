$( document ).ready(function() {
/*   jQuery.get('\idioms.txt', function(data) {
   //process text file line by line
   $('.idiom').html(data.replace(/\n/g, "<br />"));
}); */


var k = 0;
    for(j = 0; j <6; j++){
        $('.buttons').append("<div class='rows row"+j+"'>");
        for(i = 0; i < 5; i++){
            $(".row"+j).append("<div class='button' data-number='"+(k+1)+"'>"+ (k+1) + "</div>");
            k++;
        }
        $('.buttons').append("</div>");
    }

    $('.button').each(function () {
    var $this = $(this);
    $this.on("click", function () {
        $this.css('background','rgba(255,0,0,0.5)');
        $(".idiom").html("");
        var number = $(this).data('number')

         var idioms = new Array();

        $.get('\idioms.txt', function(data){
            idioms = data.split('\n');
            console.log(idioms);
            var l = number*3-3;
            for (i = 0; i < 3; i++) {
                $('.idiom').append("<p>" + idioms[l] + "</p>");
                l++;
            }
        });
        $('.correct').click(function() {
            $(".idiom p:nth-child(2)").css('opacity', '1');
        });
        $('.polish').click(function() {
            $(".idiom p:nth-child(3)").css('opacity', '1');
        });
    });
});
});
