jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"md/standalone/unit/line/no/line/unit/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"md/standalone/unit/line/no/line/unit/test/integration/pages/App",
	"md/standalone/unit/line/no/line/unit/test/integration/pages/Browser",
	"md/standalone/unit/line/no/line/unit/test/integration/pages/Master",
	"md/standalone/unit/line/no/line/unit/test/integration/pages/Detail",
	"md/standalone/unit/line/no/line/unit/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "md.standalone.unit.line.no.line.unit.view."
	});

	sap.ui.require([
		"md/standalone/unit/line/no/line/unit/test/integration/NavigationJourneyPhone",
		"md/standalone/unit/line/no/line/unit/test/integration/NotFoundJourneyPhone",
		"md/standalone/unit/line/no/line/unit/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});