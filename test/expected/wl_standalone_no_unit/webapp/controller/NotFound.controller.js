sap.ui.define([
		"standalone/no/unit/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("standalone.no.unit.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);