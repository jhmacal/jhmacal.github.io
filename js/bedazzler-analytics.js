(function () {
  var endpoint = resolveEndpoint();
  if (!endpoint || !window.fetch) return;

  var page = window.location.href;
  var pagePath = window.location.pathname || "/";
  var sessionKey = "bedazzler-analytics:" + pagePath + ":" + (document.referrer || "direct");

  try {
    if (window.sessionStorage && window.sessionStorage.getItem(sessionKey)) return;
    if (window.sessionStorage) window.sessionStorage.setItem(sessionKey, "1");
  } catch (_error) {
    // Storage can fail in privacy modes; analytics should never affect the page.
  }

  var payload = {
    artifactName: artifactNameFor(pagePath),
    dropDate: "unknown",
    channelPublishedOrSent: "jhmacal.com",
    engagerNameAndEntity: "site visitor, unknown",
    engagerSegment: segmentFor(pagePath),
    event: "view",
    eventDate: new Date().toISOString().slice(0, 10),
    followUpAction: "unknown",
    page: page,
    referrer: document.referrer || "direct",
    backfilled: false
  };

  window.fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
    mode: "cors"
  }).catch(function () {});

  function resolveEndpoint() {
    if (window.BEDAZZLER_ANALYTICS_ENDPOINT) return window.BEDAZZLER_ANALYTICS_ENDPOINT;

    try {
      var stored = window.localStorage && window.localStorage.getItem("bedazzlerAnalyticsEndpoint");
      if (stored) return stored;
    } catch (_error) {}

    var host = window.location.hostname;
    var isLocalHost = host === "localhost" || host === "127.0.0.1" || host === "::1";
    var isLanHost = /^10\./.test(host) || /^192\.168\./.test(host) || /^172\.(1[6-9]|2\d|3[0-1])\./.test(host);
    if (isLocalHost || isLanHost) {
      return window.location.protocol + "//" + host + ":4210/api/pipeline-capture/artifact-engagement";
    }

    return "http://localhost:4210/api/pipeline-capture/artifact-engagement";
  }

  function artifactNameFor(pathname) {
    var path = normalizePath(pathname);
    var explicit = {
      "/quant-study/": "Quant Firm Strategic Brief",
      "/[client]/": "[client] Strategic Brief",
      "/writing/legal-reasoning/": "Legal Reasoning as a Strategic Asset",
      "/writing/the-steepening/": "The Legal Engineer Arc by Data",
      "/writing/the-eu-ai-act-omnibus/": "EU AI Act Omnibus Brief",
      "/writing/the-constraint/": "The Constraint",
      "/imtheom/": "The Operating Mode",
      "/playbook/": "AI Governance Playbook",
      "/ai/": "AI Portfolio",
      "/studies/": "Case Studies",
      "/resume/": "Resume",
      "/books/": "Books"
    };
    return explicit[path] || document.querySelector("meta[property='og:title']")?.content || document.title || path;
  }

  function segmentFor(pathname) {
    var path = normalizePath(pathname);
    if (path === "/quant-study/") return "F500/fintech in-house";
    if (path === "/[client]/" || path.indexOf("/ai/") === 0) return "vendor";
    if (path.indexOf("/writing/") === 0 || path.indexOf("/imtheom/") === 0 || path.indexOf("/playbook/") === 0) return "AmLaw building-quiet";
    return "unknown";
  }

  function normalizePath(pathname) {
    if (!pathname || pathname === "/") return "/";
    return pathname.endsWith("/") ? pathname : pathname + "/";
  }
})();
