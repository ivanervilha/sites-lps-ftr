import { notFound } from 'next/navigation';

// This is a reserved tenant route for 404 pages
// Middleware rewrites here when tenant or campaign is not found
export default function NotFoundPage() {
    notFound();
}
