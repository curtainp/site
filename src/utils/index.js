const DarkReader = require("darkreader");

module.exports = {
    // Diff device type
    browserRedirect() {
        let sUserAgent = navigator.userAgent.toLowerCase();
        let bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        let bIsMidp = sUserAgent.match(/midp/i) == "midp";
        let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        let bIsAndroid = sUserAgent.match(/android/i) == "android";
        let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

        if (
            bIsIpad ||
            bIsIphoneOs ||
            bIsMidp ||
            bIsUc7 ||
            bIsUc ||
            bIsAndroid ||
            bIsCE ||
            bIsWM
        ) {
            return "MB";
        } else {
            return "PC";
        }
    },

    // If `args` is current page
    // `args` - String or Array
    isCurPageFn(args) {
        if (typeof args === "string") {
            if (
                [
                    "/docs/" + args + ".html",
                    "/docs/" + args,
                    "/" + args + ".html",
                    "/" + args,
                ].includes(location.pathname)
            )
                return true;
        } else if (args instanceof Array) {
            let _res = 0;
            args.map((item) => {
                if (
                    [
                        "/docs/" + item + ".html",
                        "/docs" + item,
                        "/" + item + ".html",
                        "/" + item,
                    ].includes(location.pathname)
                )
                    _res += 1;
            });

            if (_res > 0) return true;
        }
    },
    isHomeFn() {
        if (
            [
                "/docs/index.html",
                "/docs/index",
                "/docs/",
                "/index.html",
                "/index",
                "/",
            ].includes(location.pathname)
        ) {
            return true;
        } else {
            return false;
        }
    },
};
