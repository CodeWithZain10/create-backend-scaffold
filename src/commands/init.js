import { createPromptModule } from "inquirer";
import questions from "../prompts/questions.js";
import createProjectStructure from "../utils/fileHelper.js";

const prompt = createPromptModule();

const init = () => {
  console.log('Initializing project...');
  // Add your initialization logic here
  prompt(questions).then((answers) => {
    console.log(`Project name: ${answers.projectName}`);
    console.log(`Include authentication: ${answers.authentication}`);
    createProjectStructure(answers.projectName, answers.authentication);
  });
}

export default init;