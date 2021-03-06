// jq_009_val.js
(function($){
// jQuery

// 1. input(#inputResult)의 값을 확인
// 2. 문제발생시 처리
// 3. 작성된 값이 숫자인지 아닌지를 구분 : $.isNumeric('값');
// 4. 정규표현식 구분법 간단하게 학습해보기

// 정규표현식
var ckNum = /[0-9]/; // 숫자
var ckAlp = /[a-z|A-Z]/; // 영문
var ckSpc = /[`~!@#$%^&*()_+-=|{}]/; // 특수문자
var ckKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글


// 변수
var inputR = $('#inputResult');
var sendBtn = $('#send');
var rowResult = $('.row_result');


// 함수
var innerP = function(i){
  var result = [
    {type:'error', text:'두글자 이상 작성해주세요.'},
    {type:'success', text:'두글자 이상 작성되었습니다.'}
  ];
  var data =  result[i].type;
  var text =  result[i].text;

  rowResult.append('<p></p>');
  rowResult.find('p').eq(0).addClass(data);
  rowResult.find('p').eq(0).text(text);
};

var innerP2 = function(data, text){
  rowResult.append('<p></p>');
  rowResult.find('p').eq(1).addClass(data);
  rowResult.find('p').eq(1).text(text);
};

  // 유틸리티 함수 : $가 선택자 
  // $.each([배열], function(i,d){})
  // $.ajax({url:주소, context:document.body}).done(function(){})

// 이벤트
inputR.on('keyup', function(){
  var result = inputR.val();
  var dataType = !ckNum.test(result) && !ckAlp.test(result) && !ckSpc.test(result) && ckKor.test(result);
  if(dataType){ console.log('한글을 작성하였습니다.')}
});


inputR.on('blur', function(){ // blur : focus가 잡혔다가 빠져나갈 때 점검해 내용 표시
  var inputValue = inputR.val();
  var typeNumCheck = $.isNumeric(inputValue); // 숫자인가 아닌가 체크하는 jQuery 메소드
  if(inputValue.length < 2){
    // innerP('error', '두글자 이상 작성해주세요.');
    innerP(0);
  }else{
    // innerP('success', '두글자 이상 작성되었습니다.');
    innerP(1);
    if(!typeNumCheck){
      innerP2('success', '감사합니다.');
    }  
  }
  if(typeNumCheck){
     // 첫글자를 기준으로 봄
    var inText = '작성된 내용이 숫자입니다. 내용을 확인하고 다시 작성해주세요.';
    innerP2('error', inText);
  }
});

sendBtn.on('click', function(e){
  e.preventDefault();
  var inputValue = inputR.val();
  console.log( inputValue );
});


})(jQuery);