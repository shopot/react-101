import * as Axios from 'axios';

import { API_URL } from '@/config';

export const axios = Axios.default.create({
  baseURL: API_URL,
});
