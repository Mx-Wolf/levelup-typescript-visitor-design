import {makeAmount, makeDateTime, ServiceLogRecord} from '../../i-face-service-log';
import {dispatch} from '../../dispatch';
import {createServiceCenterTotals} from './service-center-totals';
import { expect } from 'chai';

describe('отчет по сервис-центрам',()=>{
  const KNOWN_WORKSHOP = 'KNOWN_WORKSHOP';
  const simpleLog:ServiceLogRecord[] = [
    {
      customer:'c1',
      description: 'd1',
      discount: makeAmount(0),
      id:'n1',
      mechanic: 'mek1',
      milage: 100,
      paid: makeAmount(1),
      parts:makeAmount(1),
      serviced:makeDateTime(new Date().toISOString()),
      total:makeAmount(1),
      vehicle:{
        body:'b1',
        make: 'mk1',
        model: 'md1',
        trim: 't1',
      },
      work: makeAmount(1),
      workshop: KNOWN_WORKSHOP,
      year: new Date().getFullYear()-1,
    }
  ];
  it('составляет отчет по одной записи',()=>{
    const result = dispatch(simpleLog, createServiceCenterTotals());
    expect(KNOWN_WORKSHOP in result).eq(true);
  });
});
