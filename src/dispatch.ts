import { ServiceLogRecord } from './i-face-service-log';
import { ServiceLogVisitor } from './i-face-visitor';

export const dispatch = <T>(
  items: ServiceLogRecord[],
  visitor: ServiceLogVisitor<T>,
) => items.reduce(
    (state, item) => visitor.visitLogRecord(state, item),
    visitor.getInitialState(),
  );
