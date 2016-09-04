'use strict'

const generators = require('yeoman-generator')
const yosay = require('yosay')
const slugify = require('underscore.string').slugify

module.exports = generators.Base.extend({

    initializing: function () {
        this.log(yosay('Welcome to stfsy\'s node gen. You may pass.'))
        this.year = new Date().getFullYear()

        this.appname = slugify(this.appname)
    },
    prompting: function () {
        return this.prompt([
            {
                type: 'input',
                name: 'app',
                message: 'Your project name:',
                validate: (input) => {
                    return input && input.length > 0
                },
                default: this.appname // Default to current folder name
            }, {
                type: 'input',
                name: 'description',
                validate: (input) => {
                    return input && input.length > 0
                },
                message: 'Your projects description:'
            }, {
                type: 'input',
                name: 'author',
                required: true,
                validate: (input) => {
                    return input && input.length > 0
                },
                default: this.author,
                message: 'Your name:'
            }, {
                type: 'input',
                name: 'alias',
                validate: (input) => {
                    return input && input.length > 0
                },
                default: this.user.git.name(),
                message: 'Your github alias:'
            }]).then((answers) => {

                for (let key in answers) {
                    this[key] = answers[key]
                }
            })
    },
    configuring: {
        path: function () {
            this.mkdir("lib")
            this.mkdir("test")
            this.mkdir("test/spec")
        },
        packagejson: function () {
            this.fs.copyTpl(this.templatePath('package.json'),
                this.destinationPath('package.json'), this)
        },
        jsdocjson: function () {
            this.fs.copyTpl(this.templatePath('.jsdoc.json'),
                this.destinationPath('.jsdoc.json'), this)
        },
        readme: function () {
            this.fs.copyTpl(this.templatePath('README.md'),
                this.destinationPath('README.md'), this)
        },
        license: function () {
            this.fs.copyTpl(this.templatePath('LICENSE'),
                this.destinationPath('LICENSE'), this)
        },
        travis: function () {
            this.fs.copyTpl(this.templatePath('.travis.yml'),
                this.destinationPath('.travis.yml'), this)
        },
        gitignore: function () {
            this.fs.copyTpl(this.templatePath('.gitignore'),
                this.destinationPath('.gitignore'), this)
        },
        indexjs: function () {
            this.fs.copyTpl(this.templatePath('lib/index.js'),
                this.destinationPath('lib/index.js'))
        },
        indexspec: function () {
            this.fs.copyTpl(this.templatePath('lib/index.spec.js'),
                this.destinationPath('test/spec/index.js'))
        }
    },
    install: function () {
        this.installDependencies({
            bower: false,
            npm: true
        })
    }
})

