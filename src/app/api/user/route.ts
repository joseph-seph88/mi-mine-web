import { NextRequest } from 'next/server';
import { ApiPath } from '@/lib/constants/path/api-path';
import { proxyJson, withTimeout } from '@/lib/network/bff';

export async function GET() {
    const { controller, cleanup } = withTimeout(8000);
    try {
        return await proxyJson({ path: ApiPath.USER_INFO, signal: controller.signal, revalidate: 0 });
    } finally {
        cleanup();
    }
}

export async function PATCH(req: NextRequest) {
    const body = await req.json();
    const { controller, cleanup } = withTimeout(8000);
    try {
        return await proxyJson({ path: ApiPath.USER_UPDATE, method: 'PATCH', body, signal: controller.signal });
    } finally {
        cleanup();
    }
}

export async function DELETE() {
    const { controller, cleanup } = withTimeout(8000);
    try {
        return await proxyJson({ path: ApiPath.USER_DELETE, method: 'DELETE', signal: controller.signal });
    } finally {
        cleanup();
    }
}


