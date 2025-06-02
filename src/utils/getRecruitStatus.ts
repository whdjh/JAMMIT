export const getRecruitStatus = (
  recruitDeadline: string,
  current: number,
  total: number,
): string => {
  const now = new Date();
  const deadline = new Date(recruitDeadline);
  const isExpired = now > deadline;
  const isFull = current === total;
  if (isExpired) {
    return '모집종료';
  }
  if (isFull) {
    return '모집완료';
  }
  return '모집중';
};
