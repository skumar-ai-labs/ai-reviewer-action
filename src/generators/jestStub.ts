// SPDX-License-Identifier: Apache-2.0
export function jestStub(modulePath: string): string {
  return `import * as m from '${modulePath}';
describe('${modulePath}', () => {
  test('should be defined', () => {
    expect(m).toBeDefined();
  });
});`;
}
