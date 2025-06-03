export const handleAuthApiError = (error: unknown, fallbackMessage: string) => {
  if (error instanceof Error) {
    // TODO: 모달, 토스트 등 적용 필요
    alert(error.message);
  } else {
    alert(fallbackMessage);
  }
};
