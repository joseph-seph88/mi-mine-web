import { NextResponse } from 'next/server';

type ProxyOptions = {
    path: string;
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    body?: any;
    revalidate?: number;
    signal?: AbortSignal;
    headers?: Record<string, string>;
    schema?: { parse: (value: any) => any };
};

export async function proxyJson({ path, method = 'GET', body, revalidate = 60, signal, headers, schema }: ProxyOptions) {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL as string;
    if (!base) {
        return NextResponse.json({ message: 'Missing API base URL' }, { status: 500 });
    }

    const init: RequestInit & { next?: { revalidate?: number } } = {
        method,
        next: { revalidate },
        signal,
        headers,
    };
    if (body !== undefined) {
        init.body = typeof body === 'string' ? body : JSON.stringify(body);
        init.headers = {
            'Content-Type': 'application/json',
            ...(headers || {}),
        };
        
        delete init.next;
        (init as any).cache = 'no-store';
    }

    const res = await fetch(`${base}${path}`, init);

    if (!res.ok) {
        return NextResponse.json({ message: 'Upstream error' }, { status: res.status });
    }

    const data = await res.json();
    const parsed = schema ? schema.parse(data) : data;
    return NextResponse.json(parsed, { status: 200 });
}

export function withTimeout(ms: number) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), ms);
    return { controller, cleanup: () => clearTimeout(timer) };
}


