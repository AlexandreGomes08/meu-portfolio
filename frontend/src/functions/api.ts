const baseURL = process.env.NEXT_PUBLIC_API_URL

export async function httpGet(url: string) {
	const response = await fetch(normalizeURL(`${baseURL}${url}`))
	return response.json()
}

function normalizeURL(url: string) {
	const protocolo = url.split("://")[0]
	const restante = url.split("://")[1]
	return `${protocolo}://${restante.replace(/\/{2,}/g, "/")}`
}
