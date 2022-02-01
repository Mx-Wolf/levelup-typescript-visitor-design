import { DateTime } from '../../i-face-service-log';
import { ServiceLogVisitor } from '../../i-face-visitor';
import { AgeCostCorrelation } from './i-face-age-cost-correlations';

export const createAgeCostCorrelationVisitor = (reference:DateTime):ServiceLogVisitor<AgeCostCorrelation>=>({
  getInitialState:()=>({}),
  report:(state)=>state,
  visitLogRecord:(state,item)=>{
    throw new Error('not implemented yet');
  }
});
