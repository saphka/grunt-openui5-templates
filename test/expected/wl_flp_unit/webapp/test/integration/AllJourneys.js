jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"flp/unit/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"flp/unit/test/integration/pages/Worklist",
		"flp/unit/test/integration/pages/Object",
		"flp/unit/test/integration/pages/NotFound",
		"flp/unit/test/integration/pages/Browser",
		"flp/unit/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "flp.unit.view."
	});

	sap.ui.require([
		"flp/unit/test/integration/WorklistJourney",
		"flp/unit/test/integration/ObjectJourney",
		"flp/unit/test/integration/NavigationJourney",
		"flp/unit/test/integration/NotFoundJourney",
		"flp/unit/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});