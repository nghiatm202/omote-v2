(function ($) {
  $(function () {

    // ==============================================================
    // img要素のRetina対応
    // ==============================================================
    // 高解像度のディスプレイでは、「@2x」の画像を表示する
    if (window.devicePixelRatio > 1)
      $('img.retina').each(function () {
        var t = $(this);
        t.attr('src', t.attr('src').replace(/(\.[a-z]+)$/i, "@2x$1"));
      });

    // ==============================================================
    // ユーザーエージェント別の処理
    // ==============================================================
    var body = $("body");
    var userAgent = window.navigator.userAgent;
    var appVersion = window.navigator.appVersion;

    // ユーザーエージェント判定 & bodyClass付与
    // iPhoneかiPodかiPadなら、.iosStyleをbodyに付与
    if ((userAgent.indexOf("iPhone") > 0) || (userAgent.indexOf("iPod") > 0) || (userAgent.indexOf("iPad") > 0)) {
      body.addClass("iosStyle");

      // Androidなら、.androidStyleをbodyに付与
    } else if (userAgent.indexOf("Android") > 0) {
      body.addClass("androidStyle");

      // IEなら, .ieStyleをbodyに付与
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
      body.addClass('ieStyle');

      // それ以外は、.pcStyleをbodyに付与 + PC専用の処理を実行
    } else {
      body.addClass("pcStyle");

      // ==============================================================
      // ホバー処理 （PCでのみ有効）
      // ==============================================================
      $(".hover").hover(function () {
        $(this).stop().fadeTo("fast", 0.6);
      }, function () {
        $(this).stop().fadeTo("fast", 1.0);
      });
    }


    // ==============================================================
    // スマホ用のタップ処理（PCではマウスダウン）
    // ==============================================================
    //.touchHoverをタップした際に.activeを付与し、離すと解除する
    $("a.touchHover, button.touchHover").bind("touchstart mousedown", function () {

      var touch = $(this);

      // 誤作動防止のため、若干タップ動作にタイムラグを与える
      timeout = setTimeout(function () {
        touch.addClass("active");
      }, 60);

      // タップ処理の解除
      $("body").bind("touchend mouseup", function () {
        clearTimeout(timeout);
        touch.removeClass("active");
      });

      $("body").bind("touchmove mousemove", function () {
        clearTimeout(timeout);
        touch.removeClass("active");
      });
    });

    // ==============================================================
    // ページの先頭へスクロール
    // ==============================================================
    // .pageTop aをクリックでページの先頭へ
    $(".pageTop a").click(function () {
      $("html, body").animate({
        scrollTop: 0
      });
      return false;
    });

  });
})(jQuery);

// Custom JS
const menuBtn = document.querySelector('.menu-btn');
const navbarLinks = document.querySelector(".navbar__links");
const overlay = document.querySelector("#overlay");

const footer = document.querySelector('.footer')
const footerTriangle = document.querySelector('.footer__triangle')
const footerTriangleSmall = document.querySelector('.footer__triangle--small')
const pageTopText = document.querySelector('.page-top')

let menuOpen = false;

// SP menu
menuBtn && menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    navbarLinks.classList.add('show');
    overlay.classList.add('show');
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    navbarLinks.classList.remove('show');
    overlay.classList.remove('show');
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// back to top
footerTriangle && footerTriangle.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
});

footerTriangleSmall && footerTriangleSmall.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
});


pageTopText && pageTopText.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
});

// overlay
overlay && overlay.addEventListener('click', () => {
  overlay.classList.toggle("show");
});

// handle header fixed
window.onscroll = function () {
  handleHeaderFixed()
};

const headerBottom = document.querySelector('.header__bottom');
const sticky = headerBottom.offsetTop;

function handleHeaderFixed() {
  if (window.pageYOffset > sticky) {
    headerBottom.classList.add("sticky");
  } else {
    headerBottom.classList.remove("sticky");
  }
}

var splide = new Splide('.splide', {
  type: 'fade',
  rewind: true,
  autoplay: true,
  arrows: false,
});

splide.mount();

// slider
$('.slider').slick({
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  dots: true,
  arrows: false
});