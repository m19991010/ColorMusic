
angular.module('myApp',[])

.controller('myCtrl', ['$scope', myCtrl]);

function myCtrl($scope) {
  
  //models
  angular.extend($scope, {
      beat : '���W�U���k�}�l',
      keyCode : ''
    }  
  );  
 
  //methods  
  angular.extend($scope, {    
    keyDown : function(e){     
      this.keyCode = e.which;
      switch(e.which) {
        case 38:
          this.beat ='up';
          break;
        case 40:
          this.beat ='down';
          break;
        case 37:
          this.beat ='left';
          break;
        case 39:
          this.beat ='right';
          break;
        default:
          this.beat = 'none';
      }  
    }      
  });  
    
}

