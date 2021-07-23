// js_023_rwd_header_smartphone.js
(function($){
// jQuery

// 변수
var gnb = $('#gnb');
var gnbBtn = gnb.find('.gnb_btn').children('button');
var gnbList = gnb.find('.gnb_list');
var timed = 500;

// li.eq(0).css({backgroundColor:'#f77'});
// eq() : 모든 li중에 하나
// siblings() : 선택자의 형제들


// 1. 스마트폰 기반에서 동작하게 하자
// 100. gnbBtn을 클릭시 gnbList가 나타나게/사라지게
// 스마트폰, 타블렛 각 기능 따로 쓰기, 안그럼 오류남

gnbBtn.on('click', function(e){
  e.preventDefault();
  // gnb요소에 act클래스이름의 유무 판단
  var hasAct = gnb.hasClass('act');
  if(hasAct){
    gnbList.stop().fadeOut(timed/2);
    gnb.removeClass('act');
  }else{
    gnbList.stop().fadeIn(timed/2);
    gnb.addClass('act');
  }
});



})(jQuery);