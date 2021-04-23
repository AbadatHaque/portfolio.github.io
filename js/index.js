
$(document).ready(function () {
    $('#navIcon').click(function () {
        $('.togNav').toggle(".togNav");
    });

    $('.sad1').click(function () {
        $(".sad2").css("display", "block");
        $(".sad3").css("display", "block");
        $(".sad1").css("display", "none");
        $('.part2 h1').text("Resume");
    });

    $('.sad2').click(function () {
        $(".sad3").css("display", "block");
        $(".sad1").css("display", "block");
        $(".sad2").css("display", "none");
        $('.part2 h1').text("Portfolio");
    });

    $('.sad3').click(function () {
        $(".sad1").css("display", "block");
        $(".sad2").css("display", "block");
        $(".sad3").css("display", "none");
        $('.part2 h1').text("About me");
    });
// <<<<<<<<navber pages animation>>>>>>>>>>>
$('.togNav ul li').click(function(){
var a = $('.nav h1').text();
if (a=="Portfolio") {
$('.resumeOrg').css("display", "none")
$('.aboutMe').css("display", "none")
$('.tpart').css({"display": "block"})
} 
if (a=="About me") {
$('.tpart').css("display", "none")
$('.resumeOrg').css("display", "none")
$('.aboutMe').css("display", "block")
} 
if (a=="Resume") {
$('.tpart').css("display", "none")
$('.resumeOrg').css({"display": "block", })
$('.aboutMe').css("display", "none")
} 
else {
}
});
// <<<<<<<<<<<<<<Portfolio animation>>>>>>>>>>>
$('.photo').click(function(){
$('.photoMain').css("display","block");
$('.codeMain').css("display","none");
$('.photo').addClass("active");
$('.code').removeClass("active");
});

$('.code').click(function(){
$('.photoMain').css("display","none");
$('.codeMain').css("display","block");
$('.code').addClass("active");
$('.photo').removeClass("active");
});
/* <<<<<<<<<<<main dainamic animatiuon>>>>>>>>>> */

$(".Dainamic").click(function(){
$(".daicontainer").css("display", "block");
$(".sContainer").css("display", "none");
$(".boostrap").css("display", "none");
$(".Dainamic").addClass("actSide");
$(".sPage").removeClass("actSide");
$(".Btrap").removeClass("actSide");
});
$(".sPage").click(function(){
$(".daicontainer").css("display", "none");
$(".sContainer").css("display", "block");
$(".boostrap").css("display", "none");
$(".Dainamic").removeClass("actSide");
$(".sPage").addClass("actSide");
$(".Btrap").removeClass("actSide");
});
$(".Btrap").click(function(){
$(".daicontainer").css("display", "none");
$(".sContainer").css("display", "none");
$(".boostrap").css("display", "block");
$(".Dainamic").removeClass("actSide");
$(".sPage").removeClass("actSide");
$(".Btrap").addClass("actSide");
});





$(".phoWeb").click(function(){
    $(".photoWebsite").css("display", "block");
    $(".photoDongolar").css("display", "none");
    $(".photoMagazine").css("display", "none");
    $(".photoAdds").css("display", "none");
    $(".phoWeb").addClass("actSide");
    $(".phoMag").removeClass("actSide");
    $(".phoAdd").removeClass("actSide");
    $(".phoDon").removeClass("actSide");
    });
    $(".phoMag").click(function(){
        $(".photoWebsite").css("display", "none");
        $(".photoDongolar").css("display", "none");
        $(".photoMagazine").css("display", "block");
        $(".photoAdds").css("display", "none");
        $(".phoWeb").removeClass("actSide");
        $(".phoMag").addClass("actSide");
        $(".phoAdd").removeClass("actSide");
        $(".phoDon").removeClass("actSide");
        });
        $(".phoAdd").click(function(){
            $(".photoWebsite").css("display", "none");
            $(".photoDongolar").css("display", "none");
            $(".photoMagazine").css("display", "none");
            $(".photoAdds").css("display", "block");
            $(".phoWeb").removeClass("actSide");
            $(".phoMag").removeClass("actSide");
            $(".phoAdd").addClass("actSide");
            $(".phoDon").removeClass("actSide");
            });
            $(".phoDon").click(function(){
                $(".photoWebsite").css("display", "none");
                $(".photoDongolar").css("display", "block");
                $(".photoMagazine").css("display", "none");
                $(".photoAdds").css("display", "none");
                $(".phoWeb").removeClass("actSide");
                $(".phoMag").removeClass("actSide");
                $(".phoAdd").removeClass("actSide");
                $(".phoDon").addClass("actSide");
                });


// $('.photoMain img').click(function(){
// $(this).css({"transform": "scale(5)", "transition": "1s", "margin": "auto", "text-align": "center"});

// });

var a = new FgGallery('.fg-gallery', {
    cols: 4,
    style: {

        height: '150px',
        width: '100px',
        borderRadius: '5px',
        boxShadow: '0 2px 10px -5px #858585',

    }
})

var a = new FgGallery('.ns', {
    cols: 5,
    style: {
        border: '0 solid #fff',
        height: '130px',
        borderRadius: '5px',
        width: '80px',
    }
})

var a = new FgGallery('.don', {
    cols: 2,
    style: {
        border: '0 solid #fff',
        height: '150px',
        borderRadius: '5px',
        width: '100px',
    }
})

var a = new FgGallery('.mag', {
    cols: 2,
    style: {
        border: '0 solid #fff',
        height: '150px',
        borderRadius: '5px',
        width: '100px',
    }
})
});
