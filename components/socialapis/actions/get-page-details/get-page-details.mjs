import app from "../../socialapis.app.mjs";

export default {
  key: "socialapis-get-page-details",
  name: "Get Facebook Page Details",
  description: "Get a public Facebook page's profile: name, category, follower and like counts, bio, contact info and rating. 1 credit (5 with exact follower count). [See the documentation](https://docs.socialapis.io)",
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
    exactFollowersCount: {
      type: "boolean",
      label: "Exact Followers Count",
      description: "Return the exact follower count (e.g. 38,493,217 instead of 38M). Costs 5 credits instead of 1.",
      optional: true,
    },
  },
  async run({ $ }) {
    const response = await this.app.getPageDetails({
      $,
      params: {
        link: this.pageUrl,
        exact_followers_count: this.exactFollowersCount,
      },
    });
    $.export("$summary", `Successfully retrieved details for ${this.pageUrl}`);
    return response;
  },
};
