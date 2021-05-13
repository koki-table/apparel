$(function() {
  var height=$("header").height();
  $("body").css("margin-top", height + 10);//10pxだけ余裕をもたせる
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position -$(`#js-header`).outerHeight()}, speed, "swing");
    return false;
  });

  let $form = $( `#js-form` )
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $( `#js-success` ) .slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $( `#js-error` ) .slideDown()
        }
      } 
    });
    return false; 
  }); 
});