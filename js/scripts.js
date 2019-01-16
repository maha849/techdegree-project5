

$('input').on('keyup', function(){
  const input = $('input').val();
  for(let i=0; i < $('a').length; i+=1){
    let $a = $('a').eq(i);
    let content = $a.attr("data-title");
    if(content.indexOf(input) == -1){
      $a.css("display", "none");
    }else{
      $a.css("display", "block");
    }
  }
});
