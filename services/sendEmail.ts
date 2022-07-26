import { AxiosResponse } from 'axios';

import { axios } from 'config';

import type { IContactForm, ISendEmail } from 'types';

export const sendEmail = async (data: IContactForm) => {
  const response: AxiosResponse<ISendEmail> = await axios.post('contact', data);
  return response.data;
};
