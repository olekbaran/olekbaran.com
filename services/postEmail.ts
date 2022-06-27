import { AxiosResponse } from 'axios';

import { api } from 'services';
import { IcontactForm, IsendEmail } from 'types';

export const postEmail = async (data: IcontactForm) => {
  const response: AxiosResponse<IsendEmail> = await api.post('contact', data);
  return response;
};
