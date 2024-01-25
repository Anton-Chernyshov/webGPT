import Openai, { OpenAI } from "openai";
const key = ""
const openai = new OpenAI({
    apiKey : key,})

async function gptmain() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
    });
    
    console.log(completion.choices[0]);
};