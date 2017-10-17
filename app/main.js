'use strict';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

console.log('$', $);
import 'angular';

const app = angular.module('main', []);

app.run(function ($rootScope) {
    'ngInject';
    $rootScope.name = 'Maïté';
    console.log('angularElt', angular.element);
});

import helloWorldUrl from './tmpl/hello-world.html';
app.component('helloWorld', {
    template: helloWorldUrl
});
