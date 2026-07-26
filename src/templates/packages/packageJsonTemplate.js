const packageJsonTemplate = (projectName, includeAuthentication) => {
    return `{
  "name": "${projectName}",
  "version": "1.0.0",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "latest",
    "mongoose": "latest",
    "dotenv": "latest",
    "nodemon": "latest",
    "cors": "latest"${includeAuthentication ? `,
    "bcryptjs": "latest",
    "jsonwebtoken": "latest",
    "cookie-parser": "latest"` : ""}
  }
}
`
}

export default packageJsonTemplate;