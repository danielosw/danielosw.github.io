import "./app.css";
import App from "./huntingbees.svelte";

const app = new App({
	target: document.getElementById("app")!,
});

export default app;
