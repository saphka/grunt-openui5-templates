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
	"md/flp/no/unit/line/no/line/unit/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"md/flp/no/unit/line/no/line/unit/test/integration/pages/App",
	"md/flp/no/unit/line/no/line/unit/test/integration/pages/Browser",
	"md/flp/no/unit/line/no/line/unit/test/integration/pages/Master",
	"md/flp/no/unit/line/no/line/unit/test/integration/pages/Detail",
	"md/flp/no/unit/line/no/line/unit/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "md.flp.no.unit.line.no.line.unit.view."
	});

	sap.ui.require([
		"md/flp/no/unit/line/no/line/unit/test/integration/MasterJourney",
		"md/flp/no/unit/line/no/line/unit/test/integration/NavigationJourney",
		"md/flp/no/unit/line/no/line/unit/test/integration/NotFoundJourney",
		"md/flp/no/unit/line/no/line/unit/test/integration/BusyJourney",
		"md/flp/no/unit/line/no/line/unit/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});