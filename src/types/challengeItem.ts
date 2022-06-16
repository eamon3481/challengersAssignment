export type CategoryType =
  | '운동'
  | '식습관'
  | '생활'
  | '정서'
  | '취미'
  | '환경';
export type CompanyType = {
  id: number;
  name: string;
};
export type ResponsePartnerType = {
  type: 'partner';
  company: CompanyType;
  category: CategoryType;
  registerCount: number;
  registerEndDate: string;
  registerStartDate: string;
  endDate: string;
  startDate: string;
  title: string;
  thumbnailImageUrl: string;
  id: number;
};
export type ResponseOfficialType = {
  type: 'official';
  category: CategoryType;
  registerCount: number;
  registerEndDate: string;
  registerStartDate: string;
  endDate: string;
  startDate: string;
  title: string;
  thumbnailImageUrl: string;
  id: number;
};

export type ChallengeItemType = ResponseOfficialType | ResponsePartnerType;
