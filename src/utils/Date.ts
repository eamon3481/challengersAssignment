const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DATE = HOUR * 24;
const WEEK = DATE * 7;
const WEEKSTRING = ['일', '월', '화', '수', '목', '금', '토'];
export const getDiffDate = (startDate: Date, endDate: Date) => {
  const diffMs = endDate.getTime() - startDate.getTime();

  const diffDate = Math.floor(diffMs / DATE);
  const diffWeek = Math.floor(diffMs / WEEK);
  return {diffDate, diffWeek};
};

export const getMonthDateDayString = (date: Date) => {
  const _date = date.getDate();
  const month = date.getMonth() + 1;
  const day = WEEKSTRING[date.getDay()];

  return `${month}월 ${_date}일(${day})`;
};

export function getRegisterTag(registerStartDate: Date, registerEndDate: Date) {
  const today = new Date();
  if (registerStartDate.getTime() > today.getTime()) {
    const {diffDate} = getDiffDate(today, registerStartDate);
    return `${diffDate} 일 뒤 시작`;
  }

  if (registerEndDate.getTime() < today.getTime()) {
    return '모집 마감';
  }
  return '오늘부터 시작';
}

export function getChallengeDuringDateTag(startDate: Date, endDate: Date) {
  const {diffWeek} = getDiffDate(startDate, endDate);
  return `${diffWeek}주 동안`;
}
