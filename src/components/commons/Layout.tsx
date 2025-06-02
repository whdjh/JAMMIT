import Gnb from './Gnb';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Gnb />
      <main className="pt-[3.75rem]">{children}</main>
    </div>
  );
}
