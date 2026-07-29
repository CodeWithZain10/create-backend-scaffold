import fs from 'fs';
import path from 'path';
import getAuthMiddlewareContent from '../templates/auth/authMiddlewareTemplate.js';
import userModelTemplate from '../templates/auth/userModelTemplate.js';
import authRoutesTemplate from '../templates/auth/authRoutesTemplate.js';
import authControllerTemplate from '../templates/auth/authControllerTemplate.js';
import appCodeTemplate from '../templates/base/appCodeTemplate.js';
import serverCodeTemplate from '../templates/base/serverCodeTemplate.js';
import dbConfigTemplate from '../templates/base/dbConfigTemplate.js';
import envTemplate from '../templates/base/envTemplate.js';
import packageJsonTemplate from '../templates/base/packages/packageJsonTemplate.js';
import validateMiddlewareTemplate from '../templates/validation/validateMiddlewareTemplate.js';
import errHandlerTemplate from '../utils/errors/errorHandlerMiddlewareTemplate.js';
import authValidationTemplate from '../templates/validation/authValidationTemplate.js';

const createProjectStructure = (projectName, includeAuthentication, includeValidation, includeErrorHandler) => {

    const baseDir = path.join(process.cwd(), projectName);

    const file = fs.mkdirSync(baseDir, { recursive: true });
    const srcDir = fs.mkdirSync(path.join(baseDir, 'src'), { recursive: true });
    const routesDir = fs.mkdirSync(path.join(baseDir, 'src', 'routes'), { recursive: true });
    const controllersDir = fs.mkdirSync(path.join(baseDir, 'src', 'controllers'), { recursive: true });
    const modelsDir = fs.mkdirSync(path.join(baseDir, 'src', 'models'), { recursive: true });
    const middlewaresDir = fs.mkdirSync(path.join(baseDir, 'src', 'middlewares'), { recursive: true });
    const configDir = fs.mkdirSync(path.join(baseDir, 'src', 'config'), { recursive: true });
    const utilsDir = fs.mkdirSync(path.join(baseDir, 'src', 'utils'), { recursive: true });
    const testsDir = fs.mkdirSync(path.join(baseDir, 'tests'), { recursive: true });

    if(includeAuthentication) {
        const userModelContent = userModelTemplate()
        const authRoutesContent = authRoutesTemplate();
        const authControllerContent = authControllerTemplate();
        const AuthMiddlewareContent = getAuthMiddlewareContent();

        fs.writeFileSync(path.join(baseDir, "src", "middlewares", "auth.middleware.js"), AuthMiddlewareContent)
        fs.writeFileSync(path.join(baseDir, "src", "models", "user.model.js"), userModelContent)
        fs.writeFileSync(path.join(baseDir, "src", "routes", "auth.routes.js"), authRoutesContent)
        fs.writeFileSync(path.join(baseDir, "src", "controllers", "auth.controller.js"), authControllerContent)
    }

    if(includeValidation) {
        const validateMiddlewareContent = validateMiddlewareTemplate();
        const authValidationContent = authValidationTemplate();
        fs.writeFileSync(path.join(baseDir, "src", "utils", "validation", "auth.validation.js"), authValidationContent)
        fs.writeFileSync(path.join(baseDir, "src", "middlewares", "validate.middleware.js"), validateMiddlewareContent)
    }

    if(includeErrorHandler) {
        const errHandlerContent = errHandlerTemplate();
        fs.writeFileSync(path.join(baseDir, "src", "middlewares", "errorHandler.middleware.js"), errHandlerContent)
    }

    const appCodeContent = appCodeTemplate(includeAuthentication);
    const serverCodeContent = serverCodeTemplate();
    const dbConfigContent = dbConfigTemplate();
    
    fs.writeFileSync(path.join(baseDir, "src", "app.js"), appCodeContent)
    fs.writeFileSync(path.join(baseDir, "server.js"), serverCodeContent)
    fs.writeFileSync(path.join(baseDir, "src", "config", "db.js"), dbConfigContent)

    const envContent = envTemplate(includeAuthentication);
    fs.writeFileSync(path.join(baseDir, ".env"), envContent)

    const packageJsonContent = packageJsonTemplate(projectName, includeAuthentication);
    fs.writeFileSync(path.join(baseDir, "package.json"), packageJsonContent)

    
}

export default createProjectStructure;