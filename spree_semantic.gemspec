# encoding: UTF-8
Gem::Specification.new do |s|
  s.platform    = Gem::Platform::RUBY
  s.name        = 'spree_semantic'
  s.version     = '0.0.1'
  s.summary     = 'Spree New Frontend with Semantic UI'
  s.description = 'Spree New Frontend with Semantic UI'
  s.required_ruby_version = '>= 2.0.0'

  s.author    = 'S. Tunji Turner'
  s.email     = 'vision@firstsightmedia.com'
  s.homepage  = 'https://github.com/stunjiturner/spree_semantic'

  s.files       = `git ls-files`.split("\n")
  s.test_files  = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.require_path = 'lib'
  s.requirements << 'none'

  s.add_dependency 'semantic-ui-rails', '~> 0.0.1.0'
  s.add_dependency 'less-rails-fontawesome'
  s.add_dependency 'spree_api'
  s.add_dependency 'spree_core', '~> 2.1.0'
  s.add_dependency 'spree_frontend'

  s.add_development_dependency 'capybara', '~> 2.1'
  s.add_development_dependency 'coffee-rails'
  s.add_development_dependency 'coveralls'
  s.add_development_dependency 'database_cleaner', '~> 1.0.1'
  s.add_development_dependency 'factory_girl', '~> 4.2'
  s.add_development_dependency 'ffaker'
  s.add_development_dependency 'rspec-rails',  '~> 2.13'
  s.add_development_dependency 'less-rails'
  s.add_development_dependency 'selenium-webdriver'
  s.add_development_dependency 'simplecov'
  s.add_development_dependency 'sqlite3'
  s.add_development_dependency 'launchy'
end
