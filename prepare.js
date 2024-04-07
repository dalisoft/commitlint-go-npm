import { prepare, maps } from "binary2npm";

maps.arch.arm64 = "arm64";
maps.vendor = {};
maps.os = {
  darwin: "Darwin",
  win32: "Windows",
  linux: "Linux",
};

await prepare({
  remote: "github",
  author: "conventionalcommit",
  repository: "commitlint",
  remoteToken: process.env.GITHUB_TOKEN,
  binary: "commitlint",
  stableOnly: false,
  orders: ["binary", "version", "os", "arch"],
});
