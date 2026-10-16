import app from "../../socialapis.app.mjs";

export default {
  key: "socialapis-search-ads",
  name: "Search Meta Ads Library",
  description: "Search ads in the Meta Ads Library by keyword or advertiser page ID, filtered by country and status. [See the documentation](https://docs.socialapis.io)",
  version: "0.0.1",
  type: "action",
  annotations: {
    destructiveHint: false,
    openWorldHint: true,
    readOnlyHint: true,
  },
  props: {
    app,
    query: {
      type: "string",
      label: "Query",
      description: "Search keyword, e.g. a brand or product name",
      optional: true,
    },
    adPageId: {
      type: "string",
      label: "Ad Page ID",
      description: "Advertiser page ID from the Ads Library. Used when no query is given.",
      optional: true,
    },
    country: {
      type: "string",
      label: "Country",
      description: "Two-letter country code (e.g. `US`), or `ALL`",
      optional: true,
    },
    activeStatus: {
      type: "string",
      label: "Active Status",
      description: "Filter by ad status",
      options: [
        "ALL",
        "Active",
        "Inactive",
      ],
      optional: true,
    },
    sortData: {
      type: "string",
      label: "Sort",
      description: "Sort by impressions (high to low) or most recent",
      options: [
        "impressions",
        "recent",
      ],
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
    if (!this.query && !this.adPageId) {
      throw new Error("Provide a Query or an Ad Page ID");
    }
    const response = await this.app.searchAds({
      $,
      params: {
        query: this.query,
        ad_page_id: this.adPageId,
        country: this.country,
        activeStatus: this.activeStatus,
        sort_data: this.sortData,
        end_cursor: this.endCursor,
      },
    });
    $.export("$summary", `Successfully searched the Meta Ads Library for ${this.query || this.adPageId}`);
    return response;
  },
};
