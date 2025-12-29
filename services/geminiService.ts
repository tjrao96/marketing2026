
import { GoogleGenAI, Type } from "@google/genai";

// Use a fresh GoogleGenAI instance for each request to ensure current environment context
export const getGeminiInsights = async (topic: string) => {
  // Always initialize with the process.env.API_KEY variable directly
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a 3-paragraph prediction for the 2026 trend: "${topic}". Focus on actionable marketing strategies, emerging technologies, and consumer psychology. Keep it professional and visionary.`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      },
    });

    // Access the generated text using the .text property
    return response.text || "No insights generated.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Failed to generate AI insights. Please try again later.";
  }
};

export const getMarketPredictions = async (category: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `List 3 specific marketing predictions for 2026 in the category: ${category}.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: {
                type: Type.STRING,
                description: 'The title of the prediction.'
              },
              prediction: {
                type: Type.STRING,
                description: 'The detailed prediction content.'
              },
              impact: {
                type: Type.STRING,
                description: 'The expected impact on the industry.'
              }
            },
            propertyOrdering: ["title", "prediction", "impact"],
            required: ["title", "prediction", "impact"]
          }
        }
      },
    });
    
    // Clean and parse the response text
    const jsonStr = response.text?.trim() || "[]";
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini Prediction Error:", error);
    return [];
  }
};
