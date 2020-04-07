# WestgateXLauncher

<p align="center">
    <img width="800" height="auto" src="https://i.imgur.com/P6tCDlc.png" alt="WestgateXL" />
</p>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/contains-cat-gifs.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

[![Build Status](https://img.shields.io/travis/NanobugXL/FiVVR/master.svg?style=for-the-badge)](https://travis-ci.org/NanobugXL/WestgateXLauncher)[![Test Coverage](https://img.shields.io/codecov/c/github/NanobugXL/WestgateXLauncher/master.svg?style=for-the-badge)](https://codecov.io/github/NanobugXL/WestgateXLauncher?branch=master)[![devDependency Status](https://img.shields.io/david/dev/FiVVR/WestgateXLauncher.svg?style=for-the-badge)](https://david-dm.org/FiVVR/WestgateXLauncher#info=devDependencies)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FFiVVR%2FWingateXLauncher.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FFiVVR%2FWingateXLauncher?ref=badge_large) <img width="500" height="auto" src="https://github.com/FiVVR/WestgateXLauncher/blob/master/resources/WestgateDemo.gif?raw=true" alt="Launcher Demo">

[View Larger Image](https://github.com/FiVVR/WestgateXLauncher/blob/master/resources/WestgateDemo.gif?raw=true)

<details>
 <summary><strong>Table of Contents</strong> (click to expand)</summary>

- [Getting Started](#-getting-started)
- [Features](#️-features-working-on)
- [Compilation](#️-compilation)
- [Compilation Requirements](#-requirements)
- [Compilation Steps](#-steps)
- [Packaging](#-packaging)
- [Built and Managed with](#️-built-and-managed-with)
- [Contributing](#-contributing)
- [Versioning](#-versioning)
- [Authors](#-authors)
- [License](#-license)
- [Todos](#-todos)
  </details>


WestgateXL is a custom Minecraft launcher written from the ground up in electron/react. Its main goal is to make it easy and enjoyable to manage different Minecraft versions and servers, bringing the playing and modding experience to the next level!

## 🚀 Getting Started

Below you will find anything you need to know about the launcher. If you want to download a stable release you can do it from our official website: https://braxon.com, if you want the latest testing features you can clone the repo and compile it yourself.

## 🎮 Download

To download the latest version, you can either click [here](https://github.com/FiVVR/WestgateXLauncher/releases) and select the appropriate version for your operating system or visit our [website](https://braxon.com).

## 🎨 Features (Working on)

- Java Autorunner. (You don't need to have java installed, a suitable version will be downloaded automatically)
- Log console. Always know what's happening
- It's as easy as pie to install either the vanilla game and to install forge. No further action from the user is required.
- It goes without saying that it has a built-in autoupdater, so you will never need to download a new version manually.
- Vanilla, Forge and Curse modpacks download and autoupdater
- Built-in manager for Minecraft servers
- Cloud sync of game saves. With this you will never lose your saves again!

You can also:

- Import and export modpacks from and to other launchers
- Drag and drop instances wherever you like them, just like in your desktop
- Keep track of the time you played each instance
- Add instances to the download queue, they will automatically download one after the other
- Manage your minecraft skin directly from the launcher
- Directly connect to a server from the launcher using quick launch

Keep in mind that not all of these features are yet part of the launcher. We are constantly updating the code adding new features. Feel free to help us :)

## 💾 Compilation

These are the steps to compile it yourself.

### ⚙️ Requirements

You need the following softwares installed:

- Nodejs (> 8)
- yarn

### ▶️ Steps

Install the dependencies and devDependencies.

```sh
$ cd WestgateXLauncher
$ yarn
```

Start the development environment

```sh
$ yarn dev
```

For production environment...

```sh
$ yarn start
```

### 🚚 Packaging

To package apps for the MACOS platform:

```sh
$ yarn package
```

To package apps for the WinOS platform:

```sh
$ yarn package-win
```

## 🚀 Built and managed with

- [vbCODE](https://code.visualstudio.com/) - Best IDE Editor
- [Javascript](https://developer.mozilla.org/bm/docs/Web/JavaScript) - Language used
- [React](https://reactjs.org/) - JS Framework
- [Redux](https://redux.js.org/) - React state management
- [NodeJS](https://nodejs.org/en/) - JS Runtime
- [Electron](https://electronjs.org/) - JS Framework
- [Travis CI](https://travis-ci.org/) - CI Service
- [Codacy](https://www.codacy.com/) - Automated code review
- [Webpack](https://webpack.js.org/) - JS module bundler
- [Babel](https://babeljs.io/) - JS Transpiler
- [ESLint](https://eslint.org/) - JS Linter
- [Ant Design](https://ant.design/) - UI Design Language

## 🎁 Contributing
[view here first](#WestgateXLauncher/blob/master/Contributing.md)
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## 📜 Versioning

We use [SemVer](http://semver.org) as versioning system.

## ❤️ Authors

- **Davide Ceschia** - _Initial work_ - [GorillaDevs](https://github.com/gorilla-devs) Thanks bro
- **Westgate Studios** _The Company of Course_ - [Westgate Studios](https://github.com/Braxon)
- **NanobugXL** _Because-Y-Not?_ - [FiVVR](https://github.com/FiVVR)

See also the list of [contributors](https://github.com/FiVVR/WestgateXLauncher/contributors) who participated in this project.

## 🎓 License

This project is licensed under the GNU GPL V3.0 - see the [LICENSE](LICENSE) file for details

## ✏️ Todos

Here is the complete list of things we want to do. If you want to help us doing them or want to suggest some new ideas, comment here!
[TODOS/IDEAS](https://github.com/users/FiVVR/projects/1#column-5040297)

## ✏️ Bug Reports

Please use the link below to post a Report
[POST HERE FIRST](https://github.com/FiVVR/WestgateXLauncher/issues/new/choose)
[VIEW THE REPORTS HERE](https://github.com/users/FiVVR/projects/1#column-5039882)

## View Fossa Reports

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FFiVVR%2FWingateXLauncher.svg?style=for-the-badge)](https://app.fossa.com/projects/git%2Bgithub.com%2FFiVVR%2FWingateXLauncher?ref=badge_shield) [![Build Status](https://img.shields.io/github/forks/FiVVR/WestgateXLauncher.svg?style=for-the-badge)](https://github.com/FiVVR/WestgateXLauncher) [![License](https://img.shields.io/github/license/FiVVR/WestgateXLauncher.svg?style=for-the-badge)](https://github.com/FiVVR/WestgateXLauncher)
