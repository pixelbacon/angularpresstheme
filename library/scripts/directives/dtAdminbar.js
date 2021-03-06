/**
 * Created by ROGER on 16.12.13.
 */

'use strict';
angularpressApp.directive('abItem', function ($window) {
//Defaults menubar buttons:new,home,wp
	return{
		restrict: 'C',
		scope:true,

		link: function (scope, element, attr) {

			scope.redirectToAdmin = function () {

				$window.location.href = attr.href;

			}

		}
	};
});

angularpressApp.directive('editpage', function (page, wpAjax, $location) {

	return{
		restrict   : 'E',
		replace    : true,
		templateUrl: wpAjax.themeLocation.templateDir + '/library/scripts/directives/partials/editpage.html',

		link: function (scope, element, attrs) {

			if (angular.element('body').hasClass('admin-bar')) {
				var styles = {
					display   : "inline-block",
					padding   : "1px 8px 0",
					lineHeight: 2.1
				};

				angular.element(".angp-admin-bar-edit .ab-item").css(styles);

				if (angular.element('body').hasClass('admin-bar')) {
					element.find('.loading-spinner').spin('small');
					page.get_page_ID(

						function (data) {

							scope.siteurl = wpAjax.themeLocation.siteUrl;
							scope.pageid = data.page.id;

							element.find('.loading-spinner').spin(false);
							scope.is_button_visible = angular.element('body').hasClass('admin-bar') && scope.pageid !== '';
							//remove duplicated editpage button
							angular.element("#wp-admin-bar-root-default li.angp-admin-bar-edit:nth-last-child(2)").remove();
							if ($location.path() === '/')
								scope.is_button_visible = false;

						}, attrs.name);
				}
			}
		}
	};

})
;

angularpressApp.directive('editpagelink', function (page, wpAjax) {

	return{
		restrict   : 'E',
		replace    : true,
		templateUrl: wpAjax.themeLocation.templateDir + '/library/scripts/directives/partials/editpagelink.html',
		controller : 'PrimaryNavCtrl',
		link       : function (scope, element, attrs) {

			if (angular.element('body').hasClass('admin-bar')) {
				element.find('.loading-spinner').spin('small-editlink');
				scope.appendAdminBarEditButton();

				page.get_page_ID(

					function (data) {
						element.find('.loading-spinner').spin(false);
						scope.siteurl = wpAjax.themeLocation.siteUrl;
						scope.pageid = data.page.id;

						scope.is_visible = angular.element('body').hasClass('admin-bar') && scope.pageid !== '';

					}, attrs.name);

			}
		}

	};

});

angularpressApp.directive('editpost', function (post, wpAjax, $location) {
	//related files: dtPostArticle.js and ctRoutes.js
	return{
		restrict   : 'E',
		replace    : true,
		templateUrl: wpAjax.themeLocation.templateDir + '/library/scripts/directives/partials/editpost.html',

		link: function (scope, element, attrs) {

			if (angular.element('body').hasClass('admin-bar')) {
				var styles = {
					display   : "inline-block",
					padding   : "1px 8px 0",
					lineHeight: 2.1
				};

				angular.element(".angp-admin-bar-edit .ab-item").css(styles);

				if (angular.element('body').hasClass('admin-bar')) {
					element.find('.loading-spinner').spin('small');

					post.get_post_ID(

						function (data) {

							scope.siteurl = wpAjax.themeLocation.siteUrl;
							scope.postid = data.post.id;

							element.find('.loading-spinner').spin(false);
							scope.is_button_visible = angular.element('body').hasClass('admin-bar') && scope.postid !== '';

							//remove duplicated editpage button
							angular.element("#wp-admin-bar-root-default li.angp-admin-bar-edit:nth-last-child(2)").remove();

							if ($location.path() === '/')
								scope.is_button_visible = false;

						}, attrs.name);
				}
			}
		}
	};

})
;




