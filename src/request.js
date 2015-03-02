
var callAjax = function( callback ) 
{

 ajax(
   {
     url: 'http://api.theysaidso.com/qod.json',
     type: 'json'
   },
   function(data, status, request) {
     console.log('Quote of the day is: ' + data.contents.quote);
     callback( null,data );
   },
   function(error, status, request) {
     console.log('The ajax request failed: ' + error);     
     callback( error,status );
   }
 );

};

