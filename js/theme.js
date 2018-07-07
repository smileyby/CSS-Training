/**
 *
 * 判断打开网页的终端
 *
 * @returns {string[]}	User agent
 */
function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/))
    );
}
$(function(){
    var $infoBox = $('.infoBox');
    var windowHeight = $(window).height(),
        innerHeight	= $infoBox.outerHeight(),
        goldenHeight = windowHeight * 0.62, /** @see http://en.wikipedia.org/wiki/Golden_ratio */
        verticalCenter 	= ( ( goldenHeight ) - innerHeight ) / 2;
    $('.bannerBox').height( goldenHeight );
    $infoBox.css( 'top', verticalCenter );

    $('.hasChildList').click(function(){
        $(this).find('.childList').slideToggle( 100 );
    });

    // 设置图片区单张宽度
    var thumbsWidth = ($('.filterNav').outerWidth() - 60) / 3;
    $('.inside').css('width', thumbsWidth + 'px');

    // 页面滚动时
    $(window).scroll(function() {
        if( ! isMobile()){
            var top = $(this).scrollTop();
            $('.banner').css({'background-position' : 'center ' + (top/5)+"px"});
            $infoBox.css({'opacity' : 1-(top/400)});
        }
    });


})