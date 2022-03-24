export interface UserData {
  user: User;
}

export interface User {
  name: string;
  login: string;
  email: string;
  bio: string;
  company: string;
  location: string;
  twitterUsername: string;
  websiteUrl: string;
  followers: TotalCount;
  following: TotalCount;
  avatarUrl: string;
  repositories: Repositories;
}

export interface Repositories {
  totalCount: number;
  nodes: ItemRepo[];
  pageInfo: PageInfo;
}

export interface ItemRepo {
  id: string;
  name: string;
  description: string;
  url: string;
  createdAt: Date;
  visibility: string;
  isFork: boolean;
  stargazerCount: number;
  issues: TotalCount;
  pullRequests: TotalCount;
  licenseInfo: LicenseInfo | null;
  languages: Languages;
  updatedAt: Date;
}

export interface TotalCount {
  totalCount: number;
}

export interface Languages {
  nodes: Node[];
}

export interface Node {
  id: string;
  name: string;
  color: string;
}

export interface LicenseInfo {
  name: string;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string;
  startCursor: string;
}
