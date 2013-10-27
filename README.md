SpreeSemanticUI
==============

This project aims to replace the spree_frontend's use of the skeleton css framework in favor of Semantic UI.

[![Build Status](https://secure.travis-ci.org/jdutil/spree_bootstrap.png)](http://travis-ci.org/jdutil/spree_bootstrap)
[![Code Climate](https://codeclimate.com/github/jdutil/spree_bootstrap.png)](https://codeclimate.com/github/jdutil/spree_bootstrap)
[![Coverage Status](https://coveralls.io/repos/jdutil/spree_bootstrap/badge.png?branch=master)](https://coveralls.io/r/jdutil/spree_bootstrap)
[![Dependency Status](https://gemnasium.com/jdutil/spree_bootstrap.png?travis)](https://gemnasium.com/jdutil/spree_bootstrap)


Installation
------------

Add spree_semantic to your Gemfile:

```ruby
gem 'spree_semantic', github: 'stunjiturner/spree_semantic'
```

Bundle your dependencies and run the installation generator:

```shell
bundle
bundle exec rails g spree_semantic:install
```

Testing
-------

Be sure to bundle your dependencies and then create a dummy test app for the specs to run against.

```shell
bundle
bundle exec rake test_app
bundle exec rspec spec
```

When testing your applications integration with this extension you may use it's factories.
Simply add this require statement to your spec_helper:

```ruby
require 'spree_semantic/factories'
```

Copyright (c) 2013 S. Tunji Turner, released under the New BSD License
