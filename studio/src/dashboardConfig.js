export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611ff0d761ab839b603cf5dc",
                  title: "Sanity Studio",
                  name: "pelorus-financial-group-studio",
                  apiId: "36a3ac93-c296-4e8a-bbcb-382a53bfaf64",
                },
                {
                  buildHookId: "611ff0d7df8dc8a4fb10ce06",
                  title: "Blog Website",
                  name: "pelorus-financial-group",
                  apiId: "af47d120-a6e1-452e-9285-783b3264a9b8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/hamletavetisian/pelorus-financial-group",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://pelorus-financial-group.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
