jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"standalone/unit/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"standalone/unit/test/integration/pages/Worklist",
		"standalone/unit/test/integration/pages/Object",
		"standalone/unit/test/integration/pages/NotFound",
		"standalone/unit/test/integration/pages/Browser",
		"standalone/unit/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "standalone.unit.view."
	});

	sap.ui.require([
		"standalone/unit/test/integration/WorklistJourney",
		"standalone/unit/test/integration/ObjectJourney",
		"standalone/unit/test/integration/NavigationJourney",
		"standalone/unit/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});