import app from '@robgietema/nick/src/app';
import { testRequest } from '@robgietema/nick/src/helpers';

describe('Types', () => {
  it('should return the schedule type', () =>
    testRequest(app, 'types/schedule'));
});
