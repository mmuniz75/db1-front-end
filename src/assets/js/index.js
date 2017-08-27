window.onload = init;

function init(){
  var $edPassword = $("#password");
  var $edScore = $("#passwordscore");

  var $infoVeryWeek = $("#passveryweek");
  var $infoWeek = $("#passweek");
  var $infoGood = $("#passgood");
  var $infoStrong = $("#passstrong");
  var $infoVeryStrong = $("#passverystrong");

  var $chShowPassword = $("#chshowpassword");

  infoScoreAllHide();

  $edPassword.keyup(function() {
    var value = $edPassword.val();

    if (value){
      $.post( "/analyzerpassword", { password: $edPassword.val() }, processaRetorno);
    } else{
      $edScore.text('0 %');
      infoScoreAllHide();
    }
  });


  $chShowPassword.change(function() {
    if(this.checked) {
      $edPassword.attr('type', 'text');
    } else {
      $edPassword.attr('type', 'password');
    }
  });

  function processaRetorno(data){
    $edScore.text(data.score + ' %');
    showHideComponent($infoVeryWeek, data.complexity == 'VERY_WEAK');
    showHideComponent($infoWeek, data.complexity == 'WEAK');
    showHideComponent($infoGood, data.complexity == 'GOOD');
    showHideComponent($infoStrong, data.complexity == 'STRONG');
    showHideComponent($infoVeryStrong, data.complexity == 'VERY_STRONG');
  }

  function showHideComponent(component, isShow){
    if (isShow){
      component.show();
    }else {
      component.hide();
    }
  }

  function infoScoreAllHide(){
    $infoVeryWeek.hide();
    $infoWeek.hide();
    $infoGood.hide();
    $infoStrong.hide();
    $infoVeryStrong.hide();
  }
}
