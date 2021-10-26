# Bazel Nextjs Example

This repo contains a minimalistic(ish) example of a fully working Next site under Bazel.
This involves some hacky node_modules resolution stuff in the `next.config.js`.

You can run the dev mode by running `ibazel run //next-site:dev`. 
This should work with all standard hot-reloading features.

You run a prod version of the site by doing `bazel run //next-site:start`.

### Not Included

* Examples of a proper typescript mono-repo sharing components from one package to another.
* Examples of packaging the up the prod site for use in docker or similar.

We are working on a more elaborate example that will cover those cases.
