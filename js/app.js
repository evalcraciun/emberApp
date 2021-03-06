App = Ember.Application.create({
	 LOG_TRANSITIONS:true
});

//add testing root
App.rootElement = '#testing';

App.Router.map(function() {
  this.route('about');
  this.resource('products');
});


App.IndexController = Ember.Controller.extend({
  productsCount:6,
  logo:"images/logo.png",
  time:function() {
  	return (new Date()).toDateString()
  }.property()
});
App.ProductsRoute = Ember.Route.extend({
   model:function(){
        return App.PRODUCTS;
   }
});
App.PRODUCTS = [
    {
        title:'Flint',
        price:99,
        description:'Flint is..',
        isOnSale:true,
        image:''
    },
    {
        title:'Kingling',
        price:249,
        description:'Easily...',
        isOnSale:false,
        image:''
    }
]