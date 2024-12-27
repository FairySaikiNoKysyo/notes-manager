import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h2>Welcome to the Notes Manager</h2>
      <Link href="/topics">Go to Topics</Link>
    </div>
  );
}