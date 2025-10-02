import { NextResponse } from 'next/server';
import { ApiPath } from '@/lib/constants/path/api-path';
import { proxyJson, withTimeout } from '@/lib/network/bff';

export const revalidate = 60;

export async function GET() {
    if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
        return NextResponse.json({ message: 'Missing API base URL' }, { status: 500 });
    }

    const { controller, cleanup } = withTimeout(8000);
    try {
        return await proxyJson({
            path: ApiPath.POST_GET_BY_MINE,
            revalidate,
            signal: controller.signal,
        });
    } finally {
        cleanup();
    }
}


