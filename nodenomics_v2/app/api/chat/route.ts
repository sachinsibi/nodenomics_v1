import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json();

    // Check for API Keys (Optional: Add your preferred provider here)
    const hasApiKey = !!process.env.OPENAI_API_KEY || !!process.env.GROQ_API_KEY;

    if (!hasApiKey) {
        // ------------------------------------------------------------------------
        // MOCK MODE: SIMULATE INTELLIGENT STREAMING RESPONSE
        // ------------------------------------------------------------------------
        const lastMessage = messages[messages.length - 1].content.toLowerCase();

        let responseText = "I'm the Nodenomics AI. I can help you understand our decentralized data economy.";

        if (lastMessage.includes("savings") || lastMessage.includes("calculate") || lastMessage.includes("cost")) {
            responseText = "Based on our calculator, Nodenomics (at ~$0.012/hr) is roughly 75% cheaper than AWS t3.medium ($0.0416/hr) or GCP e2-medium ($0.0404/hr). This is because we utilize decentralized, idle compute resources rather than expensive data centers.";
        } else if (lastMessage.includes("work") || lastMessage.includes("how")) {
            responseText = "Nodenomics works by connecting devices with idle compute or data (like sensors) to buyers (like AI agents). \n\n1. **Register**: Connect device.\n2. **Define**: Set what you buy/sell.\n3. **Exchange**: Smart contracts handle the trade automatically.\n4. **Earn**: Get paid in real-time.";
        } else if (lastMessage.includes("m2m") || lastMessage.includes("machine")) {
            responseText = "The Machine-to-Machine (M2M) economy is where devices trade directly with each other without human intervention. For example, a solar panel selling excess energy to a neighbor's smart meter, or a car buying traffic data from a street camera.";
        } else if (lastMessage.includes("trust") || lastMessage.includes("safe")) {
            responseText = "We ensure trust through:\n- **Blockchain**: Immutable transaction logs.\n- **Reputation Scores**: Bad actors are flagged.\n- **Value-Added Brokers**: Intermediaries who verify and clean data before it's sold.";
        }

        // Simulate streaming by yielding chunks
        const stream = new ReadableStream({
            async start(controller) {
                const chunks = responseText.split(/(?=[ ,.\n])/); // Split but keep delimiters
                for (const chunk of chunks) {
                    const bytes = new TextEncoder().encode(chunk);
                    controller.enqueue(bytes);
                    await new Promise((r) => setTimeout(r, 20 + Math.random() * 30)); // Natural typing delay
                }
                controller.close();
            },
        });

        return new Response(stream, {
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });
    }

    // ------------------------------------------------------------------------
    // REAL MODE: CONNECT TO LLM (Example with OpenAI/Groq compatible)
    // ------------------------------------------------------------------------
    // const openai = createOpenAI({ apiKey: process.env.OPENAI_API_KEY });
    // const result = await streamText({
    //   model: openai('gpt-3.5-turbo'), // or 'llama-3-8b' if using Groq
    //   messages,
    //   system: 'You are the Nodenomics AI, an expert on the decentralized machine economy...',
    // });
    // return result.toDataStreamResponse();

    return new Response("Please configure an API Key in .env", { status: 500 });
}
