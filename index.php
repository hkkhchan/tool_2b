<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script src="tool_2b.js"></script>
<section ng-app="toolApp" ng-controller="toolAppCtrl">
<article>
  <nav>
    <span id="toDef" class="option active" ng-class="is_selected(0)" ng-click="set_selected(0)">刪除HTML備註</span>
    <span id="toSC" class="option" ng-class="is_selected(1)" ng-click="set_selected(1)">刪除JS/PHP備註</span>
    <span id="toTC" class="option" ng-class="is_selected(2)" ng-click="set_selected(2)">刪除Python備註</span>
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