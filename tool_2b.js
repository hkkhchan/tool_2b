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
    dialog+='<h2>"刪除備註"的介紹</h2>';
    dialog+='<p>這個工具利用了regular expression將備註刪除</p>';
    dialog+='<p>本頁完全不用JQuery來處理DOM，用AngularJS來將結果呈現出來。</p>';
    dialog+='<p>AngularJS能給予html資料源作雙向綁定，所以無須綁定元素的事件，使Coding看起來簡潔。</p>';
    dialog+='<p>此版面的代碼，我也放到<a href="//github.com/hkkhchan/tool_2b">GitHub</a>，歡迎參觀。</p>';
    dialog+='</div>';
    ngDialog.open({
      template: dialog,
      plain: true,
      className: 'ngdialog-theme-default',
      scope: $scope
    });
  };
});