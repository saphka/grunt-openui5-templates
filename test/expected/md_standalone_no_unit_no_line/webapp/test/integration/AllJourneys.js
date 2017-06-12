jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"md/standalone/no/unit/no/line/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"md/standalone/no/unit/no/line/test/integration/pages/App",
	"md/standalone/no/unit/no/line/test/integration/pages/Browser",
	"md/standalone/no/unit/no/line/test/integration/pages/Master",
	"md/standalone/no/unit/no/line/test/integration/pages/Detail",
	"md/standalone/no/unit/no/line/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "md.standalone.no.unit.no.line.view."
	});

	sap.ui.require([
		"md/standalone/no/unit/no/line/test/integration/MasterJourney",
		"md/standalone/no/unit/no/line/test/integration/NavigationJourney",
		"md/standalone/no/unit/no/line/test/integration/NotFoundJourney",
		"md/standalone/no/unit/no/line/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});