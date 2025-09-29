// SPDX-License-Identifier: Apache-2.0
import { run } from './utils/runner';

(async () => {
  try {
    await run();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
