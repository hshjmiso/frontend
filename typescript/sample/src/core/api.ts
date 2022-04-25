import { NewsFeed, NewsDetail} from '../types';

/** 
 * class
 */
class Api {
    url: string;
    xhr: XMLHttpRequest;
  
    constructor(url: string) {
      this.url = url;
      this.xhr = new XMLHttpRequest();
    }
  
    getRequestWithXHR<AjaxResponse>(cb: (data:AjaxResponse) => void): void {
      this.xhr.open('GET', this.url);
      this.xhr.addEventListener('load', () => {
        cb(JSON.parse(this.xhr.response) as AjaxResponse);
      });
      
      this.xhr.send();
    }

    getRequestWithPromise<AjaxResponse>(cb: (data:AjaxResponse) => void): void {
      fetch(this.url)
        .then(response => response.json())
        .then(cb)
        .catch(() => {
          console.error("fail load data");
        });
    }
    
    async request<AjaxResponse>(): Promise<AjaxResponse> {
      const response = await fetch(this.url);
      return await response.json() as AjaxResponse;
    }
  }
  
  export class NewsFeedApi extends Api {
    getDataWithXHR(cb: (data: NewsFeed[]) => void): void {
      return this.getRequestWithXHR<NewsFeed[]>(cb);
    }
    getDataWithPromise(cb: (data: NewsFeed[]) => void): void {
      return this.getRequestWithPromise<NewsFeed[]>(cb);
    }
    async getData(): Promise<NewsFeed[]> {
      return this.request<NewsFeed[]>();
    }
  }
  
  export class NewsDetailApi extends Api {
    getDataWithXHR(cb: (data: NewsDetail) => void): void {
      return this.getRequestWithXHR<NewsDetail>(cb);
    }
    getDataWithPromise(cb: (data: NewsDetail) => void): void {
      return this.getRequestWithPromise<NewsDetail>(cb);
    }
    async getData(): Promise<NewsDetail> {
      return this.request<NewsDetail>();
    }
  }
  
  /**
   * mixin
  function applyApiMixins(targetClass: any, baseClasses: any[]): void {
    baseClasses.forEach(baseClass => {
      Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
        const descriptor = Object.getOwnPropertyDescriptor(baseClass.protoype, name);
  
        if (descriptor) {
          Object.defineProperty(targetClass.prototype, name, descriptor);
        }
      });
    });
  }
  
  class Api {
    getRequest<AjaxResponse>(url: string): AjaxResponse {
      const ajax = new XMLHttpRequest();
      ajax.open('GET', url, false);
      ajax.send();
    
      return JSON.parse(ajax.response);
    }
  }
  
  class NewsFeedApi {
    getData(): NewsFeed[] {
      return this.getRequest<NewsFeed[]>(NEWS_URL);
    }
  }
  
  class NewsDetailApi {
    getData(id: string): NewsDetail {
      return this.getRequest<NewsDetail>(CONTENT_URL.replace('@id', id));
    }
  }
  
  interface NewsFeedApi extends Api {};
  interface NewsDetailApi extends Api {};
  
  applyApiMixins(NewsFeedApi, [Api]);
  applyApiMixins(NewsDetailApi, [Api]);
  */