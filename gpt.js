import OpenAI from "openai";

const chatgpt = new OpenAI();


async function gpt(){

  const completion = await chatgpt.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  document.getElementById("gptanswer").value() = (completion.choices[0]);
}
