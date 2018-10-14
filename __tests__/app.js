/* eslint-disable */
"use strict"
const path = require("path")
const fs = require("fs")
const assert = require("yeoman-assert")
const helpers = require("yeoman-test")

describe("generator-complete-react-app:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .inTmpDir(function(dir) {
        const packageJson = {
          name: "tmp",
          version: "1.0.0",
          main: "index.js",
          license: "MIT"
        }
        fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2))
        fs.mkdirSync("src")
        fs.writeFileSync("index.js", "/* nothing */\n")
      })
      .withPrompts({ inRootDir: true })
  })

  it("creates some files", () => {
    assert.file(["src/setupTests.js", ".prettierrc"])
  })
  it("uses shallow to render the app in test", () => {
    assert.fileContent("src/App.test.js", /shallow/)
  })
  it("updates package.json", done => {
    expect.assertions(2)
    fs.readFile("package.json", (err, data) => {
      const json = JSON.parse(data)
      expect(json.hasOwnProperty("jest")).toBeTruthy()
      expect(json.hasOwnProperty("lint-staged")).toBeTruthy()
      done()
    })
  })
})
