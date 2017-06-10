jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"standalone/no/unit/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"standalone/no/unit/test/integration/pages/Worklist",
		"standalone/no/unit/test/integration/pages/Object",
		"standalone/no/unit/test/integration/pages/NotFound",
		"standalone/no/unit/test/integration/pages/Browser",
		"standalone/no/unit/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "standalone.no.unit.view."
	});

	sap.ui.require([
		"standalone/no/unit/test/integration/WorklistJourney",
		"standalone/no/unit/test/integration/ObjectJourney",
		"standalone/no/unit/test/integration/NavigationJourney",
		"standalone/no/unit/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});