export type TProjectFeature = {
  name: string;
  link: string;
};

export type TProjectTeam = {
  name: string;
  link: string;
};

export type TProject = {
  id: number;
  name: string;
  value: string;
  description: string;
  icon?: string;
  link: string;
  feature?: TProjectFeature;
  team?: TProjectTeam;
};
