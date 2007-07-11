/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2007 1&1 Internet AG, Germany, http://www.1and1.org

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)

************************************************************************ */

/* ************************************************************************

#module(client)
#require(qx.html2.client.Engine)

************************************************************************ */

qx.Class.define("qx.html2.client.Features",
{
  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */

  statics :
  {

    /** {Boolean} Flag to detect if the current document is rendered in standard mode */
    STANDARD_MODE : false,

    /** {Boolean} Flag to detect if the current document is rendered in quirks mode */
    QUIRKS_MODE : false,

    /** {Boolean} Flag to detect if the client uses the W3C box model */
    CONTENT_BOX : false,

    /** {Boolean} Flag to detect if the client uses the IE box model */
    BORDER_BOX : false,

    /** {Boolean} Flag to detect if the client supports SVG graphics */
    SVG : false,

    /** {Boolean} Flag to detect if the client supports Canvas graphics */
    CANVAS : false,

    /** {Boolean} Flag to detect if the client supports VML graphics */
    VML : false,

    /** {Boolean} Flag to detect if the client supports XPATH queries */
    XPATH : false,


    /**
     * Internal initialize helper
     *
     * @type static
     * @return {void} 
     */
    __init : function()
    {
      this.STANDARD_MODE = document.compatMode == "CSS1Compat";
      this.QUIRKS_MODE = !this.STANDARD_MODE;

      this.CONTENT_BOX = !!(!qx.html2.client.Engine.MSHTML || this.STANDARD_MODE);
      this.BORDER_BOX = !this.CONTENT_BOX;

      this.SVG = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("org.w3c.dom.svg", "1.0");
      this.CANVAS = !!window.CanvasRenderingContext2D;
      this.VML = qx.html2.client.Engine.MSHTML;

      this.XPATH = !!document.evaluate;
    }
  },




  /*
  *****************************************************************************
     DEFER
  *****************************************************************************
  */

  defer : function(statics) {
    statics.__init();
  }
});
