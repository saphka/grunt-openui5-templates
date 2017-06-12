jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list
// * All 3 Products have at least one Supplier

sap.ui.require([
	"sap/ui/test/Opa5",
	"md/standalone/no/unit/line/line/unit/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"md/standalone/no/unit/line/line/unit/test/integration/pages/App",
	"md/standalone/no/unit/line/line/unit/test/integration/pages/Browser",
	"md/standalone/no/unit/line/line/unit/test/integration/pages/Master",
	"md/standalone/no/unit/line/line/unit/test/integration/pages/Detail",
	"md/standalone/no/unit/line/line/unit/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "md.standalone.no.unit.line.line.unit.view."
	});

	sap.ui.require([
		"md/standalone/no/unit/line/line/unit/test/integration/MasterJourney",
		"md/standalone/no/unit/line/line/unit/test/integration/NavigationJourney",
		"md/standalone/no/unit/line/line/unit/test/integration/NotFoundJourney",
		"md/standalone/no/unit/line/line/unit/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});