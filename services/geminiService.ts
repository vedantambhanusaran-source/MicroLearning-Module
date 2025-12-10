import { GoogleGenAI, Type } from "@google/genai";
import { ScenarioData } from "../types";

// Initialize Gemini Client - handle undefined API key gracefully
let ai: GoogleGenAI | null = null;

const initializeAI = () => {
  if (!ai) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not configured");
      return null;
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

/**
 * Generates a new workplace AI ethics scenario dynamically.
 */
export const generateNewScenario = async (): Promise<ScenarioData | null> => {
  const aiClient = initializeAI();
  if (!aiClient) {
    console.error("AI client not initialized - API key missing");
    return null;
  }

  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      Create a realistic workplace scenario involving a slightly ambiguous use of AI (like ChatGPT, Midjourney, etc.).
      The user needs to decide the best course of action.
      Focus on topics like: Data Privacy, Hallucinations, Bias, or Over-reliance.
      
      Return the response in JSON format matching this schema:
      {
        "id": "unique_string",
        "context": "A short 1-sentence context setup (e.g., 'Sarah is analyzing Q3 data...')",
        "prompt": "The core problem or question.",
        "options": [
          {
            "id": "opt1",
            "label": "Action 1",
            "feedback": "Why this is good/bad",
            "isCorrect": boolean
          },
           {
            "id": "opt2",
            "label": "Action 2",
            "feedback": "Why this is good/bad",
            "isCorrect": boolean
          },
           {
            "id": "opt3",
            "label": "Action 3",
            "feedback": "Why this is good/bad",
            "isCorrect": boolean
          }
        ]
      }
    `;

    const response = await aiClient.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            context: { type: Type.STRING },
            prompt: { type: Type.STRING },
            options: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  label: { type: Type.STRING },
                  feedback: { type: Type.STRING },
                  isCorrect: { type: Type.BOOLEAN },
                },
                required: ["id", "label", "feedback", "isCorrect"],
              },
            },
          },
          required: ["id", "context", "prompt", "options"],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as ScenarioData;
    }
    return null;

  } catch (error) {
    console.error("Failed to generate scenario:", error);
    return null;
  }
};

/**
 * Simple AI Tutor to answer questions about the content
 */
export const askAITutor = async (question: string): Promise<string> => {
  const aiClient = initializeAI();
  if (!aiClient) {
    return "AI service is not configured. Please add your API key.";
  }

  try {
    const response = await aiClient.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are an expert AI Literacy Tutor. Answer the user's question about AI in the workplace clearly and concisely (max 3 sentences). Question: ${question}`,
    });
    return response.text || "I couldn't generate an answer at this time.";
  } catch (error) {
    console.error("AI Tutor error:", error);
    return "Sorry, I'm having trouble connecting to the network right now.";
  }
};