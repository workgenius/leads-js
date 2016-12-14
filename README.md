# WorkGenius Leads API (Angular 1 Client)

### Getting started

- Include workgenius.js or workgenius.min.js in your project
```html
<script src="./workgenius.js"></script>
```

- Add the workgenius module to your app
```javascript
angular.module("app",
    ['workgenius'])
```
    

### Usage

- Add the workgenius service in your controller.
- Add the service to your scope to access the service form the HTML
- Call workgeni.init() first with your API Username and Password.
- Submit applicant information

```javascript
angular.module("app", ['workgenius'])
.controller('myCtrl', function($scope, workgenius) {
    $scope.workgenius = workgenius;
    $scope.workgenius.init('API_USERNAME', 'API_PASSWORD');
    $scope.workgenius.submit({
        name: "John Doe",
        email: "john@gmail.com",
        phone: "4151234567"
    });
});
```


### Flowchart

Representation of the interaction between Candidates, "Company A" (selling leads), WorkGenius and "Company B" (buying leads).

<img width="996" alt="wgadflowchart" src="https://cloud.githubusercontent.com/assets/10408393/21203533/c153f426-c207-11e6-8e8f-63b5a8eb77b1.png">
