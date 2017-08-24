app.directive('meetParts', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'javascripts/directives/meetInfo.html' 
  }; 
});
