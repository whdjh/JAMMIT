import Link from 'next/link';

interface AuthCardProps {
  title: string;
  children: React.ReactNode;
  linkTo?: 'login' | 'signup';
}

export default function AuthCard({ title, children, linkTo }: AuthCardProps) {
  let linkQuestion = '';
  let linkText = '';
  let linkHref = '';
  switch (linkTo) {
    case 'login':
      linkQuestion = '이미 회원이신가요?';
      linkText = '로그인';
      linkHref = '/login';
      break;
    case 'signup':
      linkQuestion = 'JAMMIT이 처음이신가요?';
      linkText = '회원가입';
      linkHref = '/signup/step1';
      break;
  }
  return (
    <div className="flex min-h-[calc(100vh-7.5rem)] items-center justify-center">
      <div className="flex w-[31.875rem] flex-col items-center justify-center rounded-[1.5rem] bg-[#242429] p-[3.375rem]">
        <h1 className="mb-[2rem] text-[1.5rem] font-semibold text-gray-100">
          {title}
        </h1>
        {children}
        {linkTo && (
          <div className="mt-[2.5rem] flex justify-center">
            <p className="mr-1 text-[0.938rem] font-medium text-gray-400">
              {linkQuestion}
            </p>
            <Link
              href={linkHref}
              className="text-[0.938rem] font-medium text-[#BF52FF] underline underline-offset-2"
            >
              {linkText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
