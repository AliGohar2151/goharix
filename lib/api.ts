const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactMessagePayload {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// ── Services ─────────────────────────────────────────────────────────────────

export async function getServices(): Promise<Service[]> {
  const res = await fetch(`${API_BASE_URL}/services`, {
    // Next.js cache: revalidate every 60 s so the page stays fresh
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error('Failed to fetch services');
  return res.json();
}

// ── Contact messages ──────────────────────────────────────────────────────────

export async function submitContactMessage(
  payload: ContactMessagePayload,
): Promise<void> {
  const res = await fetch(`${API_BASE_URL}/contact-messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to submit contact message');
}
