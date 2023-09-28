export interface IApplicationForm {
  coverImage: string;
  personalInformation: IPersonalInfo;
  profile: IProfile;
  customisedQuestions: IQuestionTemplate[];
}

export interface IPersonalInfo {
  firstName: IPersonalInfTemplate;
  lastName: IPersonalInfTemplate;
  emailId: IPersonalInfTemplate;
  phoneNumber: IPersonalInfTemplate;
  nationality: IPersonalInfTemplate;
  currentResidence: IPersonalInfTemplate;
  idNumber: IPersonalInfTemplate;
  dateOfBirth: IPersonalInfTemplate;
  gender: IPersonalInfTemplate;
  personalQuestions: IQuestionTemplate;
}

export interface IPersonalInfTemplate {
  internalUse: boolean;
  show: boolean;
}

export interface IProfile {
  education: IProfileTemplate;
  experience: IProfileTemplate;
  resume: IProfileTemplate;
  profileQuestions: IQuestionTemplate;
}

export interface IProfileTemplate {
  mandatory: boolean;
  show: boolean;
}

export interface IQuestionTemplate {
  id: string;
  type: string;
  question: string;
  choices?: string[];
  maxChoice?: number;
  disqualify?: boolean;
  other?: boolean;
}
