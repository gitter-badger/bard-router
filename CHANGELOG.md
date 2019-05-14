# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# [0.3.0](https://github.com/AoDev/bard-router/compare/v0.2.1...v0.3.0) (2019-04-19)


### Features

* **plugin:** new windowTitlePlugin ([ea7e111](https://github.com/AoDev/bard-router/commit/ea7e111))
* support for route not found redirect ([add14bb](https://github.com/AoDev/bard-router/commit/add14bb))


### BREAKING CHANGES

* 1. Router instantiation
Now the constructor has a single argument.

You should call it:
new Router({routes: myRoutes, otherOptions...})
(before: new Router(routes, {options...}))

2. For trying to unify plugins API:
Now call html5HistoryPlugin.register(router)
instead of html5HistoryPlugin.createHistory()



## [0.2.1](https://github.com/AoDev/bard-router/compare/v0.2.0...v0.2.1) (2019-03-27)


### Bug Fixes

* **methods:** goTo and goBack are now bound to the instance ([fc08bb8](https://github.com/AoDev/bard-router/commit/fc08bb8))



## 0.2.0 (2019-02-28)


### Bug Fixes

* **html5 history:** going forward ([e5047d2](https://github.com/AoDev/bard-router/commit/e5047d2))


### Features

* **history:** add generic history + html5 support ([d0bb66b](https://github.com/AoDev/bard-router/commit/d0bb66b))
* **Link:** improve links active behaviour ([f91e2d2](https://github.com/AoDev/bard-router/commit/f91e2d2))
* easier history plugin api ([baf940b](https://github.com/AoDev/bard-router/commit/baf940b))


### BREAKING CHANGES

* history plugin now is passed in the options and the history can
be accessed as router.history while the router internal history
is at router.story.
* **history:** 'onNav' hook is now available as:

router.on('nav', (router, navOptions) => {}))