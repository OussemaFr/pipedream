import app from "../../socialapis.app.mjs";

export default {
  key: "socialapis-get-post-comments",
  name: "Get Facebook Post Comments",
  description: "Get the top-level comments on a public Facebook post or reel, with an `end_cursor` for the next page. [See the documentation](https://docs.socialapis.io)",
  version: "0.0.1",
  type: "action",
  annotations: {
    destructiveHint: false,
    openWorldHint: true,
    readOnlyHint: true,
  },
  props: {
    app,
    postUrl: {
      propDefinition: [
        app,
        "postUrl",
      ],
    },
    endCursor: {
      propDefinition: [
        app,
        "endCursor",
      ],
    },
  },
  async run({ $ }) {
    const response = await this.app.getPostComments({
      $,
      params: {
        link: this.postUrl,
        end_cursor: this.endCursor,
      },
    });
    $.export("$summary", `Successfully retrieved comments for ${this.postUrl}`);
    return response;
  },
};
