
  /**
   * Determine the operating system.
   *
   * @returns {String}
   */
  function getOperatingSystem() {

    if (typeof InstallTrigger !== 'undefined') {
      console.log("Detecting Os: Firefox");
      return "Firefox";
    }
    if (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) {
      console.log("Detecting Os: Chrome");
      return "Chrome";
    }
    if (/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))) {
      console.log("Detecting Os: Safari");
      return "Safari";
    }
    if ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
      console.log("Detecting Os: Opera");
      return "Opera";
    }
    if (/*@cc_on!@*/false || !!document.documentMode) {
      console.log("Detecting Os: Internet Explorer");
      return "Internet Explorer";
    }
    if (!isIE && !!window.StyleMedia) {
      console.log("Detecting Os: Edge");
      return "Edge";
    }
    if ((isChrome || isOpera) && !!window.CSS) {
      console.log("Detecting Os: Blink");
      return "Blink";
    }

    // Phone
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
          console.log("Windows Phone");
          return "Windows Phone";
      }

      if (/android/i.test(userAgent)) {
          console.log("Android");
          return "Android";
      }

      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          console.log("iOS");
          return "iOS";
      }

      console.log("unknown");
      return "unknown";

  }

  getOperatingSystem();
