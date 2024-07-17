const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI('AIzaSyBSHvMqJnUhJpbeMbV_KO5qnoKU5Ldx55U');

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function prompt(input) {
  
   try {
    const result = await model.generateContent(input);
    const response = await result.response;
    const text = response.text();
    return text;
    
   } catch (error) {
    console.log(error);
    throw new Error(error)
    
   }
  }
  
module.exports = prompt;