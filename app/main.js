'use strict';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

import 'angular';

const app = angular.module('main', []);

app.run(function ($rootScope) {
    'ngInject';
    $rootScope.name = 'Maïté';
    console.log('angularElt', angular.element);
});

import phoenixHeaderUrl from './layout/tmpl/phoenix-header.html';
app.component('phoenixHeader', {
    template: phoenixHeaderUrl
});
