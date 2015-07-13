<div data-ng-bind="'Hello ' + name"></div>
<div>
	<button data-ng-click="go();">go</button>
</div>

<div>
	<button data-ng-click="search();">request Server Data</button>
</div>
<table>
	<tr data-ng-repeat="item in list">
		<td data-ng-bind="item.no"></td>
		<td data-ng-bind="item.title"></td>
		<td data-ng-bind="item.regDate"></td>
	</tr>
</table>