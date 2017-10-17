import '@uirouter/angularjs';

import './phoenix-route.scss';

import homeHtml from './home/home.html';
import traductionsHtml from './traductions/traductions.html';

const app = angular.module('phoenix-route', ['ui.router']);

app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);

	$stateProvider.state({
		name: 'home',
		url: '/',
		template: homeHtml,
	});

	$stateProvider.state({
		name: 'traductions',
		url: '/traductions',
		template: traductionsHtml,
	});

	$urlRouterProvider.otherwise('/');
});