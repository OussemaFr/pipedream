import { axios } from "@pipedream/platform";

export default {
  type: "app",
  app: "socialapis",
  propDefinitions: {
    pageUrl: {
      type: "string",
      label: "Page URL",
      description: "The Facebook page URL, e.g. `https://www.facebook.com/nike`",
    },
    postUrl: {
      type: "string",
      label: "Post URL",
      description: "The Facebook post or reel URL",
    },
    instagramUsername: {
      type: "string",
      label: "Instagram Username",
      description: "The Instagram username, without the `@`, e.g. `nike`",
    },
    endCursor: {
      type: "string",
      label: "End Cursor",
      description: "The `end_cursor` returned by the previous call, to get the next page of results",
      optional: true,
    },
  },
  methods: {
    _baseUrl() {
      return "https://api.socialapis.io";
    },
    _headers() {
      return {
        "x-api-token": `${this.$auth.api_token}`,
      };
    },
    _makeRequest({
      $ = this, path, ...opts
    }) {
      return axios($, {
        url: this._baseUrl() + path,
        headers: this._headers(),
        ...opts,
      });
    },
    getPageDetails(opts = {}) {
      return this._makeRequest({
        path: "/facebook/pages/details",
        ...opts,
      });
    },
    getPagePosts(opts = {}) {
      return this._makeRequest({
        path: "/facebook/pages/posts",
        ...opts,
      });
    },
    getPostComments(opts = {}) {
      return this._makeRequest({
        path: "/facebook/posts/comments",
        ...opts,
      });
    },
    searchAds(opts = {}) {
      return this._makeRequest({
        path: "/facebook/ads/search",
        ...opts,
      });
    },
    getInstagramProfile(opts = {}) {
      return this._makeRequest({
        path: "/instagram/profile/details",
        ...opts,
      });
    },
    getInstagramProfilePosts(opts = {}) {
      return this._makeRequest({
        path: "/instagram/profile/posts",
        ...opts,
      });
    },
    getUsage(opts = {}) {
      return this._makeRequest({
        path: "/usage",
        ...opts,
      });
    },
  },
};
