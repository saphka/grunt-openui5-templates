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
            },
            md_flp_unit_line_line_unit: {
                options: {
                    dest: 'tmp/md_flp_unit_line_line_unit',
                    namespace: 'md.flp.unit.line.line.unit',
                    title: 'md_flp_unit_line_line_unit',
                    masterdetail: {
                        objectCollection: 'Products',
                        objectCollectionKey: 'ID',
                        objectCollectionTitle: 'Description',
                        objectCollectionNumber: 'Rating',
                        objectCollectionUnit: 'Price',
                        lineItemCollection: 'Supplier',
                        lineItemCollectionKey: 'ID',
                        lineItemCollectionTitle: 'Name',
                        lineItemCollectionNumber: 'Concurrency',
                        lineItemCollectionUnit: 'Address/City'
                    }
                }
            },
            md_flp_no_unit_line_line_unit: {
                options: {
                    dest: 'tmp/md_flp_no_unit_line_line_unit',
                    namespace: 'md.flp.no.unit.line.line.unit',
                    title: 'md_flp_no_unit_line_line_unit',
                    masterdetail: {
                        objectCollection: 'Products',
                        objectCollectionKey: 'ID',
                        objectCollectionTitle: 'Description',
                        lineItemCollection: 'Supplier',
                        lineItemCollectionKey: 'ID',
                        lineItemCollectionTitle: 'Name',
                        lineItemCollectionNumber: 'Concurrency',
                        lineItemCollectionUnit: 'Address/City'
                    }
                }
            },
            md_flp_no_unit_line_no_line_unit: {
                options: {
                    dest: 'tmp/md_flp_no_unit_line_no_line_unit',
                    namespace: 'md.flp.no.unit.line.no.line.unit',
                    title: 'md_flp_no_unit_line_no_line_unit',
                    masterdetail: {
                        objectCollection: 'Products',
                        objectCollectionKey: 'ID',
                        objectCollectionTitle: 'Description',
                        lineItemCollection: 'Supplier',
                        lineItemCollectionKey: 'ID',
                        lineItemCollectionTitle: 'Name'
                    }
                }
            },
            md_flp_no_unit_no_line: {
                options: {
                    dest: 'tmp/md_flp_no_unit_no_line',
                    namespace: 'md.flp.no.unit.no.line',
                    title: 'md_flp_no_unit_no_line',
                    masterdetail: {
                        objectCollection: 'Products',
                        objectCollectionKey: 'ID',
                        objectCollectionTitle: 'Description'
                    }
                }
            },
            md_flp_unit_line_no_line_unit: {
                options: {
                    dest: 'tmp/md_flp_unit_line_no_line_unit',
                    namespace: 'md.flp.unit.line.no.line.unit',
                    title: 'md_flp_unit_line_no_line_unit',
                    masterdetail: {
                        objectCollection: 'Products',
                        objectCollectionKey: 'ID',
                        objectCollectionTitle: 'Description',
                        objectCollectionNumber: 'Rating',
                        objectCollectionUnit: 'Price',
                        lineItemCollection: 'Supplier',
                        lineItemCollectionKey: 'ID',
                        lineItemCollectionTitle: 'Name'
                    }
                }
            },
            md_flp_unit_no_line: {
                options: {
                    dest: 'tmp/md_flp_unit_no_line',
                    namespace: 'md.flp.unit.no.line',
                    title: 'md_flp_unit_no_line',
                    masterdetail: {
                        objectCollection: 'Products',
                        objectCollectionKey: 'ID',
                        objectCollectionTitle: 'Description',
                        objectCollectionNumber: 'Rating',
                        objectCollectionUnit: 'Price'
                    }
                }
            },
            md_standalone_no_unit_line_line_unit: {
                options: {
                    dest: 'tmp/md_standalone_no_unit_line_line_unit',
                    namespace: 'md.standalone.no.unit.line.line.unit',
                    title: 'md_standalone_no_unit_line_line_unit',
                    standalone: true,
                    masterdetail: {
                        objectCollection: 'Products',
                        objectCollectionKey: 'ID',
                        objectCollectionTitle: 'Description',
                        lineItemCollection: 'Supplier',
                        lineItemCollectionKey: 'ID',
                        lineItemCollectionTitle: 'Name',
                        lineItemCollectionNumber: 'Concurrency',
                        lineItemCollectionUnit: 'Address/City'
                    }
                }
            },
            md_standalone_no_unit_line_no_line_unit: {
                options: {
                    dest: 'tmp/md_standalone_no_unit_line_no_line_unit',
                    namespace: 'md.standalone.no.unit.line.no.line.unit',
                    title: 'md_standalone_no_unit_line_no_line_unit',
                    standalone: true,
                    masterdetail: {
                        objectCollection: 'Products',
                        objectCollectionKey: 'ID',
                        objectCollectionTitle: 'Description',
                        lineItemCollection: 'Supplier',
                        lineItemCollectionKey: 'ID',
                        lineItemCollectionTitle: 'Name'
                    }
                }
            },
            md_standalone_no_unit_no_line: {
                options: {
                    dest: 'tmp/md_standalone_no_unit_no_line',
                    namespace: 'md.standalone.no.unit.no.line',
                    title: 'md_standalone_no_unit_no_line',
                    standalone: true,
                    masterdetail: {
                        objectCollection: 'Products',
                        objectCollectionKey: 'ID',
                        objectCollectionTitle: 'Description'
                    }
                }
            },
            md_standalone_unit_line_line_unit: {
                options: {
                    dest: 'tmp/md_standalone_unit_line_line_unit',
                    namespace: 'md.standalone.unit.line.line.unit',
                    title: 'md_standalone_unit_line_line_unit',
                    standalone: true,
                    masterdetail: {
                        objectCollection: 'Products',
                        objectCollectionKey: 'ID',
                        objectCollectionTitle: 'Description',
                        objectCollectionNumber: 'Rating',
                        objectCollectionUnit: 'Price',
                        lineItemCollection: 'Supplier',
                        lineItemCollectionKey: 'ID',
                        lineItemCollectionTitle: 'Name',
                        lineItemCollectionNumber: 'Concurrency',
                        lineItemCollectionUnit: 'Address/City'
                    }
                }
            },
            md_standalone_unit_line_no_line_unit: {
                options: {
                    dest: 'tmp/md_standalone_unit_line_no_line_unit',
                    namespace: 'md.standalone.unit.line.no.line.unit',
                    title: 'md_standalone_unit_line_no_line_unit',
                    standalone: true,
                    masterdetail: {
                        objectCollection: 'Products',
                        objectCollectionKey: 'ID',
                        objectCollectionTitle: 'Description',
                        objectCollectionNumber: 'Rating',
                        objectCollectionUnit: 'Price',
                        lineItemCollection: 'Supplier',
                        lineItemCollectionKey: 'ID',
                        lineItemCollectionTitle: 'Name'
                    }
                }
            },
            md_standalone_unit_no_line: {
                options: {
                    dest: 'tmp/md_standalone_unit_no_line',
                    namespace: 'md.standalone.unit.no.line',
                    title: 'md_standalone_unit_no_line',
                    standalone: true,
                    masterdetail: {
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
