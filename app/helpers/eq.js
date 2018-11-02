import { helper } from '@ember/component/helper';

export function eq([lhs, rhs]) {
  return lhs === rhs;
}

export default helper(eq)
