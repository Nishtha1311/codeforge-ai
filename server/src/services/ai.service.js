import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const askAI = async (prompt) => {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "system",
          content:
            "You are CodeForge AI, an expert DSA mentor and JavaScript programming assistant.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.4,
      max_tokens: 500,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error(error);
    throw new Error("AI request failed.");
  }
};