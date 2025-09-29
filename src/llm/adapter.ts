// SPDX-License-Identifier: Apache-2.0
export interface LLMRequest { prompt: string; maxTokens?: number; }
export interface LLMResponse { text: string; tokensUsed?: number; }
export interface LLMProvider { name(): string; complete(r: LLMRequest): Promise<LLMResponse>; }

export class EchoProvider implements LLMProvider {
  name() { return 'echo'; }
  async complete(r: LLMRequest): Promise<LLMResponse> {
    return { text: 'ECHO: ' + r.prompt };
  }
}
