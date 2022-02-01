import { ServiceLogVisitor } from '../../i-face-visitor';
import { CustomerOutstanding } from './i-face-customer-outstanding';

export const createCustomerOutstanding = ():ServiceLogVisitor<CustomerOutstanding>=>({
  getInitialState:()=>{throw new Error();},
  report: ()=>{throw new Error();},
  visitLogRecord: ()=>{throw new Error();},
});
