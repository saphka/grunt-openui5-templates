jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"flp/no/unit/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"flp/no/unit/test/integration/pages/Worklist",
		"flp/no/unit/test/integration/pages/Object",
		"flp/no/unit/test/integration/pages/NotFound",
		"flp/no/unit/test/integration/pages/Browser",
		"flp/no/unit/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "flp.no.unit.view."
	});

	sap.ui.require([
		"flp/no/unit/test/integration/WorklistJourney",
		"flp/no/unit/test/integration/ObjectJourney",
		"flp/no/unit/test/integration/NavigationJourney",
		"flp/no/unit/test/integration/NotFoundJourney",
		"flp/no/unit/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});