"use strict"
const Generator = require("yeoman-generator")
const chalk = require("chalk")
const yosay = require("yosay")
const fs = require("fs")

const additionalPackages = [
  "husky",
  "lint-staged",
  "prettier",
  "enzyme",
  "enzyme-adapter-react-16",
  "react-test-renderer"
]
module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `You have the foresight and fortitude to run the ${chalk.red(
          "generator-complete-react-app"
        )} generator!`
      )
    )

    const prompts = [
      {
        type: "confirm",
        name: "inProjectRoot",
        message: "Confirming we are in the project root?",
        default: true
      }
    ]

    return this.prompt(prompts).then(props => {
      // To access props later use this.answers.someAnswer; -- matches docs
      this.answers = props
    })
  }

  writing() {
    if (!this.answers.inProjectRoot) {
      throw new Error("We are not in the project root, mate! Fix it!")
    }

    this._updatePackageJson()

    this.fs.copyTpl(
      this.templatePath("dot-prettierrc.json"),
      this.destinationPath(".prettierrc")
    )
    this.fs.copyTpl(
      this.templatePath("setupTests.js"),
      this.destinationPath("src/setupTests.js")
    )
    this.fs.copyTpl(
      this.templatePath("App.test.js"),
      this.destinationPath("src/App.test.js")
    )
  }

  install() {
    this.yarnInstall(additionalPackages)
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    })
  }

  _updatePackageJson() {
    const packageJson = JSON.parse(fs.readFileSync("package.json"))
    fs.renameSync("package.json", "package.json.bak")
    if (!packageJson.scripts) {
      packageJson.scripts = {}
    }
    packageJson.scripts.precommit = "lint-staged"
    packageJson["lint-staged"] = {
      "src/**/*.{js,jsx,json,css}": ["prettier --write", "git add --verbose"]
    }
    packageJson.jest = {}
    fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2))
  }
}
