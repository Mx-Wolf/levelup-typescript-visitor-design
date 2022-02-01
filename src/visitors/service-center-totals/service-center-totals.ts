import { ServiceLogVisitor } from '../../i-face-visitor';
import { ServiceCenterTotals } from './i-face-service-center-totals';

export const createServiceCenterTotals = ():ServiceLogVisitor<ServiceCenterTotals>=>({
  getInitialState: ()=>({}),
  report:(state)=>state,
  visitLogRecord:(state, item)=>{
    throw new Error('not implemented yet');
  }
});
