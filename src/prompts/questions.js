const questions = [
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?'
    },
    {
        type: 'confirm',
        name: "authentication",
        message: "Do you want to include authentication?",
        default: false
        
    },
    {
      type: 'confirm',
      name: 'validation',
      message: 'Do you want to include validation?',
      default: false
    },
    {
      type: 'confirm',
      name: 'errorHandler',
      message: 'Do you want to include a custom error handler?',
      default: false
    }
]


export default questions;