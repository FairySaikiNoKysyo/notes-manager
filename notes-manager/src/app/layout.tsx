import { ReactNode } from 'react';
import '../styles/globals.css'; // Імпортуємо глобальні стилі

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <h1>Notes Manager</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/topics">Topics</a></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
