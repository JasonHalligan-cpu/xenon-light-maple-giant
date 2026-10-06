globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as serve, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, s as NodeResponse, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { existsSync, promises, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/clip-v17.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"8f7-81SaLoCJ9x9G6JUzGVwlxI5/AtE\"",
		"mtime": "2026-10-06T21:13:24.348Z",
		"size": 2295,
		"path": "../public/clip-v17.html"
	},
	"/clip-v19.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"a68-W1nPg2UDgCAMhRj+sMl3fYCOfJw\"",
		"mtime": "2026-10-06T21:13:24.348Z",
		"size": 2664,
		"path": "../public/clip-v19.html"
	},
	"/clip-v18.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"b2a-Ia4Gt9rfhm62yTF5MqmSCqArWT0\"",
		"mtime": "2026-10-06T21:13:24.348Z",
		"size": 2858,
		"path": "../public/clip-v18.html"
	},
	"/clip-v20.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"903-+JBoV5uP3o6/T69eEOUOBSuntF8\"",
		"mtime": "2026-10-06T21:13:24.356Z",
		"size": 2307,
		"path": "../public/clip-v20.html"
	},
	"/clip-v21.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"9a9-UYlMXp1fYz78cHWzch90ULJQX2Q\"",
		"mtime": "2026-10-06T21:13:24.356Z",
		"size": 2473,
		"path": "../public/clip-v21.html"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"10d-CrMaPuU9cCUiyeaHlQ1q8FSeN2M\"",
		"mtime": "2026-10-06T21:13:24.360Z",
		"size": 269,
		"path": "../public/favicon.svg"
	},
	"/og.jpg": {
		"type": "image/jpeg",
		"etag": "\"134d3-PyKXyln3us0vA5q2GEXTVsfsDGU\"",
		"mtime": "2026-10-06T21:13:24.360Z",
		"size": 79059,
		"path": "../public/og.jpg"
	},
	"/clip.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"2f1-P7lwf/CGoByY2X73X2nyBUEPwPs\"",
		"mtime": "2026-10-06T21:13:24.356Z",
		"size": 753,
		"path": "../public/clip.html"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"44-tP8Om8Vo2h713xtMxYvKW9UMbWU\"",
		"mtime": "2026-10-06T21:13:24.360Z",
		"size": 68,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"1610-BUB+CTctEwsy7LY9rlyHT120s7A\"",
		"mtime": "2026-10-06T21:13:24.360Z",
		"size": 5648,
		"path": "../public/sitemap.xml"
	},
	"/x-banner.jpg": {
		"type": "image/jpeg",
		"etag": "\"8290-0aVm/ywPMLtOqoj3Q7naO2zxPQs\"",
		"mtime": "2026-10-06T21:13:24.360Z",
		"size": 33424,
		"path": "../public/x-banner.jpg"
	},
	"/__grok/icon-180.png": {
		"type": "image/png",
		"etag": "\"834-Xk8vfS0DTFn7ggtkfEduWTcNWGE\"",
		"mtime": "2026-10-06T21:13:24.336Z",
		"size": 2100,
		"path": "../public/__grok/icon-180.png"
	},
	"/assets/ad-slot-DTazOm0Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"664-ex1+QcUKwA5xy93r2nJXR6uLE0I\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 1636,
		"path": "../public/assets/ad-slot-DTazOm0Z.js"
	},
	"/assets/adverts-CL27D3f5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-YgkG4Qnzvm//WLh8SAaG2lxCjCs\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 154,
		"path": "../public/assets/adverts-CL27D3f5.js"
	},
	"/assets/adverts._id-frTva30n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7b-kwjD2cA/Q83aLJ6OtEIzsXFVuns\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 2683,
		"path": "../public/assets/adverts._id-frTva30n.js"
	},
	"/assets/adverts.index-C5SmjlRb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"469-A4+nP8RfCDPbuyoWjRWc5j9L/E8\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 1129,
		"path": "../public/assets/adverts.index-C5SmjlRb.js"
	},
	"/assets/arrow-right-Cf7brpW1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"50d-Kr4EHTJjhGoh30OtP6Mu/Nkuth8\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 1293,
		"path": "../public/assets/arrow-right-Cf7brpW1.js"
	},
	"/assets/asme-DDg0Cvhs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"211-iCmrezwDObCvXImMD8jbMM8ElKU\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 529,
		"path": "../public/assets/asme-DDg0Cvhs.js"
	},
	"/assets/asme-mfo8ZWhK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9cea-90bBJmOY3SmyOeem00pGGbToOKM\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 40170,
		"path": "../public/assets/asme-mfo8ZWhK.js"
	},
	"/assets/asme.index-3-P0x8Pt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ffa-y6TU7DCKUcl2g/JiZ3qLzrpH7rw\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 4090,
		"path": "../public/assets/asme.index-3-P0x8Pt.js"
	},
	"/assets/asme.learn-B882irUL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-xsbhGn7JIYcqvllTFlgFxBLDOx8\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 141,
		"path": "../public/assets/asme.learn-B882irUL.js"
	},
	"/assets/asme.learn._id-DWNFCDRP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c6-8732FxiF/az47H/tz6RkFKzYqfA\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 198,
		"path": "../public/assets/asme.learn._id-DWNFCDRP.js"
	},
	"/clip-instagram-feed.mp4": {
		"type": "video/mp4",
		"etag": "\"1bd91b-xhGwre1eLPbSvID18zcTpLqxRWM\"",
		"mtime": "2026-10-06T21:13:24.356Z",
		"size": 1825051,
		"path": "../public/clip-instagram-feed.mp4"
	},
	"/assets/asme.learn.index-BD2Ku8PQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-2f+i2kbtHJ/iY1833+dccNNlfno\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 154,
		"path": "../public/assets/asme.learn.index-BD2Ku8PQ.js"
	},
	"/assets/asme.library-B882irUL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-xsbhGn7JIYcqvllTFlgFxBLDOx8\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 141,
		"path": "../public/assets/asme.library-B882irUL.js"
	},
	"/assets/asme.library._id-CdMiTzhr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-iy3r72d+/oN3l1jdB13tmrCSHHk\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 203,
		"path": "../public/assets/asme.library._id-CdMiTzhr.js"
	},
	"/assets/asme.library.index-Dclm63rl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-kDbtZ8ruEM1JBNJfJhXDGHBjPw0\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 154,
		"path": "../public/assets/asme.library.index-Dclm63rl.js"
	},
	"/assets/asme.practice-J_3JNTGV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-erHoCdVffae3yWe/4Rb2xip7SIw\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 154,
		"path": "../public/assets/asme.practice-J_3JNTGV.js"
	},
	"/assets/asme.test-wm163BBb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-kJbf5B7wJFXRIcBt94PDz5o3DLI\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 154,
		"path": "../public/assets/asme.test-wm163BBb.js"
	},
	"/clip-instagram.mp4": {
		"type": "video/mp4",
		"etag": "\"1c6930-Q80CWJFlycGVcINqKpsRDXKiBU4\"",
		"mtime": "2026-10-06T21:13:24.376Z",
		"size": 1861936,
		"path": "../public/clip-instagram.mp4"
	},
	"/assets/button-Bb9_ljno.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66e-RP41z3rJdQDLvPdjZuFrvgmhHCI\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 1646,
		"path": "../public/assets/button-Bb9_ljno.js"
	},
	"/assets/classify-D7TpcaIo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"210f-iChGFkGIWzAda099VtiJdZUIwj8\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 8463,
		"path": "../public/assets/classify-D7TpcaIo.js"
	},
	"/assets/de-BCQKfJpd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6bc79-v1apMrjEaT9j+D+PhBV04PjGeW8\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 441465,
		"path": "../public/assets/de-BCQKfJpd.js"
	},
	"/assets/drill-BnWnc18_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bff-xnf19KFsll+CzU2OR8k29YAm4j8\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 3071,
		"path": "../public/assets/drill-BnWnc18_.js"
	},
	"/assets/es-Ct0lAcmE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a77a-Vp29v1OddN0BIUHI/2wlz5HgZKU\"",
		"mtime": "2026-10-06T21:13:23.040Z",
		"size": 436090,
		"path": "../public/assets/es-Ct0lAcmE.js"
	},
	"/assets/fr-EaEAbr06.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6e4b1-T2kkUA4RCOWiNUjOA3Zebo80tBo\"",
		"mtime": "2026-10-06T21:13:23.044Z",
		"size": 451761,
		"path": "../public/assets/fr-EaEAbr06.js"
	},
	"/assets/jsx-runtime-Cltr0gcK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20ee-ObwGPj96dlkL76iVLbX2wLAXzuw\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 8430,
		"path": "../public/assets/jsx-runtime-Cltr0gcK.js"
	},
	"/assets/learn-CL27D3f5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-YgkG4Qnzvm//WLh8SAaG2lxCjCs\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 154,
		"path": "../public/assets/learn-CL27D3f5.js"
	},
	"/assets/learn._id-BxOprsi3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1670-/bbYH/d6HIPc9e4VmXYQVPnIXbg\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 5744,
		"path": "../public/assets/learn._id-BxOprsi3.js"
	},
	"/assets/learn.index-_lNyc80y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7d-g14k6Vw5od9rHdQbSZL1dYMMAoo\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 2685,
		"path": "../public/assets/learn.index-_lNyc80y.js"
	},
	"/assets/lessons-iCePeV5z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6829-ZlYRp/kwrTd/DmAKBLu3yNu/3OA\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 26665,
		"path": "../public/assets/lessons-iCePeV5z.js"
	},
	"/assets/library-CL27D3f5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-YgkG4Qnzvm//WLh8SAaG2lxCjCs\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 154,
		"path": "../public/assets/library-CL27D3f5.js"
	},
	"/assets/library._id-GXkdjLHq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d51-rWUS6Q7WhM/3The0ORsv39oJGcU\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 3409,
		"path": "../public/assets/library._id-GXkdjLHq.js"
	},
	"/assets/library.index-Cu2QeV1P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f01-2kQ7jt3Z3ZJSlzI9idaqzbCmcvA\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 3841,
		"path": "../public/assets/library.index-Cu2QeV1P.js"
	},
	"/assets/it-D9PB0VyO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6aecf-dOrmSYwAMUSPwuFBkd9UadDVJfs\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 437967,
		"path": "../public/assets/it-D9PB0VyO.js"
	},
	"/assets/index-Q0sTfoFR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66fa7-rMZKf0TStnVX1HvDmhlh+KsZ0VU\"",
		"mtime": "2026-10-06T21:13:23.036Z",
		"size": 421799,
		"path": "../public/assets/index-Q0sTfoFR.js"
	},
	"/assets/link-C3fQedE4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2418-RbElpuc1Of3exOTieq8fvb8vXbU\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 9240,
		"path": "../public/assets/link-C3fQedE4.js"
	},
	"/assets/matchContext-D7fiU5TJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2-In8zdZ7nMM++Vwdy4nmI3aOMwV4\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 162,
		"path": "../public/assets/matchContext-D7fiU5TJ.js"
	},
	"/assets/moving-lift-kC1D9BaR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"644-Lzb0BCG52JrGxeOGAeSibgbUvYw\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 1604,
		"path": "../public/assets/moving-lift-kC1D9BaR.js"
	},
	"/assets/placement-C3t4rECO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c0-uCJDmPDz59jNz2smdyHVgO+un2Y\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 2240,
		"path": "../public/assets/placement-C3t4rECO.js"
	},
	"/assets/plain-sketch-CjZCZtuS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6356-VHPA78yHfI+AEI8718zmDu5FUBo\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 25430,
		"path": "../public/assets/plain-sketch-CjZCZtuS.js"
	},
	"/assets/practice-BCxVag4L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"178c-BskTE5HN0T2CLEW7x2CRJwGnyzw\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 6028,
		"path": "../public/assets/practice-BCxVag4L.js"
	},
	"/assets/preload-helper-BrFMlIQw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1651-S2EXvHkt/cpN/2Bw/G1n0XynVAA\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 5713,
		"path": "../public/assets/preload-helper-BrFMlIQw.js"
	},
	"/assets/progress-BdF2HNRT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"228-uPc82MCEIzbr9rWEjGPMut0x56A\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 552,
		"path": "../public/assets/progress-BdF2HNRT.js"
	},
	"/assets/question-card-DaOxum_l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"730-eBtg46mHe2G6z5iySNalfOsL6pA\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 1840,
		"path": "../public/assets/question-card-DaOxum_l.js"
	},
	"/assets/scenarios-CL27D3f5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-YgkG4Qnzvm//WLh8SAaG2lxCjCs\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 154,
		"path": "../public/assets/scenarios-CL27D3f5.js"
	},
	"/assets/routes-CJxV3D3w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ead-fjlRhmYiPwftnp0dXLe5imH3dJQ\"",
		"mtime": "2026-10-06T21:13:23.048Z",
		"size": 16045,
		"path": "../public/assets/routes-CJxV3D3w.js"
	},
	"/assets/scenarios-CL8jZL8E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2164-WwEJ5Z6ENMI1EH0BEiKFt8wgqY0\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 8548,
		"path": "../public/assets/scenarios-CL8jZL8E.js"
	},
	"/assets/scenarios._id-sWVvYYeL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bab-DWs9YzV9b6JfYJcpSWsHjAr9Voc\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 2987,
		"path": "../public/assets/scenarios._id-sWVvYYeL.js"
	},
	"/assets/scenarios.index--AdCVefD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"615-xnF+Lv7k06+BZUJlqYNMqToNrg0\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 1557,
		"path": "../public/assets/scenarios.index--AdCVefD.js"
	},
	"/clip-linkedin.mp4": {
		"type": "video/mp4",
		"etag": "\"373cc5-7cowvor94aB3T7q0CnIz4ntO64k\"",
		"mtime": "2026-10-06T21:13:24.388Z",
		"size": 3620037,
		"path": "../public/clip-linkedin.mp4"
	},
	"/assets/seo-C7R9gtPW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b6-y/T82+0vYDknSmInS1zN7DQOaiA\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 1718,
		"path": "../public/assets/seo-C7R9gtPW.js"
	},
	"/assets/shop-V-yPQ5IK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa2-Yu4l9vb/jwTO8fT+8tJRd3c4Z+8\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 2722,
		"path": "../public/assets/shop-V-yPQ5IK.js"
	},
	"/assets/specs-B-OQvBUj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"547c-T0rx2epT1kF89l8ZeF2mZvhP+0I\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 21628,
		"path": "../public/assets/specs-B-OQvBUj.js"
	},
	"/assets/specs-CL27D3f5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-YgkG4Qnzvm//WLh8SAaG2lxCjCs\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 154,
		"path": "../public/assets/specs-CL27D3f5.js"
	},
	"/assets/specs._id-DLCNPzmH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1039-qhbjqHlddlpb6/qWvA2F55SSLQ4\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 4153,
		"path": "../public/assets/specs._id-DLCNPzmH.js"
	},
	"/assets/specs.index-v4_xeRR1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"700-+CgEfH0u7E+LqM4JtPfcrH4dqwY\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 1792,
		"path": "../public/assets/specs.index-v4_xeRR1.js"
	},
	"/assets/sponsors-CL27D3f5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-YgkG4Qnzvm//WLh8SAaG2lxCjCs\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 154,
		"path": "../public/assets/sponsors-CL27D3f5.js"
	},
	"/assets/sponsors-CwcpJSCW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16e2-4fNFIW1KXnXfmD9QsFQESz5HEvw\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 5858,
		"path": "../public/assets/sponsors-CwcpJSCW.js"
	},
	"/assets/sponsors._id-DJvyunp-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"124c-qDWLPho+DXSeZ7/G0E4jFSUU8ls\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 4684,
		"path": "../public/assets/sponsors._id-DJvyunp-.js"
	},
	"/assets/sponsors.index-BmnettLa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c70-p87NayIDEMvI5As5KTyGlBHR0+U\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 3184,
		"path": "../public/assets/sponsors.index-BmnettLa.js"
	},
	"/assets/standards-CJYBXRje.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c30-qwBYz76WbMieBIqxmgRThfOT7t4\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 35888,
		"path": "../public/assets/standards-CJYBXRje.js"
	},
	"/assets/store-CqUy1tEN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ab62-6Ub+6vUf0pPWCXolcKr6w0M0ZAs\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 43874,
		"path": "../public/assets/store-CqUy1tEN.js"
	},
	"/assets/statute-split-CvwsQBby.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"466-Dmv9qg1h2gr7dTPXQ7InFu+nxcY\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 1126,
		"path": "../public/assets/statute-split-CvwsQBby.js"
	},
	"/assets/test-C_RuZPLq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd2-M2+lIKn7EUPkj8+piueE3TuIHOw\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 3026,
		"path": "../public/assets/test-C_RuZPLq.js"
	},
	"/assets/styles-CUGEQmpm.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"b101-nS0Lf3oE73cTdmCjOXmnRgWL+DI\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 45313,
		"path": "../public/assets/styles-CUGEQmpm.css"
	},
	"/assets/test-paper-D9n0gN2c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-l9oXVcaBZSy7cIODV66Fi1SImyw\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 165,
		"path": "../public/assets/test-paper-D9n0gN2c.js"
	},
	"/assets/uk-B2pwa_nw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10af-j4X3grYmoTDnlz52MRMguraipeM\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 4271,
		"path": "../public/assets/uk-B2pwa_nw.js"
	},
	"/assets/uk-shaft-CDmIz-dn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10df-rBwja4qSd4c7icG7M5ox8cW7jzY\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 4319,
		"path": "../public/assets/uk-shaft-CDmIz-dn.js"
	},
	"/assets/uk-layers-xlOR9tPN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1264-tRKrfdFdMFJVZzkI/cCkNpFTAcc\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 4708,
		"path": "../public/assets/uk-layers-xlOR9tPN.js"
	},
	"/assets/useSelector-BjXIbM5e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"888-UF5PRcCm1CwlDLvjeQAGF5PSgjs\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 2184,
		"path": "../public/assets/useSelector-BjXIbM5e.js"
	},
	"/assets/world-DJ7LAi8J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26-SoFMfAHVJ5oqB5t+mpFRoQvFIoc\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 38,
		"path": "../public/assets/world-DJ7LAi8J.js"
	},
	"/assets/utils-xQxrfMhM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6aef-/BY8qnMjPRyZ35TnzVpPxvOjZcc\"",
		"mtime": "2026-10-06T21:13:23.052Z",
		"size": 27375,
		"path": "../public/assets/utils-xQxrfMhM.js"
	},
	"/graphics/ad-ashcombe.jpg": {
		"type": "image/jpeg",
		"etag": "\"6355d-cE5ZxjVtTwgUUGU5Qf81K0WiVRg\"",
		"mtime": "2026-10-06T21:13:24.340Z",
		"size": 406877,
		"path": "../public/graphics/ad-ashcombe.jpg"
	},
	"/graphics/car-evac-b.jpg": {
		"type": "image/jpeg",
		"etag": "\"74d57-TYQDe3ewuz5jikJCUidjumnDpAw\"",
		"mtime": "2026-10-06T21:13:24.376Z",
		"size": 478551,
		"path": "../public/graphics/car-evac-b.jpg"
	},
	"/graphics/car-evac-d.jpg": {
		"type": "image/jpeg",
		"etag": "\"75d21-ode8DCuKIlsHeZaCMa3B8j2EAcU\"",
		"mtime": "2026-10-06T21:13:24.392Z",
		"size": 482593,
		"path": "../public/graphics/car-evac-d.jpg"
	},
	"/graphics/car-evac-e.jpg": {
		"type": "image/jpeg",
		"etag": "\"78dc0-rVc8GuL+v9QxVvufoYsyAGlQvvk\"",
		"mtime": "2026-10-06T21:13:24.392Z",
		"size": 495040,
		"path": "../public/graphics/car-evac-e.jpg"
	},
	"/graphics/car-evac-f.jpg": {
		"type": "image/jpeg",
		"etag": "\"7c7f8-nJCjvDXRLCUEgfPBwReztbhLUVo\"",
		"mtime": "2026-10-06T21:13:24.400Z",
		"size": 509944,
		"path": "../public/graphics/car-evac-f.jpg"
	},
	"/graphics/car-evac-c.jpg": {
		"type": "image/jpeg",
		"etag": "\"72aca-979T6Y/grq1xH00ezy4fSRUv4t0\"",
		"mtime": "2026-10-06T21:13:24.396Z",
		"size": 469706,
		"path": "../public/graphics/car-evac-c.jpg"
	},
	"/graphics/car-evac-g.jpg": {
		"type": "image/jpeg",
		"etag": "\"7cf97-3tO0EW3cyArxgppYWvokijbhh9c\"",
		"mtime": "2026-10-06T21:13:24.404Z",
		"size": 511895,
		"path": "../public/graphics/car-evac-g.jpg"
	},
	"/graphics/car-firefighter-b.jpg": {
		"type": "image/jpeg",
		"etag": "\"6ed33-bhGhiOGJaz2hv8znWmNIwOfC2+Y\"",
		"mtime": "2026-10-06T21:13:24.412Z",
		"size": 453939,
		"path": "../public/graphics/car-firefighter-b.jpg"
	},
	"/graphics/ad-northbank.jpg": {
		"type": "image/jpeg",
		"etag": "\"a1e4b-rwGHOmg3ldRTRM8aQXgP2x1hdaU\"",
		"mtime": "2026-10-06T21:13:24.384Z",
		"size": 663115,
		"path": "../public/graphics/ad-northbank.jpg"
	},
	"/graphics/car-evac-h.jpg": {
		"type": "image/jpeg",
		"etag": "\"8143a-YbhLLG1vQQqvSKqwpRrFoQ4wUNQ\"",
		"mtime": "2026-10-06T21:13:24.408Z",
		"size": 529466,
		"path": "../public/graphics/car-evac-h.jpg"
	},
	"/graphics/car-evac.jpg": {
		"type": "image/jpeg",
		"etag": "\"68acd-SklHx4/IECvL7PFbcMgLSCL7dHI\"",
		"mtime": "2026-10-06T21:13:24.412Z",
		"size": 428749,
		"path": "../public/graphics/car-evac.jpg"
	},
	"/graphics/car-evac-i.jpg": {
		"type": "image/jpeg",
		"etag": "\"8595e-9xS84E6hKc+C7NRk+1p6MkutAC8\"",
		"mtime": "2026-10-06T21:13:24.408Z",
		"size": 547166,
		"path": "../public/graphics/car-evac-i.jpg"
	},
	"/graphics/car-firefighter-c.jpg": {
		"type": "image/jpeg",
		"etag": "\"86ad5-m1Ibqpy+Y4z6sRWrpMGAgEEUS1c\"",
		"mtime": "2026-10-06T21:13:24.416Z",
		"size": 551637,
		"path": "../public/graphics/car-firefighter-c.jpg"
	},
	"/graphics/car-ordinary-b.jpg": {
		"type": "image/jpeg",
		"etag": "\"6d46e-+EyEwnHD0Iugl0TVB3AKuL+Aoy0\"",
		"mtime": "2026-10-06T21:13:24.472Z",
		"size": 447598,
		"path": "../public/graphics/car-ordinary-b.jpg"
	},
	"/graphics/car-ordinary-c.jpg": {
		"type": "image/jpeg",
		"etag": "\"745fb-ADgb8RujPZ3s9d/YQ3AjF5gnFD0\"",
		"mtime": "2026-10-06T21:13:24.476Z",
		"size": 476667,
		"path": "../public/graphics/car-ordinary-c.jpg"
	},
	"/graphics/car-ordinary-d.jpg": {
		"type": "image/jpeg",
		"etag": "\"7b8da-p29DwE2cTyqb4zp8Gf8yj9YXtTk\"",
		"mtime": "2026-10-06T21:13:24.472Z",
		"size": 506074,
		"path": "../public/graphics/car-ordinary-d.jpg"
	},
	"/graphics/car-firefighter-d.jpg": {
		"type": "image/jpeg",
		"etag": "\"8efe9-J8TDrhV0sq5ebecpCnADhf1yzLU\"",
		"mtime": "2026-10-06T21:13:24.424Z",
		"size": 585705,
		"path": "../public/graphics/car-firefighter-d.jpg"
	},
	"/graphics/car-firefighter-e.jpg": {
		"type": "image/jpeg",
		"etag": "\"9fe38-UM2VcMEFnSHPVg60Pgv52iC+/7g\"",
		"mtime": "2026-10-06T21:13:24.432Z",
		"size": 654904,
		"path": "../public/graphics/car-firefighter-e.jpg"
	},
	"/graphics/car-firefighter-f.jpg": {
		"type": "image/jpeg",
		"etag": "\"a4703-RMd+fTzHeigi4Mbc2M8zyz9faQ0\"",
		"mtime": "2026-10-06T21:13:24.432Z",
		"size": 673539,
		"path": "../public/graphics/car-firefighter-f.jpg"
	},
	"/graphics/car-firefighter-g.jpg": {
		"type": "image/jpeg",
		"etag": "\"9a9a3-QjdW69+6exBKdGHCem3OsuNOeNM\"",
		"mtime": "2026-10-06T21:13:24.432Z",
		"size": 633251,
		"path": "../public/graphics/car-firefighter-g.jpg"
	},
	"/graphics/car-firefighter-h.jpg": {
		"type": "image/jpeg",
		"etag": "\"9f1dd-hwTWDokAIPCIJNXZBwwiFVuLm/I\"",
		"mtime": "2026-10-06T21:13:24.432Z",
		"size": 651741,
		"path": "../public/graphics/car-firefighter-h.jpg"
	},
	"/graphics/car-firefighter-i.jpg": {
		"type": "image/jpeg",
		"etag": "\"a359c-QZ8d9v71jULqULc7Im4cwp9/uGY\"",
		"mtime": "2026-10-06T21:13:24.440Z",
		"size": 669084,
		"path": "../public/graphics/car-firefighter-i.jpg"
	},
	"/graphics/car-firefighter-j.jpg": {
		"type": "image/jpeg",
		"etag": "\"a652a-S01JHWtl1MbHaNpH0/mlg3BqEqA\"",
		"mtime": "2026-10-06T21:13:24.468Z",
		"size": 681258,
		"path": "../public/graphics/car-firefighter-j.jpg"
	},
	"/graphics/car-firefighter-k.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9a28-S30Q4cAzJPg20wubOYwn2vCdnjI\"",
		"mtime": "2026-10-06T21:13:24.460Z",
		"size": 694824,
		"path": "../public/graphics/car-firefighter-k.jpg"
	},
	"/graphics/car-firefighter-l.jpg": {
		"type": "image/jpeg",
		"etag": "\"ad56d-nGKIM5dGE9SJT3CFk2GM4HV8/l0\"",
		"mtime": "2026-10-06T21:13:24.460Z",
		"size": 709997,
		"path": "../public/graphics/car-firefighter-l.jpg"
	},
	"/graphics/car-firefighter-m.jpg": {
		"type": "image/jpeg",
		"etag": "\"adfee-bAFzAARqfAOsmKsWd+qFvEZQGyM\"",
		"mtime": "2026-10-06T21:13:24.444Z",
		"size": 712686,
		"path": "../public/graphics/car-firefighter-m.jpg"
	},
	"/graphics/car-firefighter-n.jpg": {
		"type": "image/jpeg",
		"etag": "\"ae860-DwRPQUBOuvy3yTF29sWvkxBkFo0\"",
		"mtime": "2026-10-06T21:13:24.452Z",
		"size": 714848,
		"path": "../public/graphics/car-firefighter-n.jpg"
	},
	"/graphics/car-firefighter-o.jpg": {
		"type": "image/jpeg",
		"etag": "\"b021c-9FioXm24yOLdnS9nNi/D/76oxD8\"",
		"mtime": "2026-10-06T21:13:24.456Z",
		"size": 721436,
		"path": "../public/graphics/car-firefighter-o.jpg"
	},
	"/graphics/car-ordinary-e.jpg": {
		"type": "image/jpeg",
		"etag": "\"8184a-59rCGgSu801fvwiw1hPeFFRH4SM\"",
		"mtime": "2026-10-06T21:13:24.480Z",
		"size": 530506,
		"path": "../public/graphics/car-ordinary-e.jpg"
	},
	"/graphics/car-ordinary-f.jpg": {
		"type": "image/jpeg",
		"etag": "\"8889d-ZBBIm9YFk6x6mqif7Dod7ywrJbc\"",
		"mtime": "2026-10-06T21:13:24.484Z",
		"size": 559261,
		"path": "../public/graphics/car-ordinary-f.jpg"
	},
	"/graphics/car-ordinary-g.jpg": {
		"type": "image/jpeg",
		"etag": "\"88cc3-yuwj39j4Nc4Y/sgziZWcXaP5zxI\"",
		"mtime": "2026-10-06T21:13:24.484Z",
		"size": 560323,
		"path": "../public/graphics/car-ordinary-g.jpg"
	},
	"/graphics/car-firefighter.jpg": {
		"type": "image/jpeg",
		"etag": "\"c6c6c-8GfxyByJByxaxDJRG4eTtKzNSFI\"",
		"mtime": "2026-10-06T21:13:24.464Z",
		"size": 814188,
		"path": "../public/graphics/car-firefighter.jpg"
	},
	"/graphics/car-ordinary-h.jpg": {
		"type": "image/jpeg",
		"etag": "\"8c892-CGXlnoF8nLWSfsaEXUG1M4o+uCc\"",
		"mtime": "2026-10-06T21:13:24.492Z",
		"size": 575634,
		"path": "../public/graphics/car-ordinary-h.jpg"
	},
	"/graphics/car-ordinary.jpg": {
		"type": "image/jpeg",
		"etag": "\"67023-85r2fbM02qJjTWDGFqmryyU6Iag\"",
		"mtime": "2026-10-06T21:13:24.488Z",
		"size": 421923,
		"path": "../public/graphics/car-ordinary.jpg"
	},
	"/graphics/car-ordinary-i.jpg": {
		"type": "image/jpeg",
		"etag": "\"915e9-VUZt2Jh5gJA5beRKXUHEborl6Og\"",
		"mtime": "2026-10-06T21:13:24.496Z",
		"size": 595433,
		"path": "../public/graphics/car-ordinary-i.jpg"
	},
	"/graphics/car-ordinary-j.jpg": {
		"type": "image/jpeg",
		"etag": "\"96a90-RNnmG9KbB/pchjhQo3wDO08N/uk\"",
		"mtime": "2026-10-06T21:13:24.488Z",
		"size": 617104,
		"path": "../public/graphics/car-ordinary-j.jpg"
	},
	"/graphics/futuristic-lift.jpg": {
		"type": "image/jpeg",
		"etag": "\"7cf59-glEu227AABYA0czUBLqTCtT7ZiQ\"",
		"mtime": "2026-10-06T21:13:24.492Z",
		"size": 511833,
		"path": "../public/graphics/futuristic-lift.jpg"
	},
	"/graphics/lift-tower.jpg": {
		"type": "image/jpeg",
		"etag": "\"53661-yxuyCMBekfU52ODNOvX40Llwzeo\"",
		"mtime": "2026-10-06T21:13:24.500Z",
		"size": 341601,
		"path": "../public/graphics/lift-tower.jpg"
	},
	"/graphics/inside-car.jpg": {
		"type": "image/jpeg",
		"etag": "\"a8b4a-LrUQwmrfbi17tvvD9T9SxsdIEWQ\"",
		"mtime": "2026-10-06T21:13:24.512Z",
		"size": 691018,
		"path": "../public/graphics/inside-car.jpg"
	},
	"/graphics/mechanics-cutaway.jpg": {
		"type": "image/jpeg",
		"etag": "\"6f0a4-vvfAVvsZfIupIaC0zN1DFs3TRB8\"",
		"mtime": "2026-10-06T21:13:24.516Z",
		"size": 454820,
		"path": "../public/graphics/mechanics-cutaway.jpg"
	},
	"/graphics/practice-20-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"79a4f-jw48cvjeIYzBXp/SUciRkzmPaiA\"",
		"mtime": "2026-10-06T21:13:24.524Z",
		"size": 498255,
		"path": "../public/graphics/practice-20-2.jpg"
	},
	"/graphics/practice-28-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"66107-lNMwWeXWN690w0taqMGFyXgsmEQ\"",
		"mtime": "2026-10-06T21:13:24.532Z",
		"size": 418055,
		"path": "../public/graphics/practice-28-2.jpg"
	},
	"/graphics/practice-70-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"7236e-juB3uqxX7dCz18qlU7jkOX5Y/Zw\"",
		"mtime": "2026-10-06T21:13:24.532Z",
		"size": 467822,
		"path": "../public/graphics/practice-70-2.jpg"
	},
	"/graphics/practice-72-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"797e6-1bAd7rw3yW8lbHb1a4sm0LZiOJM\"",
		"mtime": "2026-10-06T21:13:24.540Z",
		"size": 497638,
		"path": "../public/graphics/practice-72-2.jpg"
	},
	"/graphics/lift-hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"8ab79-kaFxwL2CgupoC52u4Nif7m8UJwI\"",
		"mtime": "2026-10-06T21:13:24.504Z",
		"size": 568185,
		"path": "../public/graphics/lift-hero.jpg"
	},
	"/graphics/loler-machine.jpg": {
		"type": "image/jpeg",
		"etag": "\"ed7b7-lqIc+x2zDe8xWlp1Udj6NCN4ghQ\"",
		"mtime": "2026-10-06T21:13:24.520Z",
		"size": 972727,
		"path": "../public/graphics/loler-machine.jpg"
	},
	"/graphics/practice-73-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f9b6-Egf2UFEVy/EdV1V5FBOSWPkWlRE\"",
		"mtime": "2026-10-06T21:13:24.552Z",
		"size": 522678,
		"path": "../public/graphics/practice-73-2.jpg"
	},
	"/graphics/practice-76-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"6cc64-6L5rX2/Bwj/kkeEF72ZubbH3UNw\"",
		"mtime": "2026-10-06T21:13:24.548Z",
		"size": 445540,
		"path": "../public/graphics/practice-76-2.jpg"
	},
	"/graphics/machine-room.jpg": {
		"type": "image/jpeg",
		"etag": "\"b163a-yoHzOVk9kIrMlKqHzzxleaRPJkk\"",
		"mtime": "2026-10-06T21:13:24.508Z",
		"size": 726586,
		"path": "../public/graphics/machine-room.jpg"
	},
	"/graphics/neon-doors.jpg": {
		"type": "image/jpeg",
		"etag": "\"966fc-tXC183VnatvGOaDKpkeKHWNUpVk\"",
		"mtime": "2026-10-06T21:13:24.524Z",
		"size": 616188,
		"path": "../public/graphics/neon-doors.jpg"
	},
	"/graphics/neon-shaft.jpg": {
		"type": "image/jpeg",
		"etag": "\"8d6b6-6v49+KVrqNZXYWYC72BBEFa/zxw\"",
		"mtime": "2026-10-06T21:13:24.520Z",
		"size": 579254,
		"path": "../public/graphics/neon-shaft.jpg"
	},
	"/graphics/practice-20.jpg": {
		"type": "image/jpeg",
		"etag": "\"ba475-3N3Irari8Gw2xuuQSpK5degSxIs\"",
		"mtime": "2026-10-06T21:13:24.536Z",
		"size": 762997,
		"path": "../public/graphics/practice-20.jpg"
	},
	"/graphics/practice-28.jpg": {
		"type": "image/jpeg",
		"etag": "\"a5805-PAMHtJywg2rdqyh8+bPgrwKF8nY\"",
		"mtime": "2026-10-06T21:13:24.540Z",
		"size": 677893,
		"path": "../public/graphics/practice-28.jpg"
	},
	"/graphics/practice-70.jpg": {
		"type": "image/jpeg",
		"etag": "\"a3833-0LZTHe1Ur28WFHY1aNFM9iI7bx8\"",
		"mtime": "2026-10-06T21:13:24.544Z",
		"size": 669747,
		"path": "../public/graphics/practice-70.jpg"
	},
	"/graphics/practice-72.jpg": {
		"type": "image/jpeg",
		"etag": "\"95296-259k7LtFFteut6Ack5cmmdbMX1s\"",
		"mtime": "2026-10-06T21:13:24.560Z",
		"size": 610966,
		"path": "../public/graphics/practice-72.jpg"
	},
	"/graphics/practice-duty-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"77a56-nMSncgft1ELJyJHiGON1Wi03CW0\"",
		"mtime": "2026-10-06T21:13:24.580Z",
		"size": 490070,
		"path": "../public/graphics/practice-duty-2.jpg"
	},
	"/graphics/practice-73.jpg": {
		"type": "image/jpeg",
		"etag": "\"c9511-JW8SjVCZnvc+zzG38Ek6QWLtMR8\"",
		"mtime": "2026-10-06T21:13:24.560Z",
		"size": 824593,
		"path": "../public/graphics/practice-73.jpg"
	},
	"/graphics/practice-76.jpg": {
		"type": "image/jpeg",
		"etag": "\"a09bd-lXI7jaEKJo36KzH4lrfm9yKA+EE\"",
		"mtime": "2026-10-06T21:13:24.560Z",
		"size": 657853,
		"path": "../public/graphics/practice-76.jpg"
	},
	"/graphics/practice-duty.jpg": {
		"type": "image/jpeg",
		"etag": "\"bf8b2-e/muk7kUtijUvatRlbpbMM+nU18\"",
		"mtime": "2026-10-06T21:13:24.576Z",
		"size": 784562,
		"path": "../public/graphics/practice-duty.jpg"
	},
	"/graphics/practice-existing-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9b57-xJgvrhwx4SoYPTWaP14senPRVkw\"",
		"mtime": "2026-10-06T21:13:24.584Z",
		"size": 695127,
		"path": "../public/graphics/practice-existing-2.jpg"
	},
	"/graphics/practice-existing.jpg": {
		"type": "image/jpeg",
		"etag": "\"e446c-ULaHdI5H5Sw4CF8EiJFq6eKpADw\"",
		"mtime": "2026-10-06T21:13:24.580Z",
		"size": 935020,
		"path": "../public/graphics/practice-existing.jpg"
	},
	"/graphics/practice-family-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"8dcfc-0ACpa1LjiK6brmkoMAgvsIqeujY\"",
		"mtime": "2026-10-06T21:13:24.592Z",
		"size": 580860,
		"path": "../public/graphics/practice-family-2.jpg"
	},
	"/__grok/install/styles.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1a3d-VUsWOMAheo1/P30EqU5qaIkyvIQ\"",
		"mtime": "2026-10-06T21:13:24.340Z",
		"size": 6717,
		"path": "../public/__grok/install/styles.css"
	},
	"/graphics/ans/q-20-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"720d7-rYH4rXbCvZrP/6C7IXlotuTGMOY\"",
		"mtime": "2026-10-06T21:13:24.348Z",
		"size": 467159,
		"path": "../public/graphics/ans/q-20-1.jpg"
	},
	"/graphics/ans/q-20-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"72062-tp66P3BI3c8nmLGhvDH7pgMwSXk\"",
		"mtime": "2026-10-06T21:13:24.596Z",
		"size": 467042,
		"path": "../public/graphics/ans/q-20-2.jpg"
	},
	"/graphics/ans/q-28-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"4e3f5-qg27EAhh7LQ2UsruqKKgGRqD6VM\"",
		"mtime": "2026-10-06T21:13:24.592Z",
		"size": 320501,
		"path": "../public/graphics/ans/q-28-1.jpg"
	},
	"/graphics/ans/q-28-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"576a6-QTX6rxSz34WXFI+vfaLc0rmrg20\"",
		"mtime": "2026-10-06T21:13:24.600Z",
		"size": 358054,
		"path": "../public/graphics/ans/q-28-2.jpg"
	},
	"/graphics/ans/q-70-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d3ee-TYjK0Feee90eCagvEhZjIWtVN1Q\"",
		"mtime": "2026-10-06T21:13:24.608Z",
		"size": 381934,
		"path": "../public/graphics/ans/q-70-1.jpg"
	},
	"/graphics/practice-family.jpg": {
		"type": "image/jpeg",
		"etag": "\"a4e6a-cFNmHJeoNmzh15eckrRQIAGIZjc\"",
		"mtime": "2026-10-06T21:13:24.592Z",
		"size": 675434,
		"path": "../public/graphics/practice-family.jpg"
	},
	"/graphics/shaft-floors.jpg": {
		"type": "image/jpeg",
		"etag": "\"bf26c-iS/xLyuP6bZOe2l4I+z3MTPO+DI\"",
		"mtime": "2026-10-06T21:13:24.584Z",
		"size": 782956,
		"path": "../public/graphics/shaft-floors.jpg"
	},
	"/graphics/uk-cutaway.jpg": {
		"type": "image/jpeg",
		"etag": "\"bf26c-iS/xLyuP6bZOe2l4I+z3MTPO+DI\"",
		"mtime": "2026-10-06T21:13:24.604Z",
		"size": 782956,
		"path": "../public/graphics/uk-cutaway.jpg"
	},
	"/graphics/ans/q-72-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"6b384-N/HxJJznXeZAMeSfcemKlBo08oI\"",
		"mtime": "2026-10-06T21:13:24.616Z",
		"size": 439172,
		"path": "../public/graphics/ans/q-72-2.jpg"
	},
	"/graphics/ans/q-73-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"76c43-aKWvZnmH+P6XF6yPwu3c7txyXYY\"",
		"mtime": "2026-10-06T21:13:24.616Z",
		"size": 486467,
		"path": "../public/graphics/ans/q-73-1.jpg"
	},
	"/graphics/ans/q-70-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"52d19-tLWL1qIXNZjZJJHyDJ61t03dKLI\"",
		"mtime": "2026-10-06T21:13:24.604Z",
		"size": 339225,
		"path": "../public/graphics/ans/q-70-2.jpg"
	},
	"/graphics/ans/q-73-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"79fba-hfVj0z6nLxzAaHN2DrIV7SKarkk\"",
		"mtime": "2026-10-06T21:13:24.628Z",
		"size": 499642,
		"path": "../public/graphics/ans/q-73-2.jpg"
	},
	"/graphics/ans/q-76b-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"72dbf-SErjgWrhRTKM6qlrIhEi/XOpkpU\"",
		"mtime": "2026-10-06T21:13:24.632Z",
		"size": 470463,
		"path": "../public/graphics/ans/q-76b-2.jpg"
	},
	"/graphics/ans/q-70-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"5f9bc-M1ddFn7UEYYo97uBwwcIrOyUuuQ\"",
		"mtime": "2026-10-06T21:13:24.608Z",
		"size": 391612,
		"path": "../public/graphics/ans/q-70-4.jpg"
	},
	"/graphics/ans/q-76b-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"648d2-GdncGKuTvOBIzDErrdUK57FGFGM\"",
		"mtime": "2026-10-06T21:13:24.624Z",
		"size": 411858,
		"path": "../public/graphics/ans/q-76b-3.jpg"
	},
	"/graphics/ans/q-72-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"94f4a-U+xCm9OoD8bTbcBP8Ad2tJNdDM4\"",
		"mtime": "2026-10-06T21:13:24.620Z",
		"size": 610122,
		"path": "../public/graphics/ans/q-72-3.jpg"
	},
	"/graphics/ans/q-76b-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"7a419-k/3IsH9tVaDs3r+IhY0L0gA/W7k\"",
		"mtime": "2026-10-06T21:13:24.628Z",
		"size": 500761,
		"path": "../public/graphics/ans/q-76b-1.jpg"
	},
	"/graphics/ans/q-70-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"83164-xePwtOcCNKkTCweKGSGrnDZNr44\"",
		"mtime": "2026-10-06T21:13:24.612Z",
		"size": 536932,
		"path": "../public/graphics/ans/q-70-3.jpg"
	},
	"/graphics/ans/q-72-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"7155d-pjRBMleQj9S36y7X8tQKDzc4/yU\"",
		"mtime": "2026-10-06T21:13:24.620Z",
		"size": 464221,
		"path": "../public/graphics/ans/q-72-1.jpg"
	},
	"/graphics/ans/q-76b-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"69912-oWW07iJS1hVPe+jthS1rkWZAma0\"",
		"mtime": "2026-10-06T21:13:24.636Z",
		"size": 432402,
		"path": "../public/graphics/ans/q-76b-4.jpg"
	},
	"/graphics/ans/q-76c-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"7a312-vmEEO3XU8ee5BTzUi8X5FCR0j/o\"",
		"mtime": "2026-10-06T21:13:24.644Z",
		"size": 500498,
		"path": "../public/graphics/ans/q-76c-2.jpg"
	},
	"/graphics/ans/q-76c-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"6d6e3-/fjaHMc7dsKhjYjY/yxiGVNppEU\"",
		"mtime": "2026-10-06T21:13:24.648Z",
		"size": 448227,
		"path": "../public/graphics/ans/q-76c-3.jpg"
	},
	"/graphics/ans/q-76b-5.jpg": {
		"type": "image/jpeg",
		"etag": "\"81cf3-oYXaAKpCgXxT34X6WVmsRYn7TI0\"",
		"mtime": "2026-10-06T21:13:24.648Z",
		"size": 531699,
		"path": "../public/graphics/ans/q-76b-5.jpg"
	},
	"/graphics/ans/q-76c-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"5561f-dqTlpaHQDtOYPPmhZicdv/TE5hU\"",
		"mtime": "2026-10-06T21:13:24.656Z",
		"size": 349727,
		"path": "../public/graphics/ans/q-76c-4.jpg"
	},
	"/graphics/ans/q-76m-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"5f078-cqEeCovieJ6XDB5J+Qge1Bxk828\"",
		"mtime": "2026-10-06T21:13:24.660Z",
		"size": 389240,
		"path": "../public/graphics/ans/q-76m-1.jpg"
	},
	"/graphics/ans/q-76c-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"817ad-tfppvlXtr4mjfhcPkZAw94oZPGY\"",
		"mtime": "2026-10-06T21:13:24.640Z",
		"size": 530349,
		"path": "../public/graphics/ans/q-76c-1.jpg"
	},
	"/graphics/ans/q-76m-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"500d3-INcCNpNzuO0FZJChQcFkonL/rIo\"",
		"mtime": "2026-10-06T21:13:24.660Z",
		"size": 327891,
		"path": "../public/graphics/ans/q-76m-2.jpg"
	},
	"/graphics/ans/q-76m-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"5228b-8Vd4tQJg1NvDNdX3IwZ6x4Ed5gQ\"",
		"mtime": "2026-10-06T21:13:24.668Z",
		"size": 336523,
		"path": "../public/graphics/ans/q-76m-3.jpg"
	},
	"/graphics/ans/q-76p-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"6f574-RgCcsjnmE/U/J+ospK10HoJUiYQ\"",
		"mtime": "2026-10-06T21:13:24.672Z",
		"size": 456052,
		"path": "../public/graphics/ans/q-76p-1.jpg"
	},
	"/graphics/ans/q-76p-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"66d34-EV0Jbicqrwu3+RXfglj2QK5D1v4\"",
		"mtime": "2026-10-06T21:13:24.664Z",
		"size": 421172,
		"path": "../public/graphics/ans/q-76p-3.jpg"
	},
	"/graphics/ans/q-76p-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"79891-bZrVdGpcg/KgyGf3d5gfQe3ZmaQ\"",
		"mtime": "2026-10-06T21:13:24.664Z",
		"size": 497809,
		"path": "../public/graphics/ans/q-76p-2.jpg"
	},
	"/graphics/ans/q-76p-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"70823-xSbuF75C8XZRIu7fB1sg40wwzWM\"",
		"mtime": "2026-10-06T21:13:24.672Z",
		"size": 460835,
		"path": "../public/graphics/ans/q-76p-4.jpg"
	},
	"/graphics/ans/q-cmp-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"615f6-n6C7GAoXfsO4+p0mXEqQ1WIrbQU\"",
		"mtime": "2026-10-06T21:13:24.688Z",
		"size": 398838,
		"path": "../public/graphics/ans/q-cmp-3.jpg"
	},
	"/graphics/ans/q-cmp-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"7b9ec-xJzYt7iIIsgQYz0K8Z+XtM0xlTg\"",
		"mtime": "2026-10-06T21:13:24.684Z",
		"size": 506348,
		"path": "../public/graphics/ans/q-cmp-2.jpg"
	},
	"/graphics/ans/q-duty-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"684b8-OUFOI1CLmG37wit17Vce4m+8EEA\"",
		"mtime": "2026-10-06T21:13:24.684Z",
		"size": 427192,
		"path": "../public/graphics/ans/q-duty-2.jpg"
	},
	"/graphics/ans/q-cmp-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"75f4f-uKGNhTEpKgSai9BUAQPzDW+Q3iU\"",
		"mtime": "2026-10-06T21:13:24.676Z",
		"size": 483151,
		"path": "../public/graphics/ans/q-cmp-1.jpg"
	},
	"/graphics/ans/q-duty-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"67d9f-ox9DmZ3xAF7yspf30biOFiW/cBI\"",
		"mtime": "2026-10-06T21:13:24.680Z",
		"size": 425375,
		"path": "../public/graphics/ans/q-duty-1.jpg"
	},
	"/graphics/ans/q-duty-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"4d994-+pcU3zd1grIU9i2NzsXG6MR/ppg\"",
		"mtime": "2026-10-06T21:13:24.692Z",
		"size": 317844,
		"path": "../public/graphics/ans/q-duty-3.jpg"
	},
	"/graphics/ans/q-family-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"6b477-MaISYC/MBrh8c71l98OJU7yOIhE\"",
		"mtime": "2026-10-06T21:13:24.704Z",
		"size": 439415,
		"path": "../public/graphics/ans/q-family-2.jpg"
	},
	"/graphics/ans/q-reg-28.jpg": {
		"type": "image/jpeg",
		"etag": "\"6a3e5-F9VSlYS/WnnrX06XplfWsHFZvyw\"",
		"mtime": "2026-10-06T21:13:24.708Z",
		"size": 435173,
		"path": "../public/graphics/ans/q-reg-28.jpg"
	},
	"/graphics/ans/q-family-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"73cf5-0BiWekY8LvR7ZjKnzrjmAkXcfP8\"",
		"mtime": "2026-10-06T21:13:24.704Z",
		"size": 474357,
		"path": "../public/graphics/ans/q-family-3.jpg"
	},
	"/graphics/ans/q-ex-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"98722-9AjW9WS20jbmzVwY/DBLeQvR+Hc\"",
		"mtime": "2026-10-06T21:13:24.696Z",
		"size": 624418,
		"path": "../public/graphics/ans/q-ex-2.jpg"
	},
	"/graphics/ans/q-family-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"85562-GFEEpNRXNbNzuep7RLvekwEPHrI\"",
		"mtime": "2026-10-06T21:13:24.700Z",
		"size": 546146,
		"path": "../public/graphics/ans/q-family-1.jpg"
	},
	"/graphics/ans/q-reg-cdm.jpg": {
		"type": "image/jpeg",
		"etag": "\"8b9fc-JYrGCeOH5nthz7+ao2YomyYxNgo\"",
		"mtime": "2026-10-06T21:13:24.708Z",
		"size": 571900,
		"path": "../public/graphics/ans/q-reg-cdm.jpg"
	},
	"/graphics/ans/q-ex-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"926fa-0iKMLL3qvo6B6CC49BRdpQSXAgU\"",
		"mtime": "2026-10-06T21:13:24.696Z",
		"size": 599802,
		"path": "../public/graphics/ans/q-ex-1.jpg"
	},
	"/graphics/ans/q-reg-riddor.jpg": {
		"type": "image/jpeg",
		"etag": "\"5acf1-0nM3CtbYV+MylWagSwkJ6iNNlms\"",
		"mtime": "2026-10-06T21:13:24.728Z",
		"size": 371953,
		"path": "../public/graphics/ans/q-reg-riddor.jpg"
	},
	"/graphics/ans2/q-20-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"66294-2Dv1YQkYY5vpR+4qIg775y1ojpA\"",
		"mtime": "2026-10-06T21:13:24.340Z",
		"size": 418452,
		"path": "../public/graphics/ans2/q-20-1.jpg"
	},
	"/graphics/ans/q-reg-mach.jpg": {
		"type": "image/jpeg",
		"etag": "\"7d4ff-/Xyifw9GP9xdBGj4VcbQSfoy38s\"",
		"mtime": "2026-10-06T21:13:24.716Z",
		"size": 513279,
		"path": "../public/graphics/ans/q-reg-mach.jpg"
	},
	"/graphics/ans/q-reg-puwer.jpg": {
		"type": "image/jpeg",
		"etag": "\"6efeb-0TkaUdn00yF4j1QmstUaAw89a3Q\"",
		"mtime": "2026-10-06T21:13:24.716Z",
		"size": 454635,
		"path": "../public/graphics/ans/q-reg-puwer.jpg"
	},
	"/graphics/ans/q-reg-wah.jpg": {
		"type": "image/jpeg",
		"etag": "\"7c9db-GRBjJMH/Dp4JB+McCFO3n5a7jE4\"",
		"mtime": "2026-10-06T21:13:24.724Z",
		"size": 510427,
		"path": "../public/graphics/ans/q-reg-wah.jpg"
	},
	"/graphics/ans/q-reg-fire.jpg": {
		"type": "image/jpeg",
		"etag": "\"8b820-NXymayhv7R0NIO5TU34zaDSPpaM\"",
		"mtime": "2026-10-06T21:13:24.720Z",
		"size": 571424,
		"path": "../public/graphics/ans/q-reg-fire.jpg"
	},
	"/graphics/ans2/q-20-1c.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a063-yUMsjm05A5Q5kROI3bXogsUffzQ\"",
		"mtime": "2026-10-06T21:13:24.728Z",
		"size": 368739,
		"path": "../public/graphics/ans2/q-20-1c.jpg"
	},
	"/graphics/ans2/q-20-1b.jpg": {
		"type": "image/jpeg",
		"etag": "\"6e2c9-Lz7uz+kARHKIWbvOqJNv79+qULQ\"",
		"mtime": "2026-10-06T21:13:24.728Z",
		"size": 451273,
		"path": "../public/graphics/ans2/q-20-1b.jpg"
	},
	"/graphics/ans2/q-20-1d.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d24b-bHFAxe18+FXXgCOvONlDoyp6TaU\"",
		"mtime": "2026-10-06T21:13:24.732Z",
		"size": 381515,
		"path": "../public/graphics/ans2/q-20-1d.jpg"
	},
	"/graphics/ans2/q-20-1e.jpg": {
		"type": "image/jpeg",
		"etag": "\"55193-ru1nJtNJNAh0dYsCPFjwThRs2qs\"",
		"mtime": "2026-10-06T21:13:24.732Z",
		"size": 348563,
		"path": "../public/graphics/ans2/q-20-1e.jpg"
	},
	"/graphics/ans2/q-20-1f.jpg": {
		"type": "image/jpeg",
		"etag": "\"65f18-Vu99POa32jFXO0AR4do9BkWD3V8\"",
		"mtime": "2026-10-06T21:13:24.748Z",
		"size": 417560,
		"path": "../public/graphics/ans2/q-20-1f.jpg"
	},
	"/graphics/ans/q-reg-eq.jpg": {
		"type": "image/jpeg",
		"etag": "\"86e39-8DB8ZBPwevf600XQdtrY2YbwPBc\"",
		"mtime": "2026-10-06T21:13:24.724Z",
		"size": 552505,
		"path": "../public/graphics/ans/q-reg-eq.jpg"
	},
	"/graphics/ans2/q-20-1g.jpg": {
		"type": "image/jpeg",
		"etag": "\"63ffe-TAMG1yM3itQq2IBDNYVfHlwT+Yk\"",
		"mtime": "2026-10-06T21:13:24.736Z",
		"size": 409598,
		"path": "../public/graphics/ans2/q-20-1g.jpg"
	},
	"/graphics/ans2/q-20-1h.jpg": {
		"type": "image/jpeg",
		"etag": "\"6b17e-DwvY8lDRk2ifzEHhvJRS4ljFv2E\"",
		"mtime": "2026-10-06T21:13:24.740Z",
		"size": 438654,
		"path": "../public/graphics/ans2/q-20-1h.jpg"
	},
	"/graphics/ans2/q-20-1j.jpg": {
		"type": "image/jpeg",
		"etag": "\"6ab03-K6YMlQCrZXD4v1HNrDtje2Oe69M\"",
		"mtime": "2026-10-06T21:13:24.748Z",
		"size": 436995,
		"path": "../public/graphics/ans2/q-20-1j.jpg"
	},
	"/graphics/ans2/q-20-1k.jpg": {
		"type": "image/jpeg",
		"etag": "\"678b4-zmd+U5/7iTgRgmWGfwOHDFWVK3s\"",
		"mtime": "2026-10-06T21:13:24.748Z",
		"size": 424116,
		"path": "../public/graphics/ans2/q-20-1k.jpg"
	},
	"/graphics/ans2/q-20-1i.jpg": {
		"type": "image/jpeg",
		"etag": "\"742b7-yrEEH106mfCKeWOT8bpCHHSYwIo\"",
		"mtime": "2026-10-06T21:13:24.740Z",
		"size": 475831,
		"path": "../public/graphics/ans2/q-20-1i.jpg"
	},
	"/graphics/ans2/q-20-1l.jpg": {
		"type": "image/jpeg",
		"etag": "\"75ed4-4NMEH+bsn/QHEvhWgyAZBi7JXwM\"",
		"mtime": "2026-10-06T21:13:24.748Z",
		"size": 483028,
		"path": "../public/graphics/ans2/q-20-1l.jpg"
	},
	"/graphics/ans2/q-20-1m.jpg": {
		"type": "image/jpeg",
		"etag": "\"79c8d-7kF+y4yB6T5avtlLRyXv2gfq41E\"",
		"mtime": "2026-10-06T21:13:24.752Z",
		"size": 498829,
		"path": "../public/graphics/ans2/q-20-1m.jpg"
	},
	"/graphics/ans2/q-20-1n.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f1cd-LvNrMhLL5JxmTW/18Sliwa6im7A\"",
		"mtime": "2026-10-06T21:13:24.760Z",
		"size": 520653,
		"path": "../public/graphics/ans2/q-20-1n.jpg"
	},
	"/graphics/ans2/q-20-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c3db-2+NutAJNcgju9tW+12vg7PyvcgA\"",
		"mtime": "2026-10-06T21:13:24.756Z",
		"size": 377819,
		"path": "../public/graphics/ans2/q-20-2.jpg"
	},
	"/graphics/ans2/q-20-2b.jpg": {
		"type": "image/jpeg",
		"etag": "\"697ca-doHTbsS5l1a0+8BVt0C+0B9CXgI\"",
		"mtime": "2026-10-06T21:13:24.764Z",
		"size": 432074,
		"path": "../public/graphics/ans2/q-20-2b.jpg"
	},
	"/graphics/ans2/q-20-2c.jpg": {
		"type": "image/jpeg",
		"etag": "\"70f2f-CdCqgvyVzREVCZR59fRl6RYiE0M\"",
		"mtime": "2026-10-06T21:13:24.768Z",
		"size": 462639,
		"path": "../public/graphics/ans2/q-20-2c.jpg"
	},
	"/graphics/ans2/q-28-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"38e88-Vr2utnkLEzug+2B2Duh+Hl09mAM\"",
		"mtime": "2026-10-06T21:13:24.760Z",
		"size": 233096,
		"path": "../public/graphics/ans2/q-28-1.jpg"
	},
	"/graphics/ans2/q-28-1b.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d37d-XOu2c7htTXeBvRHeiEs86veKFDI\"",
		"mtime": "2026-10-06T21:13:24.764Z",
		"size": 250749,
		"path": "../public/graphics/ans2/q-28-1b.jpg"
	},
	"/graphics/ans2/q-28-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"4cc64-k21sRhVcQt+otGnxyiwgmSTr5Ek\"",
		"mtime": "2026-10-06T21:13:24.764Z",
		"size": 314468,
		"path": "../public/graphics/ans2/q-28-2.jpg"
	},
	"/graphics/ans2/q-70-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"6ea82-rSKLnywx1sZChy5+d9Y0BnFakdI\"",
		"mtime": "2026-10-06T21:13:24.772Z",
		"size": 453250,
		"path": "../public/graphics/ans2/q-70-1.jpg"
	},
	"/graphics/ans2/q-70-1b.jpg": {
		"type": "image/jpeg",
		"etag": "\"6ff44-bCOJ6+WGlrTq4WRy900nD8EKphE\"",
		"mtime": "2026-10-06T21:13:24.772Z",
		"size": 458564,
		"path": "../public/graphics/ans2/q-70-1b.jpg"
	},
	"/graphics/ans2/q-70-1d.jpg": {
		"type": "image/jpeg",
		"etag": "\"69e7a-lol8JC0vzsFWrOQEDcv8nmb2uQ8\"",
		"mtime": "2026-10-06T21:13:24.776Z",
		"size": 433786,
		"path": "../public/graphics/ans2/q-70-1d.jpg"
	},
	"/graphics/ans2/q-70-1c.jpg": {
		"type": "image/jpeg",
		"etag": "\"67d4e-S1Vy15GmbpYKhUocICl+4eDuhF0\"",
		"mtime": "2026-10-06T21:13:24.768Z",
		"size": 425294,
		"path": "../public/graphics/ans2/q-70-1c.jpg"
	},
	"/graphics/ans2/q-70-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"61eec-h5TDiM1cRR0qkJxaRcLmycFsSRo\"",
		"mtime": "2026-10-06T21:13:24.776Z",
		"size": 401132,
		"path": "../public/graphics/ans2/q-70-2.jpg"
	},
	"/graphics/ans2/q-70-2b.jpg": {
		"type": "image/jpeg",
		"etag": "\"682e9-91WzwBtoOKE4EZ4k9snl0U0tTM0\"",
		"mtime": "2026-10-06T21:13:24.788Z",
		"size": 426729,
		"path": "../public/graphics/ans2/q-70-2b.jpg"
	},
	"/graphics/ans2/q-70-2c.jpg": {
		"type": "image/jpeg",
		"etag": "\"53d96-FbkFskIuEzpvoH9PWmlq7KGdmv4\"",
		"mtime": "2026-10-06T21:13:24.780Z",
		"size": 343446,
		"path": "../public/graphics/ans2/q-70-2c.jpg"
	},
	"/graphics/ans2/q-70-2d.jpg": {
		"type": "image/jpeg",
		"etag": "\"54c2e-tHnIS0u44zQosiZmqieGq/q9nZo\"",
		"mtime": "2026-10-06T21:13:24.788Z",
		"size": 347182,
		"path": "../public/graphics/ans2/q-70-2d.jpg"
	},
	"/graphics/ans2/q-70-2e.jpg": {
		"type": "image/jpeg",
		"etag": "\"58435-YovpBR6NyMBTsp7xS+ex6jDg3sk\"",
		"mtime": "2026-10-06T21:13:24.784Z",
		"size": 361525,
		"path": "../public/graphics/ans2/q-70-2e.jpg"
	},
	"/graphics/ans2/q-70-2f.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c0b9-63pYKzWLxhSvlgljCqYcqmeBo/U\"",
		"mtime": "2026-10-06T21:13:24.784Z",
		"size": 377017,
		"path": "../public/graphics/ans2/q-70-2f.jpg"
	},
	"/graphics/ans2/q-70-2g.jpg": {
		"type": "image/jpeg",
		"etag": "\"5dde3-zoJRNkgzEQuIDDq2ijya0lQTjz0\"",
		"mtime": "2026-10-06T21:13:24.796Z",
		"size": 384483,
		"path": "../public/graphics/ans2/q-70-2g.jpg"
	},
	"/graphics/ans2/q-70-2h.jpg": {
		"type": "image/jpeg",
		"etag": "\"62fe7-yl94iG33K4cityloETnJ/cITKaw\"",
		"mtime": "2026-10-06T21:13:24.792Z",
		"size": 405479,
		"path": "../public/graphics/ans2/q-70-2h.jpg"
	},
	"/graphics/ans2/q-70-2i.jpg": {
		"type": "image/jpeg",
		"etag": "\"6e467-toZHKQV/Pt95DEbaq4VqzvwM1fY\"",
		"mtime": "2026-10-06T21:13:24.796Z",
		"size": 451687,
		"path": "../public/graphics/ans2/q-70-2i.jpg"
	},
	"/graphics/ans2/q-70-2k.jpg": {
		"type": "image/jpeg",
		"etag": "\"60fb9-f+weZ7q/RUBnxNilNAur9qANjoQ\"",
		"mtime": "2026-10-06T21:13:24.804Z",
		"size": 397241,
		"path": "../public/graphics/ans2/q-70-2k.jpg"
	},
	"/graphics/ans2/q-70-2j.jpg": {
		"type": "image/jpeg",
		"etag": "\"660e3-BYWcK5//Bu3CaJS/LfqAhqV1oxY\"",
		"mtime": "2026-10-06T21:13:24.792Z",
		"size": 418019,
		"path": "../public/graphics/ans2/q-70-2j.jpg"
	},
	"/graphics/ans2/q-70-2l.jpg": {
		"type": "image/jpeg",
		"etag": "\"6b5c5-GvjMcqURW4zFLiay4h60jT1f2ec\"",
		"mtime": "2026-10-06T21:13:24.808Z",
		"size": 439749,
		"path": "../public/graphics/ans2/q-70-2l.jpg"
	},
	"/graphics/ans2/q-70-2m.jpg": {
		"type": "image/jpeg",
		"etag": "\"6d12b-AN0FekNNA2yBHwpYG3BntywRkYU\"",
		"mtime": "2026-10-06T21:13:24.808Z",
		"size": 446763,
		"path": "../public/graphics/ans2/q-70-2m.jpg"
	},
	"/graphics/ans2/q-70-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"af3ec-UzJVgBFdkRj+Xg9yYjHAC/UaexQ\"",
		"mtime": "2026-10-06T21:13:24.816Z",
		"size": 717804,
		"path": "../public/graphics/ans2/q-70-3.jpg"
	},
	"/graphics/ans2/q-70-3b.jpg": {
		"type": "image/jpeg",
		"etag": "\"ad07e-FKr/3YV4pEbDmOjs4QDKj5mQcxE\"",
		"mtime": "2026-10-06T21:13:24.828Z",
		"size": 708734,
		"path": "../public/graphics/ans2/q-70-3b.jpg"
	},
	"/graphics/ans2/q-70-3c.jpg": {
		"type": "image/jpeg",
		"etag": "\"ad5fb-im574wT/EQYyhy022aX+0vwjYys\"",
		"mtime": "2026-10-06T21:13:24.820Z",
		"size": 710139,
		"path": "../public/graphics/ans2/q-70-3c.jpg"
	},
	"/graphics/ans2/q-70-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"5fb66-vwjbf1laMbYsbi70n7Ov9uyVsW8\"",
		"mtime": "2026-10-06T21:13:24.820Z",
		"size": 392038,
		"path": "../public/graphics/ans2/q-70-4.jpg"
	},
	"/graphics/ans2/q-70-4b.jpg": {
		"type": "image/jpeg",
		"etag": "\"6b742-1TQd1dM43nMKzz6BNXp3Ucq45GM\"",
		"mtime": "2026-10-06T21:13:24.828Z",
		"size": 440130,
		"path": "../public/graphics/ans2/q-70-4b.jpg"
	},
	"/graphics/ans2/q-70-4d.jpg": {
		"type": "image/jpeg",
		"etag": "\"59136-cnmttyqQiFTuxiYD/D9nj56zcVw\"",
		"mtime": "2026-10-06T21:13:24.836Z",
		"size": 364854,
		"path": "../public/graphics/ans2/q-70-4d.jpg"
	},
	"/graphics/ans2/q-70-4c.jpg": {
		"type": "image/jpeg",
		"etag": "\"71af5-oOeVFM4OWmcLMcJcopTP4jIC5yQ\"",
		"mtime": "2026-10-06T21:13:24.824Z",
		"size": 465653,
		"path": "../public/graphics/ans2/q-70-4c.jpg"
	},
	"/graphics/ans2/q-70-4g.jpg": {
		"type": "image/jpeg",
		"etag": "\"6148b-lIIJoAigNDO0WSrJ4Nlt/cOtAmg\"",
		"mtime": "2026-10-06T21:13:24.840Z",
		"size": 398475,
		"path": "../public/graphics/ans2/q-70-4g.jpg"
	},
	"/graphics/ans2/q-70-4f.jpg": {
		"type": "image/jpeg",
		"etag": "\"4d627-gwgkuP5HWmH8iBP2P4dclM2L+ZE\"",
		"mtime": "2026-10-06T21:13:24.832Z",
		"size": 316967,
		"path": "../public/graphics/ans2/q-70-4f.jpg"
	},
	"/graphics/ans2/q-70-3d.jpg": {
		"type": "image/jpeg",
		"etag": "\"8e5db-D6lN5L4rlRreQZYT2AP43dkKwlE\"",
		"mtime": "2026-10-06T21:13:24.824Z",
		"size": 583131,
		"path": "../public/graphics/ans2/q-70-3d.jpg"
	},
	"/graphics/ans2/q-70-4h.jpg": {
		"type": "image/jpeg",
		"etag": "\"5dde3-zoJRNkgzEQuIDDq2ijya0lQTjz0\"",
		"mtime": "2026-10-06T21:13:24.844Z",
		"size": 384483,
		"path": "../public/graphics/ans2/q-70-4h.jpg"
	},
	"/graphics/ans2/q-70-4i.jpg": {
		"type": "image/jpeg",
		"etag": "\"62fe7-yl94iG33K4cityloETnJ/cITKaw\"",
		"mtime": "2026-10-06T21:13:24.844Z",
		"size": 405479,
		"path": "../public/graphics/ans2/q-70-4i.jpg"
	},
	"/graphics/ans2/q-70-4j.jpg": {
		"type": "image/jpeg",
		"etag": "\"6e467-toZHKQV/Pt95DEbaq4VqzvwM1fY\"",
		"mtime": "2026-10-06T21:13:24.844Z",
		"size": 451687,
		"path": "../public/graphics/ans2/q-70-4j.jpg"
	},
	"/graphics/ans2/q-70-4k.jpg": {
		"type": "image/jpeg",
		"etag": "\"660e3-BYWcK5//Bu3CaJS/LfqAhqV1oxY\"",
		"mtime": "2026-10-06T21:13:24.852Z",
		"size": 418019,
		"path": "../public/graphics/ans2/q-70-4k.jpg"
	},
	"/graphics/ans2/q-70-4l.jpg": {
		"type": "image/jpeg",
		"etag": "\"60fb9-f+weZ7q/RUBnxNilNAur9qANjoQ\"",
		"mtime": "2026-10-06T21:13:24.852Z",
		"size": 397241,
		"path": "../public/graphics/ans2/q-70-4l.jpg"
	},
	"/graphics/ans2/q-70-4m.jpg": {
		"type": "image/jpeg",
		"etag": "\"6e87e-7F9szqK/9E7pCgsn1XLeKjBRwyk\"",
		"mtime": "2026-10-06T21:13:24.860Z",
		"size": 452734,
		"path": "../public/graphics/ans2/q-70-4m.jpg"
	},
	"/graphics/ans2/q-70-4n.jpg": {
		"type": "image/jpeg",
		"etag": "\"79e7a-mPUjYsJQmFoErmmJqvQiYks/HmE\"",
		"mtime": "2026-10-06T21:13:24.856Z",
		"size": 499322,
		"path": "../public/graphics/ans2/q-70-4n.jpg"
	},
	"/graphics/ans2/q-70-4e.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c5ad-CkBamPz1ayKgvDcgdIOtyYxTdWM\"",
		"mtime": "2026-10-06T21:13:24.836Z",
		"size": 378285,
		"path": "../public/graphics/ans2/q-70-4e.jpg"
	},
	"/graphics/ans2/q-72-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"79122-XFFfO1O1TjzBJ3ioHVxfjnTIEAA\"",
		"mtime": "2026-10-06T21:13:24.864Z",
		"size": 495906,
		"path": "../public/graphics/ans2/q-72-1.jpg"
	},
	"/graphics/ans2/q-72-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"59a7d-nNOIe6LvcztnCDGWR1Hpqoofk10\"",
		"mtime": "2026-10-06T21:13:24.864Z",
		"size": 367229,
		"path": "../public/graphics/ans2/q-72-2.jpg"
	},
	"/graphics/ans2/q-72-2b.jpg": {
		"type": "image/jpeg",
		"etag": "\"58cdd-gVn8Qfl5A9TOdyGqHaklBmADC5E\"",
		"mtime": "2026-10-06T21:13:24.872Z",
		"size": 363741,
		"path": "../public/graphics/ans2/q-72-2b.jpg"
	},
	"/graphics/ans2/q-72-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"79805-yhDCeY+Cpi+fdW9g6TI7J8TwiAA\"",
		"mtime": "2026-10-06T21:13:24.880Z",
		"size": 497669,
		"path": "../public/graphics/ans2/q-72-3.jpg"
	},
	"/graphics/ans2/q-72-3b.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d894-2pOmOGDeQ3g0F34hALlSCOUwCpM\"",
		"mtime": "2026-10-06T21:13:24.872Z",
		"size": 383124,
		"path": "../public/graphics/ans2/q-72-3b.jpg"
	},
	"/graphics/ans2/q-70-4o.jpg": {
		"type": "image/jpeg",
		"etag": "\"805ea-7sbKDVQDERr+A8e+k8U74S0mBjM\"",
		"mtime": "2026-10-06T21:13:24.864Z",
		"size": 525802,
		"path": "../public/graphics/ans2/q-70-4o.jpg"
	},
	"/graphics/ans2/q-72-1b.jpg": {
		"type": "image/jpeg",
		"etag": "\"80d0a-5lhsl7+w97OFehlnVsMBs0+7oTM\"",
		"mtime": "2026-10-06T21:13:24.868Z",
		"size": 527626,
		"path": "../public/graphics/ans2/q-72-1b.jpg"
	},
	"/graphics/ans2/q-73-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"74dc4-VkXHodACy8RlMNd5d1HYbafY+zU\"",
		"mtime": "2026-10-06T21:13:24.876Z",
		"size": 478660,
		"path": "../public/graphics/ans2/q-73-1.jpg"
	},
	"/graphics/ans2/q-73-1b.jpg": {
		"type": "image/jpeg",
		"etag": "\"7679e-mSybCfmR9FfyG4VG3g0y/ucNjIw\"",
		"mtime": "2026-10-06T21:13:24.884Z",
		"size": 485278,
		"path": "../public/graphics/ans2/q-73-1b.jpg"
	},
	"/graphics/ans2/q-73-1c.jpg": {
		"type": "image/jpeg",
		"etag": "\"608ff-fh+dj60u5vK8U6PANU3ZvrNYWlc\"",
		"mtime": "2026-10-06T21:13:24.880Z",
		"size": 395519,
		"path": "../public/graphics/ans2/q-73-1c.jpg"
	},
	"/graphics/ans2/q-73-1d.jpg": {
		"type": "image/jpeg",
		"etag": "\"64c0b-ddMoN8sablnemihz6FvcLQ8V5Fc\"",
		"mtime": "2026-10-06T21:13:24.884Z",
		"size": 412683,
		"path": "../public/graphics/ans2/q-73-1d.jpg"
	},
	"/graphics/ans2/q-73-1e.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d0b9-3TrwwCPHLuRu4u/Kq9Fm4jrBOVo\"",
		"mtime": "2026-10-06T21:13:24.888Z",
		"size": 381113,
		"path": "../public/graphics/ans2/q-73-1e.jpg"
	},
	"/graphics/ans2/q-73-1f.jpg": {
		"type": "image/jpeg",
		"etag": "\"675aa-lp8xdyI3we2KBBjRlFGFRl6WU8Q\"",
		"mtime": "2026-10-06T21:13:24.892Z",
		"size": 423338,
		"path": "../public/graphics/ans2/q-73-1f.jpg"
	},
	"/graphics/ans2/q-73-1g.jpg": {
		"type": "image/jpeg",
		"etag": "\"6ab16-dmd07YUeWR90+gU51V18sYGs5DY\"",
		"mtime": "2026-10-06T21:13:24.888Z",
		"size": 437014,
		"path": "../public/graphics/ans2/q-73-1g.jpg"
	},
	"/graphics/ans2/q-73-1i.jpg": {
		"type": "image/jpeg",
		"etag": "\"7549c-aVw375D77gQtwJU9fGVepsfHTz8\"",
		"mtime": "2026-10-06T21:13:24.896Z",
		"size": 480412,
		"path": "../public/graphics/ans2/q-73-1i.jpg"
	},
	"/graphics/ans2/q-73-1h.jpg": {
		"type": "image/jpeg",
		"etag": "\"6e367-xHQQi9a8mBcmdiJK7XxGRqNYZgg\"",
		"mtime": "2026-10-06T21:13:24.904Z",
		"size": 451431,
		"path": "../public/graphics/ans2/q-73-1h.jpg"
	},
	"/graphics/ans2/q-73-1j.jpg": {
		"type": "image/jpeg",
		"etag": "\"67196-nX+YOTiM1kHTRLAQNELyXIwoVAs\"",
		"mtime": "2026-10-06T21:13:24.900Z",
		"size": 422294,
		"path": "../public/graphics/ans2/q-73-1j.jpg"
	},
	"/graphics/ans2/q-73-1k.jpg": {
		"type": "image/jpeg",
		"etag": "\"663ee-x2ueE3eDAGBhqQlUIfeaFIUqQxg\"",
		"mtime": "2026-10-06T21:13:24.900Z",
		"size": 418798,
		"path": "../public/graphics/ans2/q-73-1k.jpg"
	},
	"/graphics/ans2/q-73-1l.jpg": {
		"type": "image/jpeg",
		"etag": "\"6f84d-UkHXuAoyX9i0aPyvdRXH4I3+cA0\"",
		"mtime": "2026-10-06T21:13:24.912Z",
		"size": 456781,
		"path": "../public/graphics/ans2/q-73-1l.jpg"
	},
	"/graphics/ans2/q-73-1n.jpg": {
		"type": "image/jpeg",
		"etag": "\"7da5e-y97ARrurTp8JYGN0LodCIJHCnXE\"",
		"mtime": "2026-10-06T21:13:24.908Z",
		"size": 514654,
		"path": "../public/graphics/ans2/q-73-1n.jpg"
	},
	"/graphics/ans2/q-73-1o.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f060-wZZzwblUeoI0JclxZ8AD2RIPcak\"",
		"mtime": "2026-10-06T21:13:24.916Z",
		"size": 520288,
		"path": "../public/graphics/ans2/q-73-1o.jpg"
	},
	"/graphics/ans2/q-73-1m.jpg": {
		"type": "image/jpeg",
		"etag": "\"790be-A+u+kc7ZlbjswtpkOO8lSDcn4PQ\"",
		"mtime": "2026-10-06T21:13:24.912Z",
		"size": 495806,
		"path": "../public/graphics/ans2/q-73-1m.jpg"
	},
	"/graphics/ans2/q-73-2b.jpg": {
		"type": "image/jpeg",
		"etag": "\"692ae-DoKLb0/AVyk0TmCQf5csE37JfIs\"",
		"mtime": "2026-10-06T21:13:24.920Z",
		"size": 430766,
		"path": "../public/graphics/ans2/q-73-2b.jpg"
	},
	"/graphics/ans2/q-73-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"62563-1Dv6Pe8p5I+nmPDAzCypZ6weGrQ\"",
		"mtime": "2026-10-06T21:13:24.916Z",
		"size": 402787,
		"path": "../public/graphics/ans2/q-73-2.jpg"
	},
	"/graphics/ans2/q-73-2c.jpg": {
		"type": "image/jpeg",
		"etag": "\"71cab-uKS8ueDsnoEpIayaShAfW12gJIQ\"",
		"mtime": "2026-10-06T21:13:24.924Z",
		"size": 466091,
		"path": "../public/graphics/ans2/q-73-2c.jpg"
	},
	"/graphics/ans2/q-73-2d.jpg": {
		"type": "image/jpeg",
		"etag": "\"79655-5+iJdrzC5q2GSAXKrisAYa4OBaw\"",
		"mtime": "2026-10-06T21:13:24.924Z",
		"size": 497237,
		"path": "../public/graphics/ans2/q-73-2d.jpg"
	},
	"/graphics/ans2/q-76b-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"7e0e4-5gLeNRLtvLlK/kieqfhnJ49EzgA\"",
		"mtime": "2026-10-06T21:13:24.936Z",
		"size": 516324,
		"path": "../public/graphics/ans2/q-76b-1.jpg"
	},
	"/graphics/ans2/q-76b-1c.jpg": {
		"type": "image/jpeg",
		"etag": "\"60fce-DJQFkwJ9J//eThV4NrjooRIR1RU\"",
		"mtime": "2026-10-06T21:13:24.940Z",
		"size": 397262,
		"path": "../public/graphics/ans2/q-76b-1c.jpg"
	},
	"/graphics/ans2/q-76b-1d.jpg": {
		"type": "image/jpeg",
		"etag": "\"627be-4AqLWXugEVx1hTQLGmBgBzKYB4I\"",
		"mtime": "2026-10-06T21:13:24.940Z",
		"size": 403390,
		"path": "../public/graphics/ans2/q-76b-1d.jpg"
	},
	"/graphics/ans2/q-76b-1e.jpg": {
		"type": "image/jpeg",
		"etag": "\"5fffa-lUfkV8a3ZMwvrjSPHHaB+vkRaRM\"",
		"mtime": "2026-10-06T21:13:24.952Z",
		"size": 393210,
		"path": "../public/graphics/ans2/q-76b-1e.jpg"
	},
	"/graphics/ans2/q-76b-1f.jpg": {
		"type": "image/jpeg",
		"etag": "\"7a8b5-dTZLAICdVMo9ZQv1xGvBUDPrToI\"",
		"mtime": "2026-10-06T21:13:24.944Z",
		"size": 501941,
		"path": "../public/graphics/ans2/q-76b-1f.jpg"
	},
	"/graphics/ans2/q-76b-1b.jpg": {
		"type": "image/jpeg",
		"etag": "\"89ff4-ECNpPo1gszUzdjG6f4snXyFHLo0\"",
		"mtime": "2026-10-06T21:13:24.936Z",
		"size": 565236,
		"path": "../public/graphics/ans2/q-76b-1b.jpg"
	},
	"/graphics/ans2/q-76b-1g.jpg": {
		"type": "image/jpeg",
		"etag": "\"503ce-9vnXChsiSeIFZpfqV1lJHAgFpGM\"",
		"mtime": "2026-10-06T21:13:24.940Z",
		"size": 328654,
		"path": "../public/graphics/ans2/q-76b-1g.jpg"
	},
	"/graphics/ans2/q-76b-1h.jpg": {
		"type": "image/jpeg",
		"etag": "\"76168-EBikT04MrqWDVHU4D5E1rnr9AQI\"",
		"mtime": "2026-10-06T21:13:24.952Z",
		"size": 483688,
		"path": "../public/graphics/ans2/q-76b-1h.jpg"
	},
	"/graphics/ans2/q-76b-1i.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c621-G1ljzjva7Db3CL1BkIldz1XIycY\"",
		"mtime": "2026-10-06T21:13:24.948Z",
		"size": 378401,
		"path": "../public/graphics/ans2/q-76b-1i.jpg"
	},
	"/graphics/ans2/q-76b-1j.jpg": {
		"type": "image/jpeg",
		"etag": "\"6e87b-e2iD1KFmcxl553HRCLXEZSL4hXU\"",
		"mtime": "2026-10-06T21:13:24.952Z",
		"size": 452731,
		"path": "../public/graphics/ans2/q-76b-1j.jpg"
	},
	"/graphics/ans2/q-76b-1k.jpg": {
		"type": "image/jpeg",
		"etag": "\"677b4-vlfbZV4gIkLiDAD/hPe2p3jGSmo\"",
		"mtime": "2026-10-06T21:13:24.964Z",
		"size": 423860,
		"path": "../public/graphics/ans2/q-76b-1k.jpg"
	},
	"/graphics/ans2/q-76b-1l.jpg": {
		"type": "image/jpeg",
		"etag": "\"74e42-xRe3E1UUmF3AHUDHLI1U7033fK8\"",
		"mtime": "2026-10-06T21:13:24.956Z",
		"size": 478786,
		"path": "../public/graphics/ans2/q-76b-1l.jpg"
	},
	"/graphics/ans2/q-76b-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"5cf24-WKaXUeX38Z0G1iQVIuZ9euwdxVM\"",
		"mtime": "2026-10-06T21:13:24.972Z",
		"size": 380708,
		"path": "../public/graphics/ans2/q-76b-3.jpg"
	},
	"/graphics/ans2/q-76b-1n.jpg": {
		"type": "image/jpeg",
		"etag": "\"88063-ZzYWVl2XQEC06709wIFxlDcF1hM\"",
		"mtime": "2026-10-06T21:13:24.968Z",
		"size": 557155,
		"path": "../public/graphics/ans2/q-76b-1n.jpg"
	},
	"/graphics/ans2/q-76b-1m.jpg": {
		"type": "image/jpeg",
		"etag": "\"839b8-Ug7U6VrnoTwCNqEOJ+Zxd8b6520\"",
		"mtime": "2026-10-06T21:13:24.968Z",
		"size": 539064,
		"path": "../public/graphics/ans2/q-76b-1m.jpg"
	},
	"/graphics/ans2/q-76b-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"82f55-gKa0CI2TfPSeH9EqMqbIrC5x5U0\"",
		"mtime": "2026-10-06T21:13:24.968Z",
		"size": 536405,
		"path": "../public/graphics/ans2/q-76b-2.jpg"
	},
	"/graphics/ans2/q-76b-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"83c97-GVvpXWhKX9wlrXN3MvmsNy7SQGc\"",
		"mtime": "2026-10-06T21:13:24.976Z",
		"size": 539799,
		"path": "../public/graphics/ans2/q-76b-4.jpg"
	},
	"/graphics/ans2/q-76b-4b.jpg": {
		"type": "image/jpeg",
		"etag": "\"9c2f1-wS9y109ttfR0lN1G6YR8hBC9uis\"",
		"mtime": "2026-10-06T21:13:24.980Z",
		"size": 639729,
		"path": "../public/graphics/ans2/q-76b-4b.jpg"
	},
	"/graphics/ans2/q-76b-4c.jpg": {
		"type": "image/jpeg",
		"etag": "\"8591f-wDvDs7f9CEOUsrF8nHr/BJufNb4\"",
		"mtime": "2026-10-06T21:13:24.980Z",
		"size": 547103,
		"path": "../public/graphics/ans2/q-76b-4c.jpg"
	},
	"/graphics/ans2/q-76b-4d.jpg": {
		"type": "image/jpeg",
		"etag": "\"8cab1-7TVsA7KefIM3pQ4Q2WmrXB3186U\"",
		"mtime": "2026-10-06T21:13:24.984Z",
		"size": 576177,
		"path": "../public/graphics/ans2/q-76b-4d.jpg"
	},
	"/graphics/ans2/q-76b-4e.jpg": {
		"type": "image/jpeg",
		"etag": "\"9343c-zxndsuBAWdeKiJujnWI4Lk68Pbs\"",
		"mtime": "2026-10-06T21:13:24.988Z",
		"size": 603196,
		"path": "../public/graphics/ans2/q-76b-4e.jpg"
	},
	"/graphics/ans2/q-76b-4f.jpg": {
		"type": "image/jpeg",
		"etag": "\"8ff46-ehC4YUxWxuv4aFzWf5gb1tvw64I\"",
		"mtime": "2026-10-06T21:13:24.996Z",
		"size": 589638,
		"path": "../public/graphics/ans2/q-76b-4f.jpg"
	},
	"/graphics/ans2/q-76b-4g.jpg": {
		"type": "image/jpeg",
		"etag": "\"8b7d3-msj+Upw6dtyX81BxIBy0usKtz3g\"",
		"mtime": "2026-10-06T21:13:24.988Z",
		"size": 571347,
		"path": "../public/graphics/ans2/q-76b-4g.jpg"
	},
	"/graphics/ans2/q-76b-4h.jpg": {
		"type": "image/jpeg",
		"etag": "\"8263b-+sQ/vaIYpTiLIctoNaEepZ3WwRo\"",
		"mtime": "2026-10-06T21:13:25.008Z",
		"size": 534075,
		"path": "../public/graphics/ans2/q-76b-4h.jpg"
	},
	"/graphics/ans2/q-76b-4i.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9227-RUfJRn2+7pimLGPgipfWDEjmwKc\"",
		"mtime": "2026-10-06T21:13:25.004Z",
		"size": 692775,
		"path": "../public/graphics/ans2/q-76b-4i.jpg"
	},
	"/graphics/ans2/q-76b-4j.jpg": {
		"type": "image/jpeg",
		"etag": "\"ae7c4-B/zOL6ugudios4yTHDz9io0kjmo\"",
		"mtime": "2026-10-06T21:13:25.000Z",
		"size": 714692,
		"path": "../public/graphics/ans2/q-76b-4j.jpg"
	},
	"/graphics/ans2/q-76b-4k.jpg": {
		"type": "image/jpeg",
		"etag": "\"b0311-I9stbDBy+CLpf3EhaSF4kWN8pHI\"",
		"mtime": "2026-10-06T21:13:25.012Z",
		"size": 721681,
		"path": "../public/graphics/ans2/q-76b-4k.jpg"
	},
	"/graphics/ans2/q-76b-4l.jpg": {
		"type": "image/jpeg",
		"etag": "\"b099b-aUj2V6xQyCcjhGycchEJuZtl/w4\"",
		"mtime": "2026-10-06T21:13:25.012Z",
		"size": 723355,
		"path": "../public/graphics/ans2/q-76b-4l.jpg"
	},
	"/graphics/ans2/q-76b-4m.jpg": {
		"type": "image/jpeg",
		"etag": "\"b0662-tjZwbppJCGxSqyy/kWoJXutO494\"",
		"mtime": "2026-10-06T21:13:25.016Z",
		"size": 722530,
		"path": "../public/graphics/ans2/q-76b-4m.jpg"
	},
	"/graphics/ans2/q-76b-5.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c8b8-wtYr7kdOjbuu2iyOy8kXugYUCCE\"",
		"mtime": "2026-10-06T21:13:25.040Z",
		"size": 379064,
		"path": "../public/graphics/ans2/q-76b-5.jpg"
	},
	"/graphics/ans2/q-76b-4n.jpg": {
		"type": "image/jpeg",
		"etag": "\"aed0a-z6+CHVWA45grcpsG5AydEzTnH9o\"",
		"mtime": "2026-10-06T21:13:25.024Z",
		"size": 716042,
		"path": "../public/graphics/ans2/q-76b-4n.jpg"
	},
	"/graphics/ans2/q-76b-4o.jpg": {
		"type": "image/jpeg",
		"etag": "\"ad12d-1k8BrNJqkByiMgpkAE0Ct8ehoaM\"",
		"mtime": "2026-10-06T21:13:25.028Z",
		"size": 708909,
		"path": "../public/graphics/ans2/q-76b-4o.jpg"
	},
	"/graphics/ans2/q-76c-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"7da74-Q7tp8la6/DRjtQ2lSeSvBU9dt/M\"",
		"mtime": "2026-10-06T21:13:25.032Z",
		"size": 514676,
		"path": "../public/graphics/ans2/q-76c-2.jpg"
	},
	"/graphics/ans2/q-76c-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"67833-YO+SbC95SGKNoYlbVVZbytasBxI\"",
		"mtime": "2026-10-06T21:13:25.040Z",
		"size": 423987,
		"path": "../public/graphics/ans2/q-76c-3.jpg"
	},
	"/graphics/ans2/q-76b-4p.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9422-IkEtYWWKcjBbnn1OnNip36P8uAA\"",
		"mtime": "2026-10-06T21:13:25.028Z",
		"size": 693282,
		"path": "../public/graphics/ans2/q-76b-4p.jpg"
	},
	"/graphics/ans2/q-76b-4q.jpg": {
		"type": "image/jpeg",
		"etag": "\"a5233-K2tM+maHlGyeLUFJImvmTZtwgyE\"",
		"mtime": "2026-10-06T21:13:25.028Z",
		"size": 676403,
		"path": "../public/graphics/ans2/q-76b-4q.jpg"
	},
	"/graphics/ans2/q-76c-3b.jpg": {
		"type": "image/jpeg",
		"etag": "\"7c5ea-vu5z/qbnAhu51WiVwGvwC8mF46A\"",
		"mtime": "2026-10-06T21:13:25.048Z",
		"size": 509418,
		"path": "../public/graphics/ans2/q-76c-3b.jpg"
	},
	"/graphics/ans2/q-76c-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"aa855-R18S9UX+qm69grWrlSTSihqySok\"",
		"mtime": "2026-10-06T21:13:25.044Z",
		"size": 698453,
		"path": "../public/graphics/ans2/q-76c-1.jpg"
	},
	"/graphics/ans2/q-76c-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"40732-m3kd6RaZ9LB/5V7eEfMyd2lZf5g\"",
		"mtime": "2026-10-06T21:13:25.044Z",
		"size": 263986,
		"path": "../public/graphics/ans2/q-76c-4.jpg"
	},
	"/graphics/ans2/q-76m-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"67782-Je+IAGZbCzXCV9JPpK0u+Y3Cvdg\"",
		"mtime": "2026-10-06T21:13:25.048Z",
		"size": 423810,
		"path": "../public/graphics/ans2/q-76m-1.jpg"
	},
	"/graphics/ans2/q-76m-1b.jpg": {
		"type": "image/jpeg",
		"etag": "\"60094-oYuVQh5QXmFOOyUkpVd2DBc4gwk\"",
		"mtime": "2026-10-06T21:13:25.056Z",
		"size": 393364,
		"path": "../public/graphics/ans2/q-76m-1b.jpg"
	},
	"/graphics/ans2/q-76m-1c.jpg": {
		"type": "image/jpeg",
		"etag": "\"56223-k39pAbf7fnfW4VfjA0SLMUZEzY8\"",
		"mtime": "2026-10-06T21:13:25.052Z",
		"size": 352803,
		"path": "../public/graphics/ans2/q-76m-1c.jpg"
	},
	"/graphics/ans2/q-76m-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"5e3fa-rsBSKaF5WyZbAD5lJWr1FRtm7C4\"",
		"mtime": "2026-10-06T21:13:25.056Z",
		"size": 386042,
		"path": "../public/graphics/ans2/q-76m-2.jpg"
	},
	"/graphics/ans2/q-76m-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"579b7-wCZdEbhTAcZLMasy30UAcckH10I\"",
		"mtime": "2026-10-06T21:13:25.060Z",
		"size": 358839,
		"path": "../public/graphics/ans2/q-76m-3.jpg"
	},
	"/graphics/ans2/q-76p-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"73632-NL7HnKFhWw/GSUXvAEU+3ft0OSQ\"",
		"mtime": "2026-10-06T21:13:25.068Z",
		"size": 472626,
		"path": "../public/graphics/ans2/q-76p-1.jpg"
	},
	"/graphics/ans2/q-76c-3c.jpg": {
		"type": "image/jpeg",
		"etag": "\"81388-wn7Sv9pxaO87GCNjDCInxMumF/o\"",
		"mtime": "2026-10-06T21:13:25.052Z",
		"size": 529288,
		"path": "../public/graphics/ans2/q-76c-3c.jpg"
	},
	"/graphics/ans2/q-76p-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"690cb-Idc8ZcEG6S4MEU/toiwXZAjBC+Y\"",
		"mtime": "2026-10-06T21:13:25.068Z",
		"size": 430283,
		"path": "../public/graphics/ans2/q-76p-3.jpg"
	},
	"/graphics/ans2/q-76p-3b.jpg": {
		"type": "image/jpeg",
		"etag": "\"6d4ab-ABBL8xPbvo6BXkmbeDHnOtsXH/c\"",
		"mtime": "2026-10-06T21:13:25.080Z",
		"size": 447659,
		"path": "../public/graphics/ans2/q-76p-3b.jpg"
	},
	"/graphics/ans2/q-76p-3e.jpg": {
		"type": "image/jpeg",
		"etag": "\"6d944-HZ2WEWhTbqqjSUg8+Bx/Otd6gKs\"",
		"mtime": "2026-10-06T21:13:25.076Z",
		"size": 448836,
		"path": "../public/graphics/ans2/q-76p-3e.jpg"
	},
	"/graphics/ans2/q-76p-3f.jpg": {
		"type": "image/jpeg",
		"etag": "\"797eb-KMfgdzy3S7YIMjnkbZFVe+g0TLY\"",
		"mtime": "2026-10-06T21:13:25.092Z",
		"size": 497643,
		"path": "../public/graphics/ans2/q-76p-3f.jpg"
	},
	"/graphics/ans2/q-76p-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"95c9f-sAK99AwoWoiZlRMnsHCI0Rem59Y\"",
		"mtime": "2026-10-06T21:13:25.064Z",
		"size": 613535,
		"path": "../public/graphics/ans2/q-76p-2.jpg"
	},
	"/graphics/ans2/q-76p-3h.jpg": {
		"type": "image/jpeg",
		"etag": "\"6ca66-W9Oy1oIaJfeFVDKciOfjk6cEtxE\"",
		"mtime": "2026-10-06T21:13:25.084Z",
		"size": 445030,
		"path": "../public/graphics/ans2/q-76p-3h.jpg"
	},
	"/graphics/ans2/q-76p-3g.jpg": {
		"type": "image/jpeg",
		"etag": "\"682ab-bTUq0089MD2Fb338W44O3rsEVVQ\"",
		"mtime": "2026-10-06T21:13:25.088Z",
		"size": 426667,
		"path": "../public/graphics/ans2/q-76p-3g.jpg"
	},
	"/graphics/ans2/q-76p-3c.jpg": {
		"type": "image/jpeg",
		"etag": "\"85129-fGoI+N4qIt7JCc1NmnrGPZpJr8k\"",
		"mtime": "2026-10-06T21:13:25.076Z",
		"size": 545065,
		"path": "../public/graphics/ans2/q-76p-3c.jpg"
	},
	"/graphics/ans2/q-76p-3d.jpg": {
		"type": "image/jpeg",
		"etag": "\"835a2-9c6jChF7VOC4F8HCHEg9XMdG7rA\"",
		"mtime": "2026-10-06T21:13:25.072Z",
		"size": 538018,
		"path": "../public/graphics/ans2/q-76p-3d.jpg"
	},
	"/graphics/ans2/q-76p-3i.jpg": {
		"type": "image/jpeg",
		"etag": "\"a72e3-JunGTd7jBLC696DisidFcNXtfXQ\"",
		"mtime": "2026-10-06T21:13:25.104Z",
		"size": 684771,
		"path": "../public/graphics/ans2/q-76p-3i.jpg"
	},
	"/graphics/ans2/q-76p-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"70337-PeK+IllhGFR8yBaCcU+Q64JwGCA\"",
		"mtime": "2026-10-06T21:13:25.120Z",
		"size": 459575,
		"path": "../public/graphics/ans2/q-76p-4.jpg"
	},
	"/graphics/ans2/q-76p-3j.jpg": {
		"type": "image/jpeg",
		"etag": "\"8da50-PWGkp91YkrIRje6sa8/+tWVMOrU\"",
		"mtime": "2026-10-06T21:13:25.100Z",
		"size": 580176,
		"path": "../public/graphics/ans2/q-76p-3j.jpg"
	},
	"/graphics/ans2/q-76p-3l.jpg": {
		"type": "image/jpeg",
		"etag": "\"9d516-F62fDa/0mKCtZ8RnvZlSQqMRo/E\"",
		"mtime": "2026-10-06T21:13:25.100Z",
		"size": 644374,
		"path": "../public/graphics/ans2/q-76p-3l.jpg"
	},
	"/graphics/ans2/q-76p-3k.jpg": {
		"type": "image/jpeg",
		"etag": "\"8bc75-oxeNDG0EbvHW9thpn/sdtKsMYkw\"",
		"mtime": "2026-10-06T21:13:25.096Z",
		"size": 572533,
		"path": "../public/graphics/ans2/q-76p-3k.jpg"
	},
	"/graphics/ans2/q-cmp-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"6e086-fz3AgEyGUkRblgIRIeLlIO2xSA8\"",
		"mtime": "2026-10-06T21:13:25.116Z",
		"size": 450694,
		"path": "../public/graphics/ans2/q-cmp-1.jpg"
	},
	"/graphics/ans2/q-cmp-1b.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a51e-d6GIlD/AZy2fqxVHaNE1dNTlTPQ\"",
		"mtime": "2026-10-06T21:13:25.120Z",
		"size": 369950,
		"path": "../public/graphics/ans2/q-cmp-1b.jpg"
	},
	"/graphics/ans2/q-cmp-1c.jpg": {
		"type": "image/jpeg",
		"etag": "\"6ddd1-6Fe2zm0W2OE+sIe45lqGHqxU3MI\"",
		"mtime": "2026-10-06T21:13:25.124Z",
		"size": 450001,
		"path": "../public/graphics/ans2/q-cmp-1c.jpg"
	},
	"/graphics/ans2/q-76p-3m.jpg": {
		"type": "image/jpeg",
		"etag": "\"ab003-YYTeRdnB3XgS0cbq0n3iLPtYN5w\"",
		"mtime": "2026-10-06T21:13:25.108Z",
		"size": 700419,
		"path": "../public/graphics/ans2/q-76p-3m.jpg"
	},
	"/graphics/ans2/q-cmp-1d.jpg": {
		"type": "image/jpeg",
		"etag": "\"78e44-XAZrEwPN7WvZBouUU2CmxGpZ0mo\"",
		"mtime": "2026-10-06T21:13:25.128Z",
		"size": 495172,
		"path": "../public/graphics/ans2/q-cmp-1d.jpg"
	},
	"/graphics/ans2/q-76p-3n.jpg": {
		"type": "image/jpeg",
		"etag": "\"aabe0-T15ERWkft91p5dZynTyfzgu1idU\"",
		"mtime": "2026-10-06T21:13:25.128Z",
		"size": 699360,
		"path": "../public/graphics/ans2/q-76p-3n.jpg"
	},
	"/graphics/ans2/q-cmp-1e.jpg": {
		"type": "image/jpeg",
		"etag": "\"78697-ZhTCmCzuzFIvMGDWHlE7Ra+CIlk\"",
		"mtime": "2026-10-06T21:13:25.124Z",
		"size": 493207,
		"path": "../public/graphics/ans2/q-cmp-1e.jpg"
	},
	"/graphics/ans2/q-cmp-1f.jpg": {
		"type": "image/jpeg",
		"etag": "\"7cf09-e92oz53zp6QPV18wfJA6j0yBlwA\"",
		"mtime": "2026-10-06T21:13:25.132Z",
		"size": 511753,
		"path": "../public/graphics/ans2/q-cmp-1f.jpg"
	},
	"/graphics/ans2/q-76p-3o.jpg": {
		"type": "image/jpeg",
		"etag": "\"a5d9a-x31pUI3i/exoUKrte+rlxtSJEFg\"",
		"mtime": "2026-10-06T21:13:25.112Z",
		"size": 679322,
		"path": "../public/graphics/ans2/q-76p-3o.jpg"
	},
	"/graphics/ans2/q-cmp-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"7163b-8t67E/8nRGzidetgeDjzKlZgU1M\"",
		"mtime": "2026-10-06T21:13:25.136Z",
		"size": 464443,
		"path": "../public/graphics/ans2/q-cmp-2.jpg"
	},
	"/graphics/ans2/q-cmp-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"6a97b-G9gNgMa8CvB1hOX+1x/kuuBpSB8\"",
		"mtime": "2026-10-06T21:13:25.132Z",
		"size": 436603,
		"path": "../public/graphics/ans2/q-cmp-3.jpg"
	},
	"/graphics/ans2/q-duty-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"51cdd-EzOInKfPUfQ12OIk6WKKapbdlc8\"",
		"mtime": "2026-10-06T21:13:25.144Z",
		"size": 335069,
		"path": "../public/graphics/ans2/q-duty-1.jpg"
	},
	"/graphics/ans2/q-duty-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"612c5-InzEMSuyfR+WwMwFPRKVDrdmlhE\"",
		"mtime": "2026-10-06T21:13:25.148Z",
		"size": 398021,
		"path": "../public/graphics/ans2/q-duty-2.jpg"
	},
	"/graphics/ans2/q-duty-2b.jpg": {
		"type": "image/jpeg",
		"etag": "\"6a51d-K63DO1GxpbcynQChJQUaA7luS78\"",
		"mtime": "2026-10-06T21:13:25.140Z",
		"size": 435485,
		"path": "../public/graphics/ans2/q-duty-2b.jpg"
	},
	"/graphics/ans2/q-duty-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"43968-NsAU7vzUk76sOIytd/7dedURUpk\"",
		"mtime": "2026-10-06T21:13:25.140Z",
		"size": 276840,
		"path": "../public/graphics/ans2/q-duty-3.jpg"
	},
	"/graphics/ans2/q-family-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"72534-IYup5PU7FIpJLx6gmJs060TAj/o\"",
		"mtime": "2026-10-06T21:13:25.156Z",
		"size": 468276,
		"path": "../public/graphics/ans2/q-family-1.jpg"
	},
	"/graphics/ans2/q-ex-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"a75ee-x45tgo6VLUlvyACbK/y5Y+wBBW0\"",
		"mtime": "2026-10-06T21:13:25.148Z",
		"size": 685550,
		"path": "../public/graphics/ans2/q-ex-1.jpg"
	},
	"/graphics/ans2/q-ex-1b.jpg": {
		"type": "image/jpeg",
		"etag": "\"b9921-tN+PFy8BraiaU7vQ1he932nLPUc\"",
		"mtime": "2026-10-06T21:13:25.164Z",
		"size": 760097,
		"path": "../public/graphics/ans2/q-ex-1b.jpg"
	},
	"/graphics/ans2/q-ex-1c.jpg": {
		"type": "image/jpeg",
		"etag": "\"b10c9-NYn7bN4poKZ1XR2/LKYO0f6AqmY\"",
		"mtime": "2026-10-06T21:13:25.160Z",
		"size": 725193,
		"path": "../public/graphics/ans2/q-ex-1c.jpg"
	},
	"/graphics/ans2/q-family-1b.jpg": {
		"type": "image/jpeg",
		"etag": "\"7c12f-H4G1Klw2IjBtGfeRfJ6G2lssbJc\"",
		"mtime": "2026-10-06T21:13:25.164Z",
		"size": 508207,
		"path": "../public/graphics/ans2/q-family-1b.jpg"
	},
	"/graphics/ans2/q-ex-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"be473-JhYsVBAHmwKKx5o7fKthfIaXWwk\"",
		"mtime": "2026-10-06T21:13:25.164Z",
		"size": 779379,
		"path": "../public/graphics/ans2/q-ex-2.jpg"
	},
	"/graphics/ans2/q-family-1c.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f15c-PIewM/HUyj1yZSCXliRqAWUkBo8\"",
		"mtime": "2026-10-06T21:13:25.180Z",
		"size": 520540,
		"path": "../public/graphics/ans2/q-family-1c.jpg"
	},
	"/graphics/ans2/q-family-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"63d29-TV7jR26mG4bLGVVqc1Lm3/YpQ6w\"",
		"mtime": "2026-10-06T21:13:25.176Z",
		"size": 408873,
		"path": "../public/graphics/ans2/q-family-2.jpg"
	},
	"/graphics/ans2/q-family-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"655e8-+IuUeif4KTphXm2+855FN3DNZEQ\"",
		"mtime": "2026-10-06T21:13:25.188Z",
		"size": 415208,
		"path": "../public/graphics/ans2/q-family-3.jpg"
	},
	"/graphics/ans2/q-family-3b.jpg": {
		"type": "image/jpeg",
		"etag": "\"6ad53-1eYjH+mx3rCKGS+1l9eZgf7uGP4\"",
		"mtime": "2026-10-06T21:13:25.192Z",
		"size": 437587,
		"path": "../public/graphics/ans2/q-family-3b.jpg"
	},
	"/graphics/ans2/q-family-3c.jpg": {
		"type": "image/jpeg",
		"etag": "\"54016-dmTcNJSMmWwKO7eNzNkD9Cw8K0Q\"",
		"mtime": "2026-10-06T21:13:25.196Z",
		"size": 344086,
		"path": "../public/graphics/ans2/q-family-3c.jpg"
	},
	"/graphics/ans2/q-family-3d.jpg": {
		"type": "image/jpeg",
		"etag": "\"5775e-eBVmQsuoOJUzAhSc1ENAJEQoaAw\"",
		"mtime": "2026-10-06T21:13:25.200Z",
		"size": 358238,
		"path": "../public/graphics/ans2/q-family-3d.jpg"
	},
	"/graphics/ans2/q-family-3e.jpg": {
		"type": "image/jpeg",
		"etag": "\"4d627-gwgkuP5HWmH8iBP2P4dclM2L+ZE\"",
		"mtime": "2026-10-06T21:13:25.204Z",
		"size": 316967,
		"path": "../public/graphics/ans2/q-family-3e.jpg"
	},
	"/graphics/ans2/q-family-3f.jpg": {
		"type": "image/jpeg",
		"etag": "\"6148b-lIIJoAigNDO0WSrJ4Nlt/cOtAmg\"",
		"mtime": "2026-10-06T21:13:25.208Z",
		"size": 398475,
		"path": "../public/graphics/ans2/q-family-3f.jpg"
	},
	"/graphics/ans2/q-family-1d.jpg": {
		"type": "image/jpeg",
		"etag": "\"82c18-AzGJihq5rqxFDs6fKBNV1x79LFE\"",
		"mtime": "2026-10-06T21:13:25.172Z",
		"size": 535576,
		"path": "../public/graphics/ans2/q-family-1d.jpg"
	},
	"/graphics/ans2/q-family-2b.jpg": {
		"type": "image/jpeg",
		"etag": "\"9d35e-hihZTEJ5W59geeMVshVK7TZG868\"",
		"mtime": "2026-10-06T21:13:25.176Z",
		"size": 643934,
		"path": "../public/graphics/ans2/q-family-2b.jpg"
	},
	"/graphics/ans2/q-family-3g.jpg": {
		"type": "image/jpeg",
		"etag": "\"5dde3-zoJRNkgzEQuIDDq2ijya0lQTjz0\"",
		"mtime": "2026-10-06T21:13:25.200Z",
		"size": 384483,
		"path": "../public/graphics/ans2/q-family-3g.jpg"
	},
	"/graphics/ans2/q-family-2c.jpg": {
		"type": "image/jpeg",
		"etag": "\"9af26-iKqZMnCnRqAipzTMYO+M2JDvUdM\"",
		"mtime": "2026-10-06T21:13:25.192Z",
		"size": 634662,
		"path": "../public/graphics/ans2/q-family-2c.jpg"
	},
	"/graphics/ans2/q-family-3h.jpg": {
		"type": "image/jpeg",
		"etag": "\"62fe7-yl94iG33K4cityloETnJ/cITKaw\"",
		"mtime": "2026-10-06T21:13:25.208Z",
		"size": 405479,
		"path": "../public/graphics/ans2/q-family-3h.jpg"
	},
	"/graphics/ans2/q-family-2d.jpg": {
		"type": "image/jpeg",
		"etag": "\"9afaf-mb3NpxM3r6JMyg5JVRCwLmeoTWY\"",
		"mtime": "2026-10-06T21:13:25.180Z",
		"size": 634799,
		"path": "../public/graphics/ans2/q-family-2d.jpg"
	},
	"/graphics/ans2/q-family-2e.jpg": {
		"type": "image/jpeg",
		"etag": "\"9b872-xwm1HWwQOAAaJAKKmkq3Kw8pNB8\"",
		"mtime": "2026-10-06T21:13:25.192Z",
		"size": 637042,
		"path": "../public/graphics/ans2/q-family-2e.jpg"
	},
	"/graphics/ans2/q-family-3i.jpg": {
		"type": "image/jpeg",
		"etag": "\"6e467-toZHKQV/Pt95DEbaq4VqzvwM1fY\"",
		"mtime": "2026-10-06T21:13:25.212Z",
		"size": 451687,
		"path": "../public/graphics/ans2/q-family-3i.jpg"
	},
	"/graphics/ans2/q-family-3j.jpg": {
		"type": "image/jpeg",
		"etag": "\"660e3-BYWcK5//Bu3CaJS/LfqAhqV1oxY\"",
		"mtime": "2026-10-06T21:13:25.212Z",
		"size": 418019,
		"path": "../public/graphics/ans2/q-family-3j.jpg"
	},
	"/graphics/ans2/q-family-3k.jpg": {
		"type": "image/jpeg",
		"etag": "\"60fb9-f+weZ7q/RUBnxNilNAur9qANjoQ\"",
		"mtime": "2026-10-06T21:13:25.216Z",
		"size": 397241,
		"path": "../public/graphics/ans2/q-family-3k.jpg"
	},
	"/graphics/ans2/q-family-3l.jpg": {
		"type": "image/jpeg",
		"etag": "\"6e87e-7F9szqK/9E7pCgsn1XLeKjBRwyk\"",
		"mtime": "2026-10-06T21:13:25.228Z",
		"size": 452734,
		"path": "../public/graphics/ans2/q-family-3l.jpg"
	},
	"/graphics/ans2/q-family-3m.jpg": {
		"type": "image/jpeg",
		"etag": "\"79e7a-mPUjYsJQmFoErmmJqvQiYks/HmE\"",
		"mtime": "2026-10-06T21:13:25.228Z",
		"size": 499322,
		"path": "../public/graphics/ans2/q-family-3m.jpg"
	},
	"/graphics/ans2/q-reg-eq.jpg": {
		"type": "image/jpeg",
		"etag": "\"69385-hbhpFdT6Vx/N7JgOnNv5wtzeQ5Y\"",
		"mtime": "2026-10-06T21:13:25.236Z",
		"size": 430981,
		"path": "../public/graphics/ans2/q-reg-eq.jpg"
	},
	"/graphics/ans2/q-family-3n.jpg": {
		"type": "image/jpeg",
		"etag": "\"805ea-7sbKDVQDERr+A8e+k8U74S0mBjM\"",
		"mtime": "2026-10-06T21:13:25.220Z",
		"size": 525802,
		"path": "../public/graphics/ans2/q-family-3n.jpg"
	},
	"/graphics/ans2/q-reg-machc.jpg": {
		"type": "image/jpeg",
		"etag": "\"7ed1d-Fz6bNBJDGt5TB9HswS2dz0llinA\"",
		"mtime": "2026-10-06T21:13:25.252Z",
		"size": 519453,
		"path": "../public/graphics/ans2/q-reg-machc.jpg"
	},
	"/graphics/ans2/q-reg-28.jpg": {
		"type": "image/jpeg",
		"etag": "\"93204-kTErDd/DIwZplVYcaCp0b8L0rto\"",
		"mtime": "2026-10-06T21:13:25.224Z",
		"size": 602628,
		"path": "../public/graphics/ans2/q-reg-28.jpg"
	},
	"/graphics/ans2/q-reg-cdm.jpg": {
		"type": "image/jpeg",
		"etag": "\"9187e-Qh9MHkmHsA73u8Y0PSStUXsCBnw\"",
		"mtime": "2026-10-06T21:13:25.228Z",
		"size": 596094,
		"path": "../public/graphics/ans2/q-reg-cdm.jpg"
	},
	"/graphics/ans2/q-reg-machd.jpg": {
		"type": "image/jpeg",
		"etag": "\"71adb-RBZo9HNYREPbZgsizAOqCmdMWHI\"",
		"mtime": "2026-10-06T21:13:25.256Z",
		"size": 465627,
		"path": "../public/graphics/ans2/q-reg-machd.jpg"
	},
	"/graphics/ans2/q-reg-cdmb.jpg": {
		"type": "image/jpeg",
		"etag": "\"a8e6d-lR/Pq3CTHtR7gVW7whVv26yHXFg\"",
		"mtime": "2026-10-06T21:13:25.240Z",
		"size": 691821,
		"path": "../public/graphics/ans2/q-reg-cdmb.jpg"
	},
	"/graphics/ans2/q-reg-mache.jpg": {
		"type": "image/jpeg",
		"etag": "\"77817-EypRu060/t9xhyAKuG7hBsl1mGk\"",
		"mtime": "2026-10-06T21:13:25.252Z",
		"size": 489495,
		"path": "../public/graphics/ans2/q-reg-mache.jpg"
	},
	"/graphics/ans2/q-reg-machf.jpg": {
		"type": "image/jpeg",
		"etag": "\"7bde6-CZDx1MLNaimQBOVyTvRKq0MtmNQ\"",
		"mtime": "2026-10-06T21:13:25.260Z",
		"size": 507366,
		"path": "../public/graphics/ans2/q-reg-machf.jpg"
	},
	"/graphics/ans2/q-reg-machg.jpg": {
		"type": "image/jpeg",
		"etag": "\"66f94-9iAuTiS+rp6EpyCYhgQ7TfYldjU\"",
		"mtime": "2026-10-06T21:13:25.264Z",
		"size": 421780,
		"path": "../public/graphics/ans2/q-reg-machg.jpg"
	},
	"/graphics/ans2/q-reg-fire.jpg": {
		"type": "image/jpeg",
		"etag": "\"a6cc8-+LqDU6OPG1tS+MzC8un2U+aiAOY\"",
		"mtime": "2026-10-06T21:13:25.240Z",
		"size": 683208,
		"path": "../public/graphics/ans2/q-reg-fire.jpg"
	},
	"/graphics/ans2/q-reg-machh.jpg": {
		"type": "image/jpeg",
		"etag": "\"7fcfa-9rS+sbCiU3/oHUGQJJNoTtibIeE\"",
		"mtime": "2026-10-06T21:13:25.264Z",
		"size": 523514,
		"path": "../public/graphics/ans2/q-reg-machh.jpg"
	},
	"/graphics/ans2/q-reg-mach.jpg": {
		"type": "image/jpeg",
		"etag": "\"81481-KqHLywY2u16QFyaByPbm3RQDze0\"",
		"mtime": "2026-10-06T21:13:25.248Z",
		"size": 529537,
		"path": "../public/graphics/ans2/q-reg-mach.jpg"
	},
	"/graphics/ans2/q-reg-machi.jpg": {
		"type": "image/jpeg",
		"etag": "\"6e6b8-Sp9TORc/700uo9ATflss5l7KF0o\"",
		"mtime": "2026-10-06T21:13:25.268Z",
		"size": 452280,
		"path": "../public/graphics/ans2/q-reg-machi.jpg"
	},
	"/graphics/ans2/q-reg-machj.jpg": {
		"type": "image/jpeg",
		"etag": "\"63b60-SnU0Wyp1qIK0g7dUVed602Fldwk\"",
		"mtime": "2026-10-06T21:13:25.264Z",
		"size": 408416,
		"path": "../public/graphics/ans2/q-reg-machj.jpg"
	},
	"/graphics/ans2/q-reg-machk.jpg": {
		"type": "image/jpeg",
		"etag": "\"6c78a-VV9z80B86KiHXhCzO1zm5ya3kPg\"",
		"mtime": "2026-10-06T21:13:25.280Z",
		"size": 444298,
		"path": "../public/graphics/ans2/q-reg-machk.jpg"
	},
	"/graphics/ans2/q-reg-machl.jpg": {
		"type": "image/jpeg",
		"etag": "\"7607a-BWdkoaZ9qhKb0JSrgw36Apq1T1k\"",
		"mtime": "2026-10-06T21:13:25.276Z",
		"size": 483450,
		"path": "../public/graphics/ans2/q-reg-machl.jpg"
	},
	"/graphics/ans2/q-reg-puwer.jpg": {
		"type": "image/jpeg",
		"etag": "\"6dade-VXShTaP66IyROjht/7AEIYedtEk\"",
		"mtime": "2026-10-06T21:13:25.276Z",
		"size": 449246,
		"path": "../public/graphics/ans2/q-reg-puwer.jpg"
	},
	"/graphics/ans2/q-reg-riddor.jpg": {
		"type": "image/jpeg",
		"etag": "\"7bd01-ya41yewWVhDvSlhLNPioPybCR64\"",
		"mtime": "2026-10-06T21:13:25.272Z",
		"size": 507137,
		"path": "../public/graphics/ans2/q-reg-riddor.jpg"
	},
	"/graphics/ans2/q-reg-wah.jpg": {
		"type": "image/jpeg",
		"etag": "\"6a73b-pTRLcAYnCrV9r/LN7Qt+n+O8e9o\"",
		"mtime": "2026-10-06T21:13:25.284Z",
		"size": 436027,
		"path": "../public/graphics/ans2/q-reg-wah.jpg"
	},
	"/graphics/ans2/q-reg-machb.jpg": {
		"type": "image/jpeg",
		"etag": "\"8aa60-6x4WL0MDO5LwhMZ167kpnBHgIAs\"",
		"mtime": "2026-10-06T21:13:25.256Z",
		"size": 567904,
		"path": "../public/graphics/ans2/q-reg-machb.jpg"
	},
	"/__grok/install/assets/homescreen/glass-puzzle.svg": {
		"type": "image/svg+xml",
		"etag": "\"713-AP2wG8KChAGjse1Fn+f/+vDN+sQ\"",
		"mtime": "2026-10-06T21:13:25.276Z",
		"size": 1811,
		"path": "../public/__grok/install/assets/homescreen/glass-puzzle.svg"
	},
	"/__grok/install/assets/homescreen/glass-share.svg": {
		"type": "image/svg+xml",
		"etag": "\"954-jb3ATcKjqgMOYrA/4w1v21j0Jvg\"",
		"mtime": "2026-10-06T21:13:25.280Z",
		"size": 2388,
		"path": "../public/__grok/install/assets/homescreen/glass-share.svg"
	},
	"/__grok/install/assets/homescreen/logo-grok.svg": {
		"type": "image/svg+xml",
		"etag": "\"423-5mXO+yh9KW40jM3to5JlWPhxNK8\"",
		"mtime": "2026-10-06T21:13:25.280Z",
		"size": 1059,
		"path": "../public/__grok/install/assets/homescreen/logo-grok.svg"
	},
	"/__grok/install/assets/homescreen/ob-ipad.png": {
		"type": "image/png",
		"etag": "\"18dd3-wlRwrpmBImStuiu+4poVz7ANin4\"",
		"mtime": "2026-10-06T21:13:25.280Z",
		"size": 101843,
		"path": "../public/__grok/install/assets/homescreen/ob-ipad.png"
	},
	"/__grok/install/assets/homescreen/plus.svg": {
		"type": "image/svg+xml",
		"etag": "\"961-sSBPunx/13vbMNAlPxb7UeO3l3A\"",
		"mtime": "2026-10-06T21:13:25.280Z",
		"size": 2401,
		"path": "../public/__grok/install/assets/homescreen/plus.svg"
	},
	"/__grok/install/assets/homescreen/ob-phone.png": {
		"type": "image/png",
		"etag": "\"194bc-oZradWHIHO68q2glHU0Gk5ttpWA\"",
		"mtime": "2026-10-06T21:13:25.280Z",
		"size": 103612,
		"path": "../public/__grok/install/assets/homescreen/ob-phone.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region scripts/install-page.html?raw
var install_page_default = "<!DOCTYPE html>\n<html lang=\"en\" class=\"device-desktop\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, viewport-fit=cover\"\n    />\n    <meta name=\"color-scheme\" content=\"dark\" />\n    <meta name=\"theme-color\" content=\"#000000\" />\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\" />\n    <meta name=\"apple-mobile-web-app-title\" content=\"{{APP_NAME}}\" />\n    <title>Add {{APP_NAME}} to your Home Screen</title>\n    <link rel=\"manifest\" href=\"/__grok/manifest.webmanifest\" />\n    <link rel=\"apple-touch-icon\" href=\"/__grok/icon-180.png\" />\n    <link rel=\"stylesheet\" href=\"/__grok/install/styles.css\" />\n    <script>\n      (function () {\n        var ua = navigator.userAgent || \"\";\n        var touch = navigator.maxTouchPoints || 0;\n        var isiPad = /iPad/.test(ua) || (/Macintosh/.test(ua) && touch > 1);\n        var isiPhone = /iPhone|iPod/.test(ua);\n        var isIOS = isiPhone || isiPad;\n        var isAndroid = /Android/i.test(ua);\n        var isAndroidPhone = isAndroid && /Mobile/i.test(ua);\n        var isAndroidTablet = isAndroid && !/Mobile/i.test(ua);\n        var minSide = Math.min(screen.width || 0, screen.height || 0);\n        var maxSide = Math.max(screen.width || 0, screen.height || 0);\n\n        var type = \"desktop\";\n        if (isiPhone) type = \"phone\";\n        else if (isiPad || isAndroidTablet) type = \"tablet\";\n        else if (isAndroidPhone) type = \"phone\";\n        else if (touch > 0 && minSide > 0 && minSide <= 500) type = \"phone\";\n        else if (touch > 0 && minSide > 500 && maxSide <= 1400) type = \"tablet\";\n\n        var iosMajor = null;\n        var osToken = null;\n        var safariToken = null;\n        var iphoneOs = ua.match(/iPhone OS (\\d+)[._]/);\n        var ipadOs = ua.match(/CPU OS (\\d+)[._](\\d+) like Mac OS X/);\n        var safariVer = ua.match(/Version\\/(\\d+)[._]/);\n        if (iphoneOs) osToken = parseInt(iphoneOs[1], 10);\n        else if (ipadOs) osToken = parseInt(ipadOs[1], 10);\n        if (isIOS && safariVer) safariToken = parseInt(safariVer[1], 10);\n        if (osToken != null || safariToken != null) {\n          iosMajor = Math.max(osToken || 0, safariToken || 0);\n        }\n\n        var root = document.documentElement;\n        var classes = [\"device-\" + type];\n        if (iosMajor != null) {\n          root.dataset.ios = String(iosMajor);\n          classes.push(iosMajor >= 27 ? \"ios-27-plus\" : \"ios-below-27\");\n        }\n        root.className = classes.join(\" \");\n      })();\n    <\/script>\n  </head>\n  <body>\n    <div class=\"page\">\n      <header class=\"powered\" aria-label=\"Powered by Grok\">\n        <span class=\"powered-by\">Powered by</span>\n        <span class=\"powered-brand\">\n          <img\n            class=\"grok-logo\"\n            src=\"/__grok/install/assets/homescreen/logo-grok.svg\"\n            width=\"14\"\n            height=\"14\"\n            alt=\"\"\n          />\n          <span class=\"powered-grok\">Grok</span>\n        </span>\n      </header>\n\n      <main class=\"content\">\n        <div class=\"ob\" aria-hidden=\"true\">\n          <img\n            class=\"ob-img ob-phone\"\n            src=\"/__grok/install/assets/homescreen/ob-phone.png\"\n            width=\"338\"\n            height=\"294\"\n            alt=\"\"\n          />\n          <img\n            class=\"ob-img ob-ipad\"\n            src=\"/__grok/install/assets/homescreen/ob-ipad.png\"\n            width=\"634\"\n            height=\"294\"\n            alt=\"\"\n          />\n        </div>\n\n        <section class=\"copy\">\n          <h1>Add {{APP_NAME}} to your&nbsp;Home&nbsp;Screen</h1>\n\n          <div class=\"steps\">\n            <p class=\"step step-tap step-ios27\">\n              <span class=\"muted\">Tap</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-puzzle.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n              <span class=\"muted loc loc-phone\">in the bottom bar, then</span>\n              <span class=\"muted loc loc-ipad\">in the tool bar, then</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-share.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n            </p>\n\n            <p class=\"step step-tap step-ios-legacy\">\n              <span class=\"muted\">Tap</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-share.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n              <span class=\"muted loc loc-phone\">in the bottom bar</span>\n              <span class=\"muted loc loc-ipad\">in the tool bar</span>\n            </p>\n\n            <p class=\"step step-select\">\n              <span class=\"muted\">Select</span>\n              <span class=\"add-label\">\n                <img\n                  class=\"plus-icon\"\n                  src=\"/__grok/install/assets/homescreen/plus.svg\"\n                  width=\"16\"\n                  height=\"16\"\n                  alt=\"\"\n                />\n                <span class=\"add-text\">Add to Home Screen</span>\n              </span>\n            </p>\n          </div>\n        </section>\n      </main>\n\n      <main class=\"content content-desktop\">\n        <section class=\"copy\">\n          <h1>Open this link on your iPhone&nbsp;or&nbsp;iPad</h1>\n          <p class=\"desktop-note\">\n            This page shows how to add {{APP_NAME}} to an iOS Home Screen.\n          </p>\n          <a class=\"desktop-open\" href=\"{{APP_URL}}\">Open {{APP_NAME}}</a>\n        </section>\n      </main>\n    </div>\n  </body>\n</html>\n";
//#endregion
//#region \0virtual:grok-og-identity
var grokOgIdentity = { "site": {
	"title": "ElevatorIQ",
	"type": "website",
	"card": "custom",
	"description": "ElevatorIQ is for elevator professionals and anyone who has an interest in how the regulations affect our industry. EU and ASME rules are written here in simpler terms, so the legal duty is easier to understand.",
	"url": "https://elevatoriq.net",
	"image": "/og.jpg",
	"banner": "/x-banner.jpg"
} };
//#endregion
//#region scripts/grok-pwa-shared.mjs
/**
* Single source of truth for platform head chrome (PWA, extensions.js, OG),
* shared by the Vite plugin and Nitro middleware. Plain ESM so `node --test`
* and the Nitro bundler can both consume it.
*/
var DEFAULT_APP_NAME = "Grok App";
var OG_SITE_REL_PATH = "src/lib/og/site.json";
var SHARE_META_KEYS = /* @__PURE__ */ new Set([
	"og:title",
	"og:description",
	"og:image",
	"og:image:width",
	"og:image:height",
	"og:type",
	"og:url",
	"og:site_name",
	"twitter:card",
	"twitter:title",
	"twitter:image",
	"twitter:description",
	"x:game:image",
	"x:game:image:width",
	"x:game:image:height"
]);
function escapeHtml(value) {
	return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
/** Inverse of escapeHtml. Decode &amp; last so a single pass undoes one encode. */
function unescapeHtml(value) {
	return String(value).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", "\"").replaceAll("&#39;", "'").replaceAll("&amp;", "&");
}
/** 6-digit hex for the og.grok.me placeholder, or "" if site.color is missing/invalid. */
function placeholderCardColor(site = {}) {
	const raw = String(site.color ?? "").trim();
	const hex = raw.startsWith("#") ? raw.slice(1) : raw;
	return /^[0-9a-fA-F]{6}$/.test(hex) ? hex : "";
}
/**
* "wild-race.grok.me" → "Wild Race". Only published app hosts encode the
* display name in the first label. Preview / guest hosts are image origins
* only — slugifying them produced internal names like "Hds Abc 3000 Xy".
*/
function appNameFromHost(hostHeader) {
	const host = String(hostHeader ?? "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (!host.endsWith(".grok.me")) return DEFAULT_APP_NAME;
	const slug = host.split(".")[0] ?? "";
	if (!slug || slug === "www" || !/^[a-z0-9-]{1,63}$/.test(slug)) return DEFAULT_APP_NAME;
	return slug.split("-").filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ") || "Grok App";
}
/** True for Vercel system domains. Envoy rewrites origin Host to these; they SSO-protect `/og.jpg`. */
function isVercelSystemHost(host) {
	return host === "vercel.app" || host.endsWith(".vercel.app") || host === "vercel.com" || host.endsWith(".vercel.com");
}
/** Hostname suitable for absolute og:image URLs. Preview guests (X-Forwarded-Host) are allowed. */
function publicAppHost(hostHeader) {
	const host = String(hostHeader ?? "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (!host || !/^[a-z0-9.-]+$/.test(host) || !host.includes(".")) return "";
	if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)) return "";
	if (isVercelSystemHost(host)) return "";
	return host;
}
/**
* Published apps always use `VITE_PUBLIC_HOSTNAME` (the grok.me host the
* deployer injects). Live preview has no such env, so fall back to the
* request host / X-Forwarded-Host. Never prefer request Host on a published
* app — Envoy rewrites it to `*.vercel.app`.
*/
function resolvePublicHost(hostHeader) {
	return publicAppHost(process.env?.VITE_PUBLIC_HOSTNAME) || publicAppHost(hostHeader);
}
function isInstallQuery(url) {
	const query = String(url ?? "").split("?", 2)[1] ?? "";
	const params = new URLSearchParams(query);
	const install = params.get("install");
	const platform = (params.get("platform") ?? "").toLowerCase();
	return (install === "1" || install === "true") && platform === "ios";
}
/** Paths that can carry an app document (vs assets / API / internals). */
function isDocumentPath(pathname) {
	const path = String(pathname ?? "");
	return !path.startsWith("/__grok/") && !path.startsWith("/api/") && !path.startsWith("/@") && !path.startsWith("/node_modules") && !/\.[a-z0-9]+$/i.test(path);
}
function acceptsHtml(accept) {
	const value = String(accept ?? "");
	return value === "" || value.includes("text/html") || value.includes("*/*");
}
/** The same URL without the install-tutorial params (used as the app link). */
function stripInstallParams(url) {
	const [path = "/", query = ""] = String(url ?? "/").split("?", 2);
	const params = new URLSearchParams(query);
	params.delete("install");
	params.delete("platform");
	const rest = params.toString();
	return rest ? `${path}?${rest}` : path;
}
function renderInstallPageHtml(template, { host, url } = {}) {
	return String(template).replaceAll("{{APP_NAME}}", escapeHtml(appNameFromHost(host))).replaceAll("{{APP_URL}}", escapeHtml(stripInstallParams(url)));
}
function renderWebManifest(hostHeader) {
	const name = appNameFromHost(hostHeader);
	return JSON.stringify({
		name,
		short_name: name,
		id: "/",
		start_url: "/",
		scope: "/",
		display: "standalone",
		background_color: "#000000",
		theme_color: "#000000",
		icons: [{
			src: "/__grok/icon-180.png",
			sizes: "180x180",
			type: "image/png"
		}]
	}, null, 2);
}
function grokPwaHeadTags(appName = DEFAULT_APP_NAME) {
	return [
		["manifest", "<link rel=\"manifest\" href=\"/__grok/manifest.webmanifest\">"],
		["apple-touch-icon", "<link rel=\"apple-touch-icon\" href=\"/__grok/icon-180.png\">"],
		["apple-mobile-web-app-title", `<meta name="apple-mobile-web-app-title" content="${escapeHtml(appName)}">`],
		["apple-mobile-web-app-status-bar-style", "<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">"],
		["theme-color", "<meta name=\"theme-color\" content=\"#000000\">"]
	];
}
var GROK_EXTENSIONS_SCRIPT_SRC = "https://grok.com/grok-app-builder/extensions.js";
function readGrokProjectId() {
	const fromProcess = typeof process !== "undefined" ? process.env?.VITE_PROJECT_ID : "";
	return String(fromProcess ?? "").trim();
}
function readGrokExtensionsEnabled() {
	const fromProcess = typeof process !== "undefined" ? process.env?.VITE_GROK_EXTENSIONS : "";
	return String(fromProcess ?? "").trim() !== "0";
}
function readXCreator() {
	const fromProcess = typeof process !== "undefined" ? process.env?.X_CREATOR : "";
	return String(fromProcess ?? "").trim();
}
function readXCreatorId() {
	const fromProcess = typeof process !== "undefined" ? process.env?.X_CREATOR_ID : "";
	return String(fromProcess ?? "").trim();
}
function grokXCreatorHeadTags(creator = readXCreator(), creatorId = readXCreatorId()) {
	const name = String(creator ?? "").trim();
	const id = String(creatorId ?? "").trim();
	if (!name || !id) return [];
	return [`<meta property="x:creator" content="${escapeHtml(name)}">`, `<meta property="x:creator:id" content="${escapeHtml(id)}">`];
}
/** Platform "Created with Grok" banner — injected into every HTML document. */
function grokExtensionsHeadTags(projectId = readGrokProjectId()) {
	const id = escapeHtml(projectId);
	const tags = [];
	if (projectId) tags.push(`<meta name="grok-project-id" content="${id}">`);
	if (!readGrokExtensionsEnabled()) return tags;
	tags.push(`<script src="${GROK_EXTENSIONS_SCRIPT_SRC}"${projectId ? ` data-project-id="${id}"` : ""} defer><\/script>`);
	return tags;
}
function readOgSite(cwd = process.cwd()) {
	try {
		const raw = readFileSync(join(cwd, OG_SITE_REL_PATH), "utf8");
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
	} catch {
		return {};
	}
}
/** Public path of an on-disk share card, or "" if neither file exists. */
function ogCardPublicPath(cwd = process.cwd()) {
	if (existsSync(join(cwd, "public/og.jpg"))) return "/og.jpg";
	if (existsSync(join(cwd, "public/og.png"))) return "/og.png";
	return "";
}
function detectCustomOgCard(cwd = process.cwd(), site = {}) {
	if (ogCardPublicPath(cwd)) return true;
	return siteHasCustomCard(site) || Boolean(String(site.image ?? "").trim());
}
/** Snapshot for Vite/Nitro to bake into the server bundle (Vercel has no workspace FS). */
function snapshotOgIdentity(cwd = process.cwd()) {
	const site = { ...readOgSite(cwd) };
	const disk = ogCardPublicPath(cwd);
	if (disk) {
		site.card = "custom";
		site.image = disk;
	} else {
		if (siteHasCustomCard(site)) delete site.card;
		if (site.image) delete site.image;
	}
	if (existsSync(join(cwd, "public/x-banner.jpg"))) site.banner = site.banner || "/x-banner.jpg";
	return { site };
}
function ogServiceUrl() {
	return (String(process.env?.VITE_OG_SERVICE_URL ?? "").trim() || "https://og.grok.me").replace(/\/+$/, "");
}
function titleFromDocument(html) {
	const match = String(html ?? "").match(/<title\b[^>]*>([^<]*)<\/title>/i);
	return match ? unescapeHtml(match[1]).trim() : "";
}
function resolveOgTitle(site = {}, appName = DEFAULT_APP_NAME, host = "", documentTitle = "") {
	const fromSite = String(site.title ?? "").trim();
	if (fromSite) return fromSite;
	const fromDoc = String(documentTitle ?? "").trim();
	if (fromDoc) return fromDoc;
	const fromHost = appNameFromHost(host);
	if (fromHost && fromHost !== "Grok App") return fromHost;
	return String(appName ?? "").trim() || "Grok App";
}
function siteHasCustomCard(site = {}) {
	return String(site.card ?? "").toLowerCase() === "custom";
}
/**
* Preview: public/og.jpg|png on disk.
* Vercel: the bake (`card=custom` / `image`) because the function cannot stat public/.
* Otherwise empty — caller emits the og.grok.me placeholder.
*/
function resolveOgCardAsset(site = {}, cwd = process.cwd()) {
	return ogCardPublicPath(cwd) || (detectCustomOgCard(cwd, site) ? String(site.image ?? "").trim() || "/og.jpg" : "");
}
/** Stamp `card=custom` when public/og.jpg or public/og.png is on disk. */
function applyCustomCardFromFs(site, cwd) {
	const disk = ogCardPublicPath(cwd);
	if (!disk) return site;
	return {
		...site,
		card: "custom",
		image: disk
	};
}
function grokOgHeadTags({ host = "", appName = DEFAULT_APP_NAME, site = {}, documentTitle = "", cwd = process.cwd() } = {}) {
	const title = resolveOgTitle(site, appName, host, documentTitle);
	const publicHost = resolvePublicHost(host);
	const tags = [`<meta name="twitter:card" content="summary_large_image">`, `<meta property="og:title" content="${escapeHtml(title)}">`];
	const description = String(site.description ?? "").trim();
	if (description) tags.push(`<meta property="og:description" content="${escapeHtml(description)}">`);
	if (String(site.type ?? "").toLowerCase() === "x:game") tags.push(`<meta property="og:type" content="x:game">`);
	if (publicHost) {
		const asset = resolveOgCardAsset(site, cwd);
		const custom = Boolean(asset);
		let image = custom ? `https://${publicHost}${asset.startsWith("/") ? asset : `/${asset}`}` : `${ogServiceUrl()}/v1/card.png?host=${encodeURIComponent(publicHost)}&title=${encodeURIComponent(title)}`;
		const color = !custom ? placeholderCardColor(site) : "";
		if (color) image += `&color=${encodeURIComponent(color)}`;
		tags.push(`<meta property="og:image" content="${escapeHtml(image)}">`);
		tags.push(`<meta property="og:image:width" content="1200">`);
		tags.push(`<meta property="og:image:height" content="630">`);
		const banner = String(site.banner ?? "").trim();
		if (banner) {
			const bannerUrl = `https://${publicHost}${banner.startsWith("/") ? banner : `/${banner}`}`;
			tags.push(`<meta property="x:game:image" content="${escapeHtml(bannerUrl)}">`);
			tags.push(`<meta property="x:game:image:width" content="1200">`);
			tags.push(`<meta property="x:game:image:height" content="264">`);
		}
	}
	return tags;
}
function stripGrokExtensionsScript(html) {
	return String(html).replace(/<script\b[^>]*\bsrc\s*=\s*["'][^"']*\/grok-app-builder\/extensions\.js[^"']*["'][^>]*>\s*<\/script>/gi, "");
}
function stripShareMetaTags(html) {
	return String(html).replace(/<meta\b[^>]*>/gi, (tag) => {
		const attrs = [...tag.matchAll(/\b(?:property|name)\s*=\s*["']([^"']+)["']/gi)];
		for (const match of attrs) if (SHARE_META_KEYS.has(String(match[1]).toLowerCase())) return "";
		return tag;
	});
}
function insertAfterHeadOpen(html, snippet) {
	if (/<head\b[^>]*>/i.test(html)) return html.replace(/<head\b[^>]*>/i, (open) => `${open}${snippet}`);
	if (/<html\b[^>]*>/i.test(html)) return html.replace(/<html\b[^>]*>/i, (open) => `${open}<head>${snippet}</head>`);
	return `<!doctype html><html><head>${snippet}</head>${html}`;
}
function insertBeforeHeadClose(html, snippet) {
	if (/<\/head>/i.test(html)) return html.replace(/<\/head>/i, `${snippet}</head>`);
	return insertAfterHeadOpen(html, snippet);
}
function normalizeHeadContext(ctx = {}) {
	const cwd = ctx.cwd ?? process.cwd();
	const site = applyCustomCardFromFs(ctx.site !== void 0 ? ctx.site : snapshotOgIdentity(cwd).site, cwd);
	return {
		appName: resolveOgTitle(site, ctx.appName ?? "Grok App", ctx.host ?? ""),
		projectId: ctx.projectId ?? readGrokProjectId(),
		creator: ctx.creator ?? readXCreator(),
		creatorId: ctx.creatorId ?? readXCreatorId(),
		host: ctx.host ?? "",
		cwd,
		site
	};
}
function injectGrokPwaHead(html, ctx = {}) {
	if (typeof html !== "string") return html;
	const { site, projectId, creator, creatorId, host, cwd } = normalizeHeadContext(ctx);
	const documentTitle = titleFromDocument(html);
	const appName = resolveOgTitle(site, ctx.appName ?? "Grok App", host, documentTitle);
	let next = stripShareMetaTags(html);
	if (!readGrokExtensionsEnabled()) next = stripGrokExtensionsScript(next);
	const missing = grokPwaHeadTags(appName).filter(([key]) => {
		if (key === "manifest") return !next.includes("href=\"/__grok/manifest.webmanifest\"");
		if (key === "apple-touch-icon") return !next.includes("href=\"/__grok/icon-180.png\"");
		return !next.includes(`name="${key}"`);
	}).map(([, tag]) => tag);
	next = insertAfterHeadOpen(next, grokOgHeadTags({
		host,
		appName,
		site,
		documentTitle,
		cwd
	}).join(""));
	if (readGrokExtensionsEnabled() && !next.includes("/grok-app-builder/extensions.js")) missing.push(...grokExtensionsHeadTags(projectId));
	else if (projectId && !next.includes("name=\"grok-project-id\"")) missing.push(`<meta name="grok-project-id" content="${escapeHtml(projectId)}">`);
	if (projectId && !next.includes("property=\"grok:app_id\"") && !next.includes("property='grok:app_id'")) missing.push(`<meta property="grok:app_id" content="${escapeHtml(projectId)}">`);
	const creatorTags = grokXCreatorHeadTags(creator, creatorId);
	if (creatorTags.length > 0) {
		if (!(next.includes("property=\"x:creator\" content=") || next.includes("property='x:creator' content="))) missing.push(creatorTags[0]);
		if (!next.includes("property=\"x:creator:id\"")) missing.push(creatorTags[1]);
	}
	if (missing.length === 0) return next;
	return insertBeforeHeadClose(next, missing.join(""));
}
function findHeadClose(buf) {
	return buf.toString("latin1").search(/<\/head>/i);
}
/**
* Streaming head injector: buffers only until `</head>` (ASCII marker; never
* appears inside a UTF-8 continuation byte), overwrites share-card metas,
* then passes later chunks through so streaming SSR keeps streaming.
*/
function createHeadInjector(ctx = {}) {
	const normalized = normalizeHeadContext(ctx);
	/** @type {Buffer[]} */
	let pending = [];
	let done = false;
	const apply = (html) => injectGrokPwaHead(html, {
		appName: normalized.appName,
		projectId: normalized.projectId,
		creator: normalized.creator,
		creatorId: normalized.creatorId,
		host: normalized.host,
		cwd: normalized.cwd,
		site: normalized.site
	});
	return {
		/** @param {Uint8Array | string} chunk @returns {Buffer[]} chunks ready to emit */
		push(chunk) {
			const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
			if (done) return [buf];
			pending.push(buf);
			const joined = Buffer.concat(pending);
			const at = findHeadClose(joined);
			if (at === -1) return [];
			done = true;
			pending = [];
			const closeLen = joined.toString("latin1", at).match(/^<\/head>/i)[0].length;
			const head = apply(joined.subarray(0, at + closeLen).toString("utf8"));
			return [Buffer.concat([Buffer.from(head, "utf8"), joined.subarray(at + closeLen)])];
		},
		/** @returns {Buffer[]} whatever is still buffered (no `</head>` seen) */
		flush() {
			if (done || pending.length === 0) return [];
			const rest = Buffer.concat(pending);
			pending = [];
			done = true;
			return [Buffer.from(apply(rest.toString("utf8")), "utf8")];
		}
	};
}
//#endregion
//#region server/middleware/grok-pwa.ts
/**
* Deployed-app (Nitro) half of the platform PWA chrome. Auto-registered as
* global h3 middleware because vite.config.ts sets `serverDir: "./server"` —
* without that option Nitro v3 never scans this directory.
*
* - `?install=1&platform=ios` on a document path → the Home Screen tutorial,
*   bundled into the server build via `?raw` (the public/ directory is CDN
*   static output on Vercel and not readable from the function).
* - `/__grok/manifest.webmanifest` → per-app-named manifest (kept out of
*   public/ so this dynamic response is the only one).
* - Other HTML documents → stream-inject PWA + OG head tags at `</head>`.
*   OG identity is baked via `virtual:grok-og-identity` at `vite build`
*   (this function cannot read `src/lib/og/site.json` or `public/og.jpg`).
*   This must be a middleware transforming `next()`: h3 discards the `response`
*   runtime hook's return value, and `render:html` does not exist in Nitro v3.
*/
function requestHost(event) {
	return event.req.headers.get("x-forwarded-host") ?? event.req.headers.get("host") ?? event.url.host;
}
function injectHeadStreaming(response, host) {
	const injector = createHeadInjector({
		host,
		site: grokOgIdentity.site
	});
	const transformed = response.body.pipeThrough(new TransformStream({
		transform(chunk, controller) {
			for (const out of injector.push(chunk)) controller.enqueue(out);
		},
		flush(controller) {
			for (const out of injector.flush()) controller.enqueue(out);
		}
	}));
	const headers = new Headers(response.headers);
	headers.delete("content-length");
	return new Response(transformed, {
		status: response.status,
		statusText: response.statusText,
		headers
	});
}
async function grokPwaMiddleware(event, next) {
	if ((event.req.method ?? "GET").toUpperCase() !== "GET") return next();
	const path = event.url.pathname;
	const urlWithQuery = path + event.url.search;
	if (path === "/__grok/manifest.webmanifest" || path === "/__grok/manifest.json") return new Response(renderWebManifest(requestHost(event)), { headers: {
		"content-type": "application/manifest+json; charset=utf-8",
		"cache-control": "no-cache"
	} });
	if (isInstallQuery(urlWithQuery) && isDocumentPath(path) && acceptsHtml(event.req.headers.get("accept"))) {
		const html = renderInstallPageHtml(install_page_default, {
			host: requestHost(event),
			url: urlWithQuery
		});
		return new Response(html, { headers: {
			"content-type": "text/html; charset=utf-8",
			"cache-control": "no-cache"
		} });
	}
	if (!isDocumentPath(path)) return next();
	const result = await next();
	if (result instanceof Response && result.body && String(result.headers.get("content-type") ?? "").includes("text/html") && !result.headers.get("content-encoding")) return injectHeadStreaming(result, requestHost(event));
	return result;
}
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_IO091Z = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_IO091Z
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default), toEventHandler(grokPwaMiddleware)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
