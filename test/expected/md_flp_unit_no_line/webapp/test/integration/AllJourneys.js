jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"md/flp/unit/no/line/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"md/flp/unit/no/line/test/integration/pages/App",
	"md/flp/unit/no/line/test/integration/pages/Browser",
	"md/flp/unit/no/line/test/integration/pages/Master",
	"md/flp/unit/no/line/test/integration/pages/Detail",
	"md/flp/unit/no/line/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "md.flp.unit.no.line.view."
	});

	sap.ui.require([
		"md/flp/unit/no/line/test/integration/MasterJourney",
		"md/flp/unit/no/line/test/integration/NavigationJourney",
		"md/flp/unit/no/line/test/integration/NotFoundJourney",
		"md/flp/unit/no/line/test/integration/BusyJourney",
		"md/flp/unit/no/line/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});