---
title: Minetest Privacy Policy
description: Privacy policy for the Minetest application.
small: |
  Last updated: 2023-05-14
  (<a href="https://github.com/minetest/minetest.github.io/commits/master/app-privacy-policy.md">View updates</a>)
layout: page_subtitle
---

<style>
	h2 {
		margin-top: 5rem !important;
	}
</style>

Minetest may connect to the following services during its operation:

* The main website (www.minetest.net): used to get the most recent version
* The server list: used to load the server list in "Play Online"
* ContentDB: used to power the Browse Online Content dialog
* Game servers: third-party servers when playing online

Note: this policy only applies to the Minetest application, accessing the
mentioned services directly using a web browser is not covered.

### Table of contents

- [Loading server list](#loading-server-list)
	- [Information collected](#information-collected)
	- [How it is used](#how-it-is-used)
	- [Who has access](#who-has-access)
	- [Period of retention](#period-of-retention)
	- [Location](#location)
- [Browsing Online Content (ContentDB)](#browsing-online-content-contentdb)
	- [Information collected](#information-collected-1)
	- [How it is used](#how-it-is-used-1)
	- [Who has access](#who-has-access-1)
	- [Period of retention](#period-of-retention-1)
	- [Location](#location-1)
	- [Removal requests](#removal-requests)
- [Version checking](#version-checking)
	- [Information collected](#information-collected-2)
	- [How it is used](#how-it-is-used-2)
- [Online play](#online-play)
- [Third parties](#third-parties)
- [Future changes to privacy policy](#future-changes-to-privacy-policy)


## Loading server list

### Information collected

When you open the Play Online tab, Minetest will request the server list.
The following information will be transferred or included:

* IP address
* Minetest version
* Platform, OS, device, etc

### How it is used

HTTP requests are logged to aid with debugging, development and user
support.
They may also be used to generate anonymized, aggregated user statistics.

### Who has access

sfan5 runs the server list and has access to the logs. Logs with personal
information removed may be shared with others to aid with debugging or
development.

### Period of retention

Logged HTTP requests are stored for up to 3 months.

### Location

The server list is currently located in the Netherlands.
By using this service, you give permission for the data to be moved as needed.


## Browsing Online Content (ContentDB)

You can find more information on
[ContentDB's privacy policy](https://content.minetest.net/privacy_policy/).

### Information collected

Requests to [ContentDB](https://content.minetest.net) will be made when using
the ContentDB dialog found at Content > Browse online content.
The following information will be transferred or included:

* IP address
* Page URL
* Minetest version
* Platform, OS, device, etc

### How it is used

HTTP requests are logged to aid with debugging, development, and aggregated
statistics.

Requests (such as downloads) are used for aggregated statistics and for
calculating the popularity of packages. Download counts are shown for each
package and release, and there are also download graphs available for each
package.

Whether an IP address has downloaded a package or release is cached to prevent
downloads from being counted multiple times per IP address, but this information
is deleted regularly.

### Who has access

rubenwardy runs ContentDB and has access to the logs. Logs with personal
information removed may be shared with others to aid with debugging or
development.

### Period of retention

Logged HTTP requests are stored using log rotation, meaning that any requests
will be forgotten within a few weeks.

### Location

ContentDB is currently located in Germany.
By using this service, you give permission for the data to be moved as needed.

### Removal requests

See [ContentDB's privacy policy](https://content.minetest.net/privacy_policy/#removal-requests).


## Version checking

### Information collected

When you open Minetest, it may contact www.minetest.net to fetch information
about the most recent version. The following information will be transferred or
included:

* IP address
* Minetest version
* Platform, OS, device, etc

### How it is used

The version information is hosted on GitHub Pages.
See [About GitHub Pages > Data collection](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection):

> When a GitHub Pages site is visited, the visitor's IP address is logged and
> stored for security purposes, regardless of whether the visitor has signed
> into GitHub or not. For more information about GitHub's security practices,
> see
> [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement).


## Online play

Minetest allows you to play online on multiplayer game servers. Please note that
game servers are third-party, Minetest acts like a web browser connecting to a
website. Therefore, please refer to the game server's privacy policy.


## Third parties

We do not share any personal information with third parties.


## Future changes to privacy policy

We will alert any future changes to the privacy policy via posts on the
Minetest forum and by the last updated date at the top of this page.
