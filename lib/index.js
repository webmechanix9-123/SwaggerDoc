"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const swaggeruiexpress = require("swagger-ui-express");
const PORT = process.env.PORT || 3001;
const app = express();
let options = {
    swaggerOptions: {
        url: ""
    }
};
app.use('/api-docs', swaggeruiexpress.serve, (req, res, next) => {
    options.swaggerOptions.url = req.query.url;
    next();
}, swaggeruiexpress.setup(null, options));
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
//# sourceMappingURL=index.js.map