// @flow

import cors from 'cors';

const corsOptions = {
  credentials: true,
  origin: true,
};

export default cors(corsOptions);
