import './globals.css';

export const metadata = {
  title: '@bia_nfit Agent - Agente IA para Instagram',
  description: 'Gerador automático de conteúdo para Instagram usando IA',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
