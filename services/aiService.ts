import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const initializeAI = () => {
  if (!process.env.API_KEY) {
    console.error("API_KEY is missing from environment variables.");
    return;
  }
  
  try {
    genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
  } catch (error) {
    console.error("Failed to initialize GoogleGenAI", error);
  }
};

export const getChatSession = (): Chat => {
  if (!genAI) {
    initializeAI();
  }

  if (!chatSession && genAI) {
    chatSession = genAI.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, // Balanced creativity and accuracy
      },
    });
  }

  if (!chatSession) {
    throw new Error("Chat session could not be initialized.");
  }

  return chatSession;
};

export const sendMessageToAI = async (message: string): Promise<string> => {
  try {
    const session = getChatSession();
    const result: GenerateContentResponse = await session.sendMessage({ message });
    return result.text || "Sorry, I could not generate a response at this time.";
  } catch (error) {
    console.error("Error sending message to AI:", error);
    return "I am having trouble connecting to the server. Please try again later.";
  }
};