import Gnb from '@/components/commons/Gnb';
import 'pretendard/dist/web/variable/pretendardvariable.css';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Gnb />
        <main>{children}</main>
      </body>
    </html>
  );
}
