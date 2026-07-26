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
        
    }
  ]

export default questions;