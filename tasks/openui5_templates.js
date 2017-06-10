/*
 * grunt-openui5-templates
 * https://github.com/saphka/grunt-openui5-templates
 *
 * Copyright (c) 2017 saphka
 * Licensed under the MIT license.
 */

'use strict';

var path = require("path");
var mustache = require("mustache");

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('openui5_templates', 'OpenUI5 Templates', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
                dest: '.',
                namespace: '',
                title: '',
                description: '',
                componentHierarchy: '',
                standalone: false,
                serviceURL: "/here/goes/your/serviceurl/",
                worklist: {
                    edit: false,
                    editSmart: false,
                    objectCollection: "",
                    objectCollectionKey: "",
                    objectCollectionTitle: "",
                    objectCollectionNumber: "",
                    objectCollectionUnit: ""
                }
            }),
            namespaceRegEx = /^(?!sap)[a-z][a-z 0-9]*(?:\.[a-z][a-z 0-9]*)*$/;

        if (!namespaceRegEx.test(options.namespace)) {
            grunt.fail.warn('Namespace incorrect');
            return;
        }

        // options.dest = path.join(options.dest, 'webapp');

        var templatePath = path.join(__dirname, '..', 'templates'),
            template = "",
            parameters = {
                ApplicationNamespace: {
                    value: options.namespace,
                    depValue: options.namespace.replace(/\./g, '/')
                },
                ApplicationTitle: {
                    value: options.title
                },
                ApplicationDescription: {
                    value: options.description
                },
                ApplicationComponentHierarchy: {
                    value: options.componentHierarchy
                },
                FLP: {
                    value: {
                        value: !options.standalone
                    }
                },
                NavigationIntent : options.title.replace(new RegExp("\\.|/|\\\\|-|\\s", "g"), ""),
                ServiceURL : options.serviceURL
            },
            environment = {
                internal: false,
                resourcePath: ''
            },
            templateData = {},
            fileFilter = [];

        if (options.worklist) {
            template = 'worklist';
            templateData.worklist = {
                environment: environment,
                parameters: parameters
            };

            parameters.Edit = {
                value: options.worklist.edit
            };

            fileFilter = fileFilter.concat([
                'webapp/controller/Edit.controller.js',
                'webapp/view/Edit.view.xml',
                'webapp/view/MessagePopover.fragment.xml',
                'webapp/test/integration/CrudJourney.js',
                'webapp/test/integration/pages/Edit.js'
            ]);

            parameters.EditSmart = {
                value: options.worklist.editSmart
            };
            parameters.ObjectCollection = {
                value: {
                    name: options.worklist.objectCollection
                }
            };
            parameters.ObjectCollection_Key = {
                value: {
                    name: options.worklist.objectCollectionKey
                }
            };
            parameters.Object_Identifier = {
                value: {
                    name: options.worklist.objectCollectionTitle
                }
            };
            parameters.Object_Number = {
                value: {
                    name: options.worklist.objectCollectionNumber
                }
            };
            parameters.Object_UnitOfMeasure = {
                value: {
                    name: options.worklist.objectCollectionUnit
                }
            };
        } else if (options.masterdetail) {
            template = 'masterdetail';
        } else {
            grunt.fail.warn('Template not specified');
            return;
        }

        fileFilter = fileFilter.concat((options.standalone) ?
            [
                'webapp/test/flpSandbox.html',
                'webapp/test/flpSandboxMockServer.html',
                'webapp/test/integration/FLPIntegrationJourney.js'
            ] :
            [
                'webapp/index.html',
                'webapp/test/mockServer.html'
            ]
        );

        templatePath = path.join(templatePath, template);
        if (!grunt.file.isDir(templatePath)) {
            grunt.fail.warn('Template directory "' + templatePath + '" could not be found');
            return;
        }

        grunt.verbose.writeln('Template files are located at "' + templatePath + '"');
        grunt.verbose.writeln('Template will be copied into "' + options.dest + '"');

        // grunt.template.addDelimiters('double-braces', '{{', '}}');

        var count = grunt.file.expandMapping([path.join(templatePath, '**/*.tmpl')], options.dest, {
            rename: function (dest, matchedSrcPath) {
                return path.join(dest, path.relative(templatePath, matchedSrcPath).replace(/\.tmpl$/, ''));
            }
        }).map(function (file) {
            grunt.verbose.writeln('Processing file ' + file.src);

            var content = grunt.file.read(file.src);

            // content = content.replace(/{{/g, '{{&').replace(/{{&#if /g,'{{#').replace(/{{&\/if/g,'{{/').replace(/formatNamespace 1worklist\.parameters\.ApplicationNamespace\.value/g,
            // '1worklist.parameters.ApplicationNamespace.depValue').replace(/1worklist/g,'worklist');

            content = mustache.render(content, templateData);

            grunt.verbose.writeln('File will be created at ' + file.dest);

            grunt.file.write(file.dest, content);
        }).length;

        count -= fileFilter.map(function (file) {
            grunt.file.delete(path.join(options.dest, file));
        }).length;

        // Print a success message.
        grunt.log.writeln('Template "' + template + '" created. ' + count + ' files copied.');

        grunt.verbose.writeln('Template copied into "' + options.dest + '"');
    });

};