
let $search;

$( "#search" ).keyup(function() {
  const $search_value = $(this).val();
  $search = $search_value.toLowerCase();
});

$('a').each(function(){


  const $caption = $(this).attr('data-title').toLowerCase();
  if($search == $caption){
    console.log( $(this) );
  }

});
