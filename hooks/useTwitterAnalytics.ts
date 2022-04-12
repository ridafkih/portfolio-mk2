import { useEffect } from "react";

const SCRIPT_CONTENTS = `!(function (e, t, n, s, u, a) {
  e.twq ||
    ((s = e.twq =
      function () {
        s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
      }),
    (s.version = "1.1"),
    (s.queue = []),
    (u = t.createElement(n)),
    (u.async = !0),
    (u.src = "/api/twitter/uwt.js"),
    (a = t.getElementsByTagName(n)[0]),
    a.parentNode.insertBefore(u, a));
})(window, document, "script");
twq("init", "o8etq");
twq("track", "PageView");`;

export const useTwitterAnalytics = () => {
  useEffect(() => {
    const { head } = document;
    const script = document.createElement("script");
    script.innerHTML = SCRIPT_CONTENTS;
    head.append(script);
  }, []);
};
