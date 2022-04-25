import View from '../core/view';
/**
 * type alias
type Store = {
  currentPage: number;
  feeds: NewsFeed[];
}

type News = {
  id: number;
  time_ago: string;
  title: string;
  url: string;
  user: string;
  content: string;
}

type NewsFeed = News & {
  comments_count: number;
  points: number;
  read?: boolean;
}

type NewsDetail = News & {
  comments: NewsComment[];
}

type NewsComment = News & {
  comments: NewsComment[];
  level: number;
}
*/

/**
 * interface
 */
// export interface Store {
//   currentPage: number;
//   feeds: NewsFeed[];
// }

export interface NewsStore {
  getAllFeeds: () => NewsFeed[];
  getFeed: (position: number) => NewsFeed;
  setFeeds: (feeds: NewsFeed[]) => void;
  makeRead: (id: number) => void;
  currentPage: number;
  nextPage: number;
  prevPage: number;
  numberOfFeeds: number;
  hasFeeds: boolean;
}
  
export interface News {
  readonly id: number;
  readonly time_ago: string;
  readonly title: string;
  readonly url: string;
  readonly user: string;
  readonly content: string;
}

export interface NewsFeed extends News {
  readonly comments_count: number;
  readonly points: number;
  /*readonly*/ read?: boolean;
}

export interface NewsDetail extends News {
  readonly comments: NewsComment[];
}

export interface NewsComment extends News {
  readonly comments: NewsComment[];
  readonly level: number;
}

export interface RouteInfo {
  path: string;
  page: View;
  params: RegExp | null;
}