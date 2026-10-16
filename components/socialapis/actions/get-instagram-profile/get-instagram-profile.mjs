import app from "../../socialapis.app.mjs";

export default {
  key: "socialapis-get-instagram-profile",
  name: "Get Instagram Profile",
  description: "Get a public Instagram profile: bio, follower, following and post counts, verification and related profiles. [See the documentation](https://docs.socialapis.io)",
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
  },
  async run({ $ }) {
    const response = await this.app.getInstagramProfile({
      $,
      params: {
        username: this.username,
      },
    });
    $.export("$summary", `Successfully retrieved the Instagram profile @${this.username}`);
    return response;
  },
};
