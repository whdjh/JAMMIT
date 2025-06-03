import 'pretendard/dist/web/variable/pretendardvariable.css';
import Layout from '@/components/commons/Layout';
import '@/styles/globals.css';
import Providers from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
