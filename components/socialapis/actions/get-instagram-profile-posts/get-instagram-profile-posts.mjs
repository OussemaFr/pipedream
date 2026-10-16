import app from "../../socialapis.app.mjs";

export default {
  key: "socialapis-get-instagram-profile-posts",
  name: "Get Instagram Profile Posts",
  description: "List a public Instagram profile's posts (photos, videos, carousels) with captions, like and comment counts and media URLs, with an `end_cursor` for the next page. [See the documentation](https://docs.socialapis.io)",
  version: "0.0.1",
  type: "action",
  annotations: {
    destructiveHint: false,
    openWorldHint: true,
    readOnlyHint: true,
  },
  props: {
    app,
    username: {
      propDefinition: [
        app,
        "instagramUsername",
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
    const response = await this.app.getInstagramProfilePosts({
      $,
      params: {
        username: this.username,
        end_cursor: this.endCursor,
      },
    });
    $.export("$summary", `Successfully retrieved posts for @${this.username}`);
    return response;
  },
};
