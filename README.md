# [Minetest Website](https://www.minetest.net)

[![Build status](https://github.com/minetest/minetest.github.io/workflows/build/badge.svg)](https://github.com/minetest/minetest.github.io/actions)\
The official Minetest website, living at [www.minetest.net](https://www.minetest.net).

## Features

- Uses the [Bulma](https://bulma.io/) CSS framework.
- Uses modern Web design techniques: `rem` units, `hsl` colors.
- Responsive site and favicon.

## Development workflow

This site uses the [Jekyll](https://jekyllrb.com) static site generator.

- Ensure you have [Ruby](https://www.ruby-lang.org/) 2.4 or later installed.
- Install [Bundler](https://bundler.io/) by running `gem install bundler`.
  - On Linux, use a Ruby version manager such as [rbenv](https://github.com/rbenv/rbenv)
    to easily switch to any version and avoid permission issues.
- Install dependencies by running `bundle install`.
- Use `bundle exec jekyll serve` to automatically build the site
  and serve it locally.

### Browser support

When working on new features, keep in mind this website only supports
*evergreen browsers*:

- Chrome (two most recent versions)
- Edge (two most recent versions)
- Firefox (two most recent versions + latest ESR version)
- Opera (two most recent versions)
- Safari (two most recent versions)

Internet Explorer isn't supported.

## License

Copyright © 2015-2020 Hugo Locurcio and contributors

Unless otherwise specified, code is licensed under the MIT license.
Media and content are licensed under
[CC BY-SA 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/).
