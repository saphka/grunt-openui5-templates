/*
 * grunt-openui5-templates
 * https://github.com/saphka/grunt-openui5-templates
 *
 * Copyright (c) 2017 saphka
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        openui5_templates: {
            wl_flp_no_unit: {
                options: {
                    dest: 'tmp/wl_flp_no_unit',
                    namespace: 'flp.no.unit',
                    title: 'flp_no_unit',
                    worklist: {
                        objectCollection: 'Products',
                        objectCollectionKey: 'ID',
                        objectCollectionTitle: 'Description'
                    }
                }
            },
            wl_flp_unit: {
                options: {
                    dest: 'tmp/wl_flp_unit',
                    namespace: 'flp.unit',
                    title: 'flp_unit',
                    worklist: {
                        objectCollection: 'Products',
                        objectCollectionKey: 'ID',
                        objectCollectionTitle: 'Description',
                        objectCollectionNumber: 'Rating',
                        objectCollectionUnit: 'Price'
                    }
                }
            },
            wl_standalone_no_unit: {
                options: {
                    dest: 'tmp/wl_standalone_no_unit',
                    namespace: 'standalone.no.unit',
                    title: 'standalone_no_unit',
                    standalone: true,
                    worklist: {
                        objectCollection: 'Products',
                        objectCollectionKey: 'ID',
                        objectCollectionTitle: 'Description'
                    }
                }
            },
            wl_standalone_unit: {
                options: {
                    dest: 'tmp/wl_standalone_unit',
                    namespace: 'standalone.unit',
                    title: 'standalone_unit',
                    standalone: true,
                    worklist: {
                        objectCollection: 'Products',
                        objectCollectionKey: 'ID',
                        objectCollectionTitle: 'Description',
                        objectCollectionNumber: 'Rating',
                        objectCollectionUnit: 'Price'
                    }
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'openui5_templates', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
