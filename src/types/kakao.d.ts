export {}; // 모듈 선언으로 인식시키기 위해 필요

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    daum: any;
  }
}
