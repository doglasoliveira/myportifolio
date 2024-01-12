sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
        Fragment) {
        "use strict";

        return Controller.extend("dashboard.controller.View1", {
            onInit: function () {
                
            },

            onProfilePress: function (oEvent) {
                const oButton = oEvent.getSource(),
                    oView = this.getView();

                // create popover
                if (!this._pPopover) {
                    this._pPopover = Fragment.load({
                        id: oView.getId(),
                        name: "dashboard.view.fragments.popover",
                        controller: this
                    }).then(function (oPopover) {
                        oView.addDependent(oPopover);
                        return oPopover;
                    });
                }
                this._pPopover.then(function (oPopover) {
                    oPopover.openBy(oButton);
                });
            },

            onContactPress: function (oEvent) {
                const oView = this.getView();

                // create popover
                if (!this._pPopup) {
                    this._pPopup = Fragment.load({
                        id: oView.getId(),
                        name: "dashboard.view.fragments.contact",
                        controller: this
                    }).then(function (oPopup) {
                        oView.addDependent(oPopup);
                        return oPopup;
                    });
                }
                this._pPopup.then(function (oPopup) {
                    oPopup.open();
                });
            },

            onCloseContact: function(){
                this._pPopup.then(function (oPopup) {
                    oPopup.close();
                });
            },

            onChangeTheme: function(oEvent){
                const theme = oEvent.getParameter("item").getProperty("text");
                const nTheme = (theme === "Light") ? "sap_horizon" : "sap_horizon_dark";
                sap.ui.getCore().getConfiguration().setTheme(nTheme);
            },

            onPressPalpite: function(oEvent){
                window.open('https://meupalpitegame.com/#', '_blank')
            },

            onPressCheckPrices: function(oEvent){
                window.open('https://doglasoliveira.github.io/checkproducts/', '_blank')
            }
        });
    });
