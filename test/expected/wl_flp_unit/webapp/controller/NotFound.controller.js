sap.ui.define([
		"flp/unit/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("flp.unit.controller.NotFound", {

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