import OpenAI from "openai";

export const aiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function askAI(prompt) {
  const completion = await aiClient.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "user", content: prompt }
    ]
  });

  return completion.choices[0].message.content;
}
