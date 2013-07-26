Spree::HomeController.class_eval do
  require 'spree/base_controller'
    
  def index
    slider = Spree::Taxon.where(:name => 'Slider').first
    @slider_products = slider.products.active if slider

    featured = Spree::Taxon.where(:name => 'Featured').first
    @featured_products = featured.products.active if featured

    latest = Spree::Taxon.where(:name => 'Latest').first
    @latest_products = latest.products.active if latest
    
    @taxons_category ||= Spree::Taxonomy.where(:name => "Categories").first.root.children

    
    @searcher = Spree::Config.searcher_class.new(params)
    @searcher.current_user = try_spree_current_user
    @searcher.current_currency = current_currency
    @products = @searcher.retrieve_products.order("spree_products.created_at DESC")
    respond_with(@products)
    
  end

end
