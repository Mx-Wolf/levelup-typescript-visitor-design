import { ServiceLogRecord } from './i-face-service-log';

export interface ServiceLogVisitor<T>{
  visitLogRecord(state: T, record: ServiceLogRecord): T;
  getInitialState():T;
}
