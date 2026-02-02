"use client"

import { useChat } from "@ai-sdk/react"
import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState("")
    const { messages, sendMessage, status } = useChat()
    const scrollRef = useRef<HTMLDivElement>(null)
    const isLoading = status === "submitted" || status === "streaming"

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | { target: { value: string } }) => {
        setInput(e.target.value)
    }

    const handleSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault()
        if (!input.trim()) return

        // Construct message compatible with new SDK (using parts if required, or try string)
        // Trying explicit object structure first to match UIMessage
        await sendMessage({
            role: 'user',
            parts: [{ type: 'text', text: input }]
        } as any)
        // Cast to any to bypass strict checks temporarily if UIMessage definition varies
        // but trying to adhere to 'parts'.

        setInput("")
    }

    return (
        <>
            {/* Floating Toggle Button */}
            <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}>
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-110 transition-all duration-300 btn-glow flex items-center justify-center"
                >
                    <MessageCircle className="w-7 h-7" />
                </button>
            </div>

            {/* Chat Window */}
            <div
                className={`fixed bottom-6 right-6 z-50 transition-all duration-500 origin-bottom-right ${isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
                    }`}
            >
                <Card className="w-[380px] h-[600px] glass-card border-primary/20 shadow-2xl flex flex-col overflow-hidden">
                    {/* Header */}
                    <CardHeader className="p-4 bg-primary text-primary-foreground flex flex-row items-center justify-between space-y-0">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center backdrop-blur-sm">
                                <Bot className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <div>
                                <CardTitle className="text-base">Nodenomics AI</CardTitle>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-xs text-primary-foreground/80 font-medium">Online</span>
                                </div>
                            </div>
                        </div>
                        <button
                            className="text-primary-foreground hover:bg-primary-foreground/20 rounded-full h-8 w-8 flex items-center justify-center transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </CardHeader>

                    {/* Messages Area */}
                    <CardContent className="flex-1 p-0 overflow-hidden bg-background/40 backdrop-blur-md flex flex-col relative">

                        <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
                            {messages.length === 0 && (
                                <div className="text-center space-y-4 mt-8">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto ring-1 ring-primary/20">
                                        <Bot className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-semibold text-foreground">Welcome to Nodenomics!</p>
                                        <p className="text-sm text-muted-foreground px-6">
                                            I can help you understand our decentralized data economy, calculate savings, or find research.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2 px-2">
                                        {["How does Nodenomics work?", "Calculate my savings", "What is the M2M economy?"].map((q) => (
                                            <button
                                                key={q}
                                                onClick={() => {
                                                    const fakeEvent = { target: { value: q } }
                                                    handleInputChange(fakeEvent)
                                                    // Trigger send immediately for suggestions? 
                                                    // Or just set input? Code originally set input.
                                                    // But original handleSubmit would send it.
                                                    // I will just set input for now to be safe.
                                                }}
                                                className="text-xs text-left p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors border border-border/50 w-full"
                                            >
                                                {q}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {messages.map((m: any) => (
                                <div
                                    key={m.id}
                                    className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                                >
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${m.role === "user"
                                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                            : "bg-secondary text-primary border border-primary/20"
                                            }`}
                                    >
                                        {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                    </div>
                                    <div
                                        className={`rounded-2xl px-4 py-2.5 max-w-[80%] text-sm leading-relaxed shadow-sm ${m.role === "user"
                                            ? "bg-primary text-primary-foreground rounded-tr-none"
                                            : "bg-card border border-border/50 text-foreground rounded-tl-none backdrop-blur-sm"
                                            }`}
                                    >
                                        {/* Render content safely whether it's string or parts */}
                                        {m.content ? m.content : (m.parts ? m.parts.map((p: any, i: number) => p.text).join('') : '')}
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-secondary text-primary border border-primary/20 flex items-center justify-center flex-shrink-0">
                                        <Bot className="w-4 h-4" />
                                    </div>
                                    <div className="bg-card border border-border/50 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1.5 w-16 h-10">
                                        <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-background/60 border-t border-border/50 backdrop-blur-md">
                            <form
                                onSubmit={handleSubmit}
                                className="flex items-center gap-2 relative"
                            >
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-4 pr-12 py-6 rounded-xl"
                                    placeholder="Ask about Nodenomics..."
                                    value={input}
                                    onChange={handleInputChange}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-1.5 bg-primary text-primary-foreground w-9 h-9 rounded-lg hover:bg-primary/90 shadow-sm flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                            <div className="text-[10px] text-center text-muted-foreground mt-2 flex items-center justify-center gap-1">
                                <span>Powered by</span>
                                <Badge className="text-[9px] h-4 px-1 border border-primary/20 text-primary bg-transparent font-normal">Open Source LLM</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
