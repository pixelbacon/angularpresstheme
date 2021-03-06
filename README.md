I. Angularpresstheme: Angularjs + Wordpress + Zurb Foundation
=============================================================

Angularjs, Wordpress and Zurb Foundation. This theme turns Wordpress into a Single Page Application.

II. Demo
========

[angularpresstheme.com](http://angularpresstheme.com/)

###Note

>Search Bar, categories, archive, some Foundation components, site title, responsive design,
>breadcrumbs are not working at this moment. See **Todo**.


III. Configuration
==================

* Install [json api plugin](http://wordpress.org/plugins/json-api/) . Go to **settings/json
api** and activate all its components
* Set your permalink Custom Structure  to **/%category%/%postname%/**
* Check if category base and tag base are set to none or '/'. If your category base,
tag base or custom structure are structured like these:
        'http://yoursitename/blog' or '/blog'
   You'll need to configure angularjs routing in **library/app.js** as follows:

		**from**

		when('/', {

		**change to**

		when('/blog/', {

		**from**

		when('/:primaryNav/', {

		**change to**

		when('/blog/:primaryNav/', {

		**from**

		when('/:primaryNav/:secondaryNav/', {

		**change to**

		when('/blog/:primaryNav/:secondaryNav/', {



(cont.)
=========================
* You need php 5.3+ and your server **must** have **allow_url_fopen** set to on

* If you use multisite with WPMU DOMAIN MAPPING outdated plugin and WP 3.8 you should update it
 to the new version:

	>Multi-Domains for Multisite and Domain Mapping plugin or any other domain plugin that works with
> version 3.8.1 of wordpress

* If you use any type of maintenance plugin that redirects to 503 error page, you must deactivate it (this will be addressed in a future version)

* Check that your  angularpress/library/views is writable

IV. How to use It
================

Create a new page, choose a template and click publish. An angularjs html template will be
generated in library/views folder.

###Changing page-templates

If you make changes to any page-template you will need to update its respective angularjs
template by clicking on the publish/update button in menu/pages/all pages.

**Example:** if change something on the contact.php template you need to update the page that use
that template in order to preview your changes.

###Reading Settings

>**Important**: Each time you change **front page displays** you will need to rebuild angularjs
>html templates as well.

**For instance**: change  **your latest posts** to **a static page** ,
then choose front-page as Home and posts page as Blog.Click Save Changes button. Go to
menu/pages/all pages and update Home and Blog page (you can use the quick edit menu as well).
If you do the opposite way, say from **a static page** to **your latest posts** you should do
the same thing and update Home and Blog again.


V. Note about WP plugins
=========================

Most WP plugins should work. But some of them will need some tweaks in order to work and others
probably won't work at all.

###Example:Contact form 7

Put shortcode at line 90 on page-templates/contact.php
Generate contact.html : go to pages and generate contact.html by clicking on update or publish
button on your contact page.

Really Simple Captcha will not work, because it is not ajax made.

VI. Note about jQuery plugins
==============================

###Foundation jQuery components
 Most of them won't work at all. They will be replaced by an angulajs bootstrap-ui version.

###Mixitup and others

 You will need to make a simple directive for example:

```javascript
angularpressApp.directive('mixitup', function () {
	return{
	restrict: 'A',
	link: function (scope, element) {
		return element.mixitup(
			{
			transitionSpeed: 600
			}
		);
	  }
   };
});
```



VII. Known bugs
================

* When embeding youtube videon on posts causes full page reload
* When post or page is new preview not working
* Rename post/page slug should not renaming angular template file
* Main Menu and Sidebar menu not working
* Reactor menu dont disappear when set visibility to private or state to pending or draft
* Cant go back from admin area to preview page/posts
* After close browser, sometimes redirection don't work anymore


VIII. Todo
==========

* Breadcrumbs
* Redirection improvements
* Filters: category & archives
* Searchbar
* Publish page bulk action
* Comments form
* Contact form
* Porfolio subpages
* Update foundation components and shortcodes to boostrap-ui
* Title tag
* Gmail and Youtube like routing
* **WIP**- work in progress. Work offline and synch when back on. See John Papa's concept: [Code Camper](http://cc-ng-z.azurewebsites.net/#/sessions)
* Multisite compatible
* Update to foundation 5
* Views folder on a CDN
* WP option for angularjs routing: admin, login, category base etc
* States: pending & draft
* Visibility: set private & set password
* Use ob_start instead of HTTP_API
* Reading Settings: date and time format
* Responsive design: Work on phones
* Google Analytics and WP SlimStat plugin
* SEO with [PhantomJS](http://www.yearofmoo.com/2012/11/angularjs-and-seo.html)
* Page formats
* Splash Screen for index
* Security
* Grunt
* Requirejs and r.js on theme build
* Woocommerce compatible
* Accessibility
* Child Theme


IX. License
===========

Angularpresstheme is GPLv2  - http://www.gnu.org/licenses/gpl-2.0.html<br/>
Reactor by awtheme is also GPLv2  - http://www.gnu.org/licenses/gpl-2.0.html<br/>
Foundation by ZURB is MIT - http://opensource.org/licenses/MIT<br/>
MixItUp by Barrel LLC is CC BY-ND 3.0 - http://creativecommons.org/licenses/by-nd/3.0/<br/>



