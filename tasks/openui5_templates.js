/*
 * grunt-openui5-templates
 * https://github.com/saphka/grunt-openui5-templates
 *
 * Copyright (c) 2017 saphka
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var mustache = require('mustache');

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
                serviceURL: '/here/goes/your/serviceurl/'
            }),
            namespaceRegEx = /^(?!sap)[a-z][a-z 0-9]*(?:\.[a-z][a-z 0-9]*)*$/;

        if (!namespaceRegEx.test(options.namespace)) {
            grunt.fail.warn('Namespace incorrect');
        }

        // options.dest = path.join(options.dest, 'webapp');

        var templatePath = path.join(__dirname, '..', 'templates'),
            template = '',
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
                NavigationIntent: options.title.replace(new RegExp('\.|/|\\|-|\s', 'g'), ''),
                ServiceURL: options.serviceURL
            },
            environment = {
                internal: false,
                resourcePath: ''
            },
            templateData = {},
            fileFilter = [];

        if (options.worklist) {
            var worklistOptions = this.options({
                worklist: {
                    edit: false,
                    editSmart: false,
                    objectCollection: '',
                    objectCollectionKey: '',
                    objectCollectionTitle: '',
                    objectCollectionNumber: '',
                    objectCollectionUnit: ''
                }
            });
            template = 'worklist';
            templateData.worklist = {
                environment: environment,
                parameters: parameters
            };

            if (!worklistOptions.edit) {
                fileFilter = fileFilter.concat([
                    'webapp/controller/Edit.controller.js',
                    'webapp/view/Edit.view.xml',
                    'webapp/view/MessagePopover.fragment.xml',
                    'webapp/test/integration/CrudJourney.js',
                    'webapp/test/integration/pages/Edit.js'
                ]);
            }

            parameters.Edit = {
                value: worklistOptions.edit
            };

            parameters.EditSmart = {
                value: worklistOptions.editSmart && !worklistOptions.edit
            };
            parameters.ObjectCollection = {
                value: {
                    name: worklistOptions.objectCollection
                }
            };
            parameters.ObjectCollection_Key = {
                value: {
                    name: worklistOptions.objectCollectionKey
                }
            };
            parameters.Object_Identifier = {
                value: {
                    name: worklistOptions.objectCollectionTitle
                }
            };
            parameters.Object_Number = {
                value: {
                    name: worklistOptions.objectCollectionNumber
                }
            };
            parameters.Object_UnitOfMeasure = {
                value: {
                    name: worklistOptions.objectCollectionUnit
                }
            };
        } else if (options.masterdetail) {
            var masterdetailOptions = this.options({
                masterdetail: {
                    objectCollection: '',
                    objectCollectionKey: '',
                    objectCollectionTitle: '',
                    objectCollectionNumber: '',
                    objectCollectionUnit: '',
                    lineItemCollection: '',
                    lineItemCollectionKey: '',
                    lineItemCollectionTitle : '',
                    lineItemCollectionNumber: '',
                    lineItemCollectionUnit: ''
                }
            });
            template = 'masterdetail';
            templateData = {
                environment: environment,
                parameters: parameters
            };

            if (!masterdetailOptions.objectCollectionNumber) {
                fileFilter = fileFilter.concat([
                    'webapp/model/grouper.js',
                    'webapp/test/unit/model/grouper.js',
                    'webapp/model/GroupSortState.js',
                    'webapp/test/unit/model/GroupSortState.js'
                ]);
            }

            parameters.ObjectCollection = {
                value: {
                    name: masterdetailOptions.objectCollection
                }
            };
            parameters.ObjectCollection_Key = {
                value: {
                    name: masterdetailOptions.objectCollectionKey
                }
            };
            parameters.Object_Identifier = {
                value: {
                    name: masterdetailOptions.objectCollectionTitle
                }
            };
            parameters.Object_Number = {
                value: {
                    name: masterdetailOptions.objectCollectionNumber
                }
            };
            parameters.Object_UnitOfMeasure = {
                value: {
                    name: masterdetailOptions.objectCollectionUnit
                }
            };

            parameters.LineItemCollection = {
                value: {
                    name: masterdetailOptions.lineItemCollection
                }
            };
            parameters.LineItemCollection_Key = {
                value: {
                    name: masterdetailOptions.lineItemCollectionKey
                }
            };
            parameters.LineItem_Identifier = {
                value: {
                    name: masterdetailOptions.lineItemCollectionTitle
                }
            };
            parameters.LineItem_Number = {
                value: {
                    name: masterdetailOptions.lineItemCollectionNumber
                }
            };
            parameters.LineItem_UnitOfMeasure = {
                value: {
                    name: masterdetailOptions.lineItemCollectionUnit
                }
            };


        } else {
            grunt.fail.warn('Template not specified');
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

            // content = content.replace(/{{/g, '{{&').replace(/{{&#if /g, '{{#').replace(/{{&\/if/g, '{{/').replace(/{{&#unless /g, '{{^').replace(/{{&\/unless/g, '{{/').replace(/formatNamespace 2masterdetail\.parameters\.ApplicationNamespace\.value/g,
            //     '2masterdetail.parameters.ApplicationNamespace.depValue').replace(/2masterdetail/g, 'masterdetail').replace(/{{&else}}/g, '{{/}}{{^}}');

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
