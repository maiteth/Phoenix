import '@uirouter/angularjs';

import './phoenix-route.scss';

import homeHtml from './home/home.html';
import planningHtml from './planning/planning.html';
import gallerieHtml from './gallerie/gallerie.html';
import aProposHtml from './a-propos/a-propos.html';

const app = angular.module('phoenix-route', ['ui.router']);

app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);

	$stateProvider.state({
		name: 'home',
		url: '/',
		template: homeHtml,
	});

	$stateProvider.state({
		name: 'planning',
		url: '/planning',
		template: planningHtml,
	});

	$stateProvider.state({
		name: 'gallerie',
		url: '/gallerie',
		template: gallerieHtml,
	});

	$stateProvider.state({
		name: 'a-propos',
		url: '/a-propos',
		template: aProposHtml,
	});

	$urlRouterProvider.otherwise('/');
});