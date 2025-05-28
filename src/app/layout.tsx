import 'pretendard/dist/web/variable/pretendardvariable.css';

import Layout from '@/components/commons/Layout';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
