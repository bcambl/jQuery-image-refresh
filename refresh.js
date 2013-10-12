jQuery(document).ready(function() {
       // sixty second interval (1 second = 1000)
       window.setInterval("updatelapse();", 60000);
    });
 
    var url = 'URL_TO/image.jpg?refresh=';
    var freshno = 0;
 
    function updatelapse()
    {
       freshno = freshno + 1;
       jQuery('#ID_OF_IMAGE').attr('src',url + freshno);
}
