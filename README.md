# grunt-openui5-templates

> OpenUI5 Templates

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-openui5-templates --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-openui5-templates');
```

## The "openui5_templates" task

### Overview
In your project's Gruntfile, add a section named `openui5_templates` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  openui5_templates: {
    options: {
      // Task-specific options go here.
    }
  },
});
```

### Options

#### options.dest
Type: `String`
Default value: `'.'`

Destination path where the application will be created

#### options.namespace
Type: `String`
Default value: `''`

Application namespace. Parameter is mandatory

#### options.title
Type: `String`
Default value: `''`

Application title. Parameter is mandatory

#### options.description
Type: `String`
Default value: `''`

Application description

#### options.standalone
Type: `Boolean`
Default value: `false`

Create template as stand-alone or Fiori launchpad application

#### options.serviceURL
Type: `String`
Default value: `'/here/goes/your/serviceurl/'`

Main service URL. Does not load any metadata or anything. Just to fill it in manifest

#### options.worklist
Type: `Object`
Default value: `null`

Parameters, specific for Worklist template generation. If both Worklist and Master-Detail parameters are provided, Worklist application will be generated.

#### options.worklist.objectCollection
Type: `String`
Default value: `''`

Object collection name for Worklist view. Mandatory

#### options.worklist.objectCollectionKey
Type: `String`
Default value: `''`

Object collection's key parameter. Mandatory

#### options.worklist.objectCollectionTitle
Type: `String`
Default value: `''`

Object collection's title property. Mandatory

#### options.worklist.objectCollectionNumber
Type: `String`
Default value: `''`

Object collection's number property

#### options.worklist.objectCollectionUnit
Type: `String`
Default value: `''`

Object collection's unit property

#### options.worklist.edit
Type: `Boolean`
Default value: `false`

Generate edit view with simple form and edit navigation. Experimantal, wasn't tested

#### options.worklist.editSmart
Type: `Boolean`
Default value: `false`

Generate edit view with smart form and edit navigation. Experimentalm wasn't tested
If both edit and editSmart are used, simple form will be generated

#### options.masterdetail
Type: `Object`
Default value: `null`

Parameters, specific for Master-detail template generation

#### options.masterdetail.objectCollection
Type: `String`
Default value: `''`

Object collection name for Master view. Mandatory

#### options.masterdetail.objectCollectionKey
Type: `String`
Default value: `''`

Object collection's key parameter. Mandatory

#### options.masterdetail.objectCollectionTitle
Type: `String`
Default value: `''`

Object collection's title property. Mandatory

#### options.masterdetail.objectCollectionNumber
Type: `String`
Default value: `''`

Object collection's number property

#### options.masterdetail.objectCollectionUnit
Type: `String`
Default value: `''`

Object collection's unit property

#### options.masterdetail.lineItemCollection
Type: `String`
Default value: `''`

Collection name for Details view

#### options.masterdetail.lineItemCollectionKey
Type: `String`
Default value: `''`

Line collection's key parameter

#### options.masterdetail.lineItemCollectionTitle
Type: `String`
Default value: `''`

Line collection's title parameter

#### options.masterdetail.lineItemCollectionNumber
Type: `String`
Default value: `''`

Line collection's number parameter

#### options.masterdetail.lineItemCollectionUnit
Type: `String`
Default value: `''`

Line collection's unit parameter

### Usage Examples

#### Worklist template
In this example, the worklist application will be generated

```js
grunt.initConfig({
  openui5_templates: {
    worklist: {
      options: {
        dest: '.',
        namespace: 'my.worklist',
        title: 'My worklist',
        worklist: {
          objectCollection: 'Products',
          objectCollectionKey: 'ID',
          objectCollectionTitle: 'Description',
          objectCollectionNumber: 'Rating',
          objectCollectionUnit: 'Stars'
        }
      }
    }
  },
});
```

#### Master-detail template
In this example, the Master-detail application will be generated

```js
grunt.initConfig({
  openui5_templates: {
    master_detail: {
      options: {
        dest: '.',
        namespace: 'my.master.detail',
        title: 'My Master-detail',
        masterdetail: {
          objectCollection: 'Products',
          objectCollectionKey: 'ID',
          objectCollectionTitle: 'Description',
          objectCollectionNumber: 'Rating',
          objectCollectionUnit: 'Stars',
          lineItemCollection: 'Supplier',
          lineItemCollectionKey: 'ID',
          lineItemCollectionTitle: 'Name',
          lineItemCollectionNumber: 'Concurrency',
          lineItemCollectionUnit: 'Percent'
        }
      }
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.0 - Templates for SAPUI5 1.38 were added
