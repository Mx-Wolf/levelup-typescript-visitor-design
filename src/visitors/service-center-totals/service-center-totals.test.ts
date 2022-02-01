import { KNOWN_WORKSHOP, simpleLog } from '../../test-mock/service-log';
import { dispatch } from '../../dispatch';
import { createServiceCenterTotals } from './service-center-totals';
import { expect } from 'chai';

describe('отчет по сервис-центрам', () => {

  it('составляет отчет по одной записи', () => {
    const result = dispatch(simpleLog, createServiceCenterTotals());
    expect(KNOWN_WORKSHOP in result).eq(true);
  });
});
