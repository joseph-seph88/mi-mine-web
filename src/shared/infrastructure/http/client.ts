export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface HttpClient {
    request<T>(input: string, init?: RequestInit & { method?: HttpMethod }): Promise<T>;
}

export class FetchHttpClient implements HttpClient {
    private readonly baseUrl: string;

    constructor(baseUrl: string = '') {
        this.baseUrl = baseUrl;
    }

    async request<T>(input: string, init?: RequestInit & { method?: HttpMethod }): Promise<T> {
        const res = await fetch(`${this.baseUrl}${input}`, {
            ...init,
            headers: {
                'Content-Type': 'application/json',
                ...(init?.headers ?? {}),
            },
        });
        if (!res.ok) {
            const text = await res.text().catch(() => '');
            throw new Error(`HTTP ${res.status}: ${text}`);
        }
        const contentType = res.headers.get('content-type') ?? '';
        if (contentType.includes('application/json')) {
            return (await res.json()) as T;
        }
        return (await res.text()) as unknown as T;
    }
}

export const httpClient: HttpClient = new FetchHttpClient(process.env.NEXT_PUBLIC_API_BASE_URL);


