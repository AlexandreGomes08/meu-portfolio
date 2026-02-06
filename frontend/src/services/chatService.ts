interface ChatMessage {
	role: 'user' | 'assistant'
	content: string
	timestamp: number
}

interface ChatResponse {
	response: string
}

const WEBHOOK_URL = 'https://meu-portfolio-n8n.fly.dev/webhook/assistente-pessoal'
const MAX_RETRIES = 2
const RETRY_DELAY = 1000

async function delay(ms: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, ms))
}

export async function sendMessage(
	chatId: string,
	mensagem: string,
	retryCount = 0
): Promise<string> {
	try {
		console.log('Sending message:', { chatId, mensagem })
		
		const response = await fetch(WEBHOOK_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				chatId,
				mensagem,
			}),
		})

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const data = await response.json()
		
		if (typeof data === 'string') {
			return data
		}
		
		if (data.resposta) {
			return data.resposta
		}
		
		if (data.response) {
			return data.response
		}
		
		if (data.message) {
			return data.message
		}
		
		if (data.output) {
			return data.output
		}
		
		return JSON.stringify(data)
	} catch (error) {

		if (retryCount < MAX_RETRIES) {
			await delay(RETRY_DELAY * (retryCount + 1))
			return sendMessage(chatId, mensagem, retryCount + 1)
		}

		throw new Error('Failed to send message after retries')
	}
}

export function generateChatId(): string {
	if (typeof window !== 'undefined' && window.crypto?.randomUUID) {
		return window.crypto.randomUUID()
	}
	return `chat-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}

export function saveChatHistory(chatId: string, messages: ChatMessage[]): void {
	if (typeof window !== 'undefined') {
		try {
			localStorage.setItem(`chat-history-${chatId}`, JSON.stringify(messages))
		} catch (error) {
			console.error('Error saving chat history:', error)
		}
	}
}

export function loadChatHistory(chatId: string): ChatMessage[] {
	if (typeof window !== 'undefined') {
		try {
			const saved = localStorage.getItem(`chat-history-${chatId}`)
			return saved ? JSON.parse(saved) : []
		} catch (error) {
			console.error('Error loading chat history:', error)
			return []
		}
	}
	return []
}

export function getChatId(): string {
	if (typeof window !== 'undefined') {
		try {
			let chatId = localStorage.getItem('current-chat-id')
			if (!chatId) {
				chatId = generateChatId()
				localStorage.setItem('current-chat-id', chatId)
			}
			return chatId
		} catch (error) {
			console.error('Error getting chat ID:', error)
			return generateChatId()
		}
	}
	return generateChatId()
}

export type { ChatMessage }

