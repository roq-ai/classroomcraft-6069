interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['School Administrator'],
  customerRoles: ['Freelance Educator'],
  tenantRoles: ['School Administrator', 'Content Creator'],
  tenantName: 'Institution',
  applicationName: 'ClassroomCraft',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage content', 'Submit proposals', 'Create lesson plans', 'Create learning modules'],
  ownerAbilities: [
    'Manage institution information',
    'Manage user accounts within the institution',
    'Manage content, lesson plans, and learning modules',
    'Manage proposals',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/0df91952-5925-4e08-afdc-edca91b5bee4',
};
