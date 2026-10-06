import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$2, u as LessonFloor } from "./router-2O5coh7U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/asme.learn._id-Brr2oWoz.js
var import_jsx_runtime = require_jsx_runtime();
function AsmeLesson() {
	const { id } = Route$2.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonFloor, {
		id,
		region: "asme"
	});
}
//#endregion
export { AsmeLesson as component };
