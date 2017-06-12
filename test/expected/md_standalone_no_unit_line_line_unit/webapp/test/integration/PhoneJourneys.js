jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"md/standalone/no/unit/line/line/unit/test/integration/NavigationJourneyPhone",
		"md/standalone/no/unit/line/line/unit/test/integration/NotFoundJourneyPhone",
		"md/standalone/no/unit/line/line/unit/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});