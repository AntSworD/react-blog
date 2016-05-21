import { EventEmitter } from 'events';

// import dispatcher from '../dispatcher.jsx';
import siteConf from '../conf/site.json';

class BlogStore extends EventEmitter {
  constructor() {
    super();
    this.siteConf = siteConf;
  }

  getSiteConf() {
    return this.siteConf;
  }
}

const blogStore = new BlogStore();

export default blogStore;
