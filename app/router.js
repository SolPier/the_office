import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('navigation', { path: '/' });
  this.route('about-show');
  this.route('episodes');
  this.route('about-site');
});

export default Router;
