jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"md/standalone/unit/no/line/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"md/standalone/unit/no/line/test/integration/pages/App",
	"md/standalone/unit/no/line/test/integration/pages/Browser",
	"md/standalone/unit/no/line/test/integration/pages/Master",
	"md/standalone/unit/no/line/test/integration/pages/Detail",
	"md/standalone/unit/no/line/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "md.standalone.unit.no.line.view."
	});

	sap.ui.require([
		"md/standalone/unit/no/line/test/integration/NavigationJourneyPhone",
		"md/standalone/unit/no/line/test/integration/NotFoundJourneyPhone",
		"md/standalone/unit/no/line/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});