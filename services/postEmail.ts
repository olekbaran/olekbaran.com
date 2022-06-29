import { AxiosResponse } from 'axios';

import { api } from 'services';
import type { IContactForm, ISendEmail } from 'types';

export const postEmail = async (data: IContactForm) => {
  const response: AxiosResponse<ISendEmail> = await api.post('contact', data);
  return response.data;
};
