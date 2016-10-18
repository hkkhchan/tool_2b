<link href="ngDialog.min.css" rel="stylesheet">
<link href="ngDialog-theme-default.min.css" rel="stylesheet">
<link href="//fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="tool.css" rel="stylesheet" type="text/css" />
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
<script src="ngDialog.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script src="tool_2b.js"></script>
<section ng-app="toolApp" ng-controller="toolAppCtrl">
<article>
  <nav>
    <span id="toDef" class="option active" ng-class="is_selected(0)" ng-click="set_selected(0)">HTML</span>
    <span id="toSC" class="option" ng-class="is_selected(1)" ng-click="set_selected(1)">JS/PHP</span>
    <span id="toTC" class="option" ng-class="is_selected(2)" ng-click="set_selected(2)">Python</span>
    <span type="button" class="button" ng-click="openDialog()">介紹</span>
  </nav>
</article>
<article>
 <div>
  <label class="frame_label">Source</label>
 </div>
  <textarea id="src" ng-model="src"></textarea>
  <div>
    <label class="frame_label">Result</label>
  </div>
  <textarea id="result" >{{remove(src)}}</textarea>
  <br/>
</article>

</section>