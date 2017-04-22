import font_awesome from "font-awesome-sass-loader";
import angularToast from 'ng-toast';
import angularSanitize from 'angular-sanitize';
import angularAnimate from 'angular-animate';
import angularEmojiFilterHDStyle from 'angular-emoji-filter-hd/dist/emoji.min.css';
import angularEmojiFilterHDJS from 'angular-emoji-filter-hd/lib/emoji.js';

(function () {
	'use strict';

	angular.module('shared', ['ngToast', 'ngAnimate', 'ngSanitize', 'dbaq.emoji']);

})();