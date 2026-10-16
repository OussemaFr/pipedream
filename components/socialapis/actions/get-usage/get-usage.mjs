import app from "../../socialapis.app.mjs";

export default {
  key: "socialapis-get-usage",
  name: "Get Account Usage",
  description: "Get your SocialAPIs plan, credits used and credits remaining. Free, uses no credits. [See the documentation](https://docs.socialapis.io)",
  version: "0.0.1",
  type: "action",
  annotations: {
    destructiveHint: false,
    openWorldHint: true,
    readOnlyHint: true,
  },
  props: {
    app,
  },
  async run({ $ }) {
    const response = await this.app.getUsage({
      $,
    });
    $.export("$summary", "Successfully retrieved account usage");
    return response;
  },
};
