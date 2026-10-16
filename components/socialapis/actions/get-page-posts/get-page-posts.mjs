import app from "../../socialapis.app.mjs";

export default {
  key: "socialapis-get-page-posts",
  name: "Get Facebook Page Posts",
  description: "List a public Facebook page's recent posts, newest first, with text, media, reactions, comment and share counts. Returns 3-9 posts per call and an `end_cursor` for the next page. [See the documentation](https://docs.socialapis.io)",
  version: "0.0.1",
  type: "action",
  annotations: {
    destructiveHint: false,
    openWorldHint: true,
    readOnlyHint: true,
  },
  props: {
    app,
    pageUrl: {
      propDefinition: [
        app,
        "pageUrl",
      ],
    },
    limit: {
      type: "integer",
      label: "Posts Per Call",
      description: "How many posts to return in this call (3-9)",
      min: 3,
      max: 9,
      optional: true,
    },
    endCursor: {
      propDefinition: [
        app,
        "endCursor",
      ],
    },
  },
  async run({ $ }) {
    const response = await this.app.getPagePosts({
      $,
      params: {
        link: this.pageUrl,
        limit: this.limit,
        end_cursor: this.endCursor,
      },
    });
    $.export("$summary", `Successfully retrieved posts for ${this.pageUrl}`);
    return response;
  },
};
