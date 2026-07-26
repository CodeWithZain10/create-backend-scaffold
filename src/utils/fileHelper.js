import fs from 'fs';
import path from 'path';

const createProjectStructure = (projectName, includeAuthentication, includeValidation) => {

    const baseDir = path.join(process.cwd(), projectName);

    const file = fs.mkdirSync(baseDir, { recursive: true });
    const srcDir = fs.mkdirSync(path.join(baseDir, 'src', 'routes'), { recursive: true });
    const routesDir = fs.mkdirSync(path.join(baseDir, 'src', 'routes'), { recursive: true });
    const controllersDir = fs.mkdirSync(path.join(baseDir, 'src', 'controllers'), { recursive: true });
    const modelsDir = fs.mkdirSync(path.join(baseDir, 'src', 'models'), { recursive: true });
    const middlewaresDir = fs.mkdirSync(path.join(baseDir, 'src', 'middlewares'), { recursive: true });
    const configDir = fs.mkdirSync(path.join(baseDir, 'src', 'config'), { recursive: true });
    const utilsDir = fs.mkdirSync(path.join(baseDir, 'src', 'utils'), { recursive: true });
    const testsDir = fs.mkdirSync(path.join(baseDir, 'tests'), { recursive: true });

    
}

export default createProjectStructure;