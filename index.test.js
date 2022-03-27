const webpack = require("webpack");

test("can run webpack", async () => {
  webpack({}, (err, stats) => {});
});
