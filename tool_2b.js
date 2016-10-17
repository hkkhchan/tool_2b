var toolApp= angular.module('toolApp',['ngDialog']);
toolApp.controller('toolAppCtrl', function($scope, ngDialog){
  $scope.mode=0;
  $scope.remove=function(d){
    if (typeof(d)=='undefined') return '';
    switch ($scope.mode){
      case 0:
        var result=d.replace(/<!--([^-]|-[^-])*-->\n/g,'');
        return result.replace(/<!--([^-]|-[^-])*-->/g,'');
        break;
      case 1:
        var result=d.replace(/\/\*(?:[\s\S]*?)\*\/\n/g,'');
        result=result.replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:^\s*\/\/(?:.*)$)/g,'');
        return result.replace(/\/\/.*?\n/g,'');
        break;
      case 2:
        return d.replace(/\#\s.*?\n/g,'');
        break;
      default:
        return d;
        break;
    }
  }
  $scope.is_selected=function(d){return d==$scope.mode?'active':'';}
  $scope.set_selected=function(d){$scope.mode=d;} 
  $scope.openDialog= function(){
    var dialog='<div>';
    dialog+='<h2>"繁簡轉換"的介紹</h2>';
    dialog+='<p>我將繁簡兩種文字的unicode放在兩個object，用簡單的coding便能將繁簡字轉換。資料來源是來自<a href="http://bunbun000.com/home/word/">笨笨網站</a>。</p>';
    dialog+='<p>本頁完全不用JQuery來處理DOM，用AngularJS來將結果呈現出來。</p>';
    dialog+='<p>AngularJS能給予html資料源作雙向綁定，所以無須綁定元素的事件，使Coding看起來簡潔。</p>';
    dialog+='<p>我曾試過用php來寫，即是將轉換編碼的部份交給php處理。發覺一旦是海量文字便處理得很慢。</p>';
    dialog+='</div>';
    ngDialog.open({
      template: dialog,
      plain: true,
      className: 'ngdialog-theme-default',
      scope: $scope
    });
  };
});