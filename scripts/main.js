// window.onload = function(){
//   var anchors = document.getElementsByTagName('a');
//   for (var i=0; i<anchors.length; i++){
//     if (anchors[i].hostname != window.location.hostname) {
//         anchors[i].setAttribute('target', '_blank');
//     }
//   }
// }
 $('a').each( function() {
  $(this).attr('target', '_BLANK');
 });