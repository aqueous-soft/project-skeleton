const Ziggy = {
    url: "http:\/\/local.skeleton",
    port: null,
    defaults: {},
    routes: {
        "boost.browser-logs": {
            uri: "_boost\/browser-logs",
            methods: ["POST"],
        },
        "sample.index": { uri: "sample", methods: ["GET", "HEAD"] },
        "storage.local": {
            uri: "storage\/{path}",
            methods: ["GET", "HEAD"],
            wheres: { path: ".*" },
            parameters: ["path"],
        },
    },
};
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
