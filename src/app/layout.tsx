import Gnb from '@/components/commons/Gnb';
import 'pretendard/dist/web/variable/pretendardvariable.css';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="bg-[#1A1A1E]">
      <body className="bg-[#1A1A1E]">
        <Gnb />
        <main>{children}</main>
      </body>
    </html>
  );
}
