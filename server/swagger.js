module.exports = (app) => {
    const swaggerJsDoc = require("swagger-jsdoc");
    const swaggerUI = require("swagger-ui-express");

    const swaggerOptions = {
        swaggerDefinition: {
        info: {
            title: "LastPassword Website API",
            version: "1.0.0",
            description:
            "This is an APIs about LastPassword Website.<br /> Made by <b>18521450 - TranDucThinh</b>",
        },
    },
        apis: ["./docs/documents.js"],
    };

    // Options for customize Swagger Page
    const options = {
        customCss:
        ".swagger-ui .topbar { display: none } .scheme-container {display:none}",
    };

    // Swagger Setup
    const swaggerDocs = swaggerJsDoc(swaggerOptions);

    // Render Swagger Page
    app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs, options));
};

