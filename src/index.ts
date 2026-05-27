/**
 * Rok Agent adapter for Paperclip.
 *
 * Runs Rok Agent (https://github.com/RokctAI/rok-agent)
 * as a managed employee in a Paperclip company. Rok Agent is a
 * full-featured AI agent with 30+ native tools, persistent memory,
 * skills, session persistence, and MCP support.
 *
 * @packageDocumentation
 */

import { ADAPTER_TYPE, ADAPTER_LABEL } from "./shared/constants.js";

export const type = ADAPTER_TYPE;
export const label = ADAPTER_LABEL;

/**
 * Models available through Rok Agent.
 *
 * Rok supports any model via any provider. The Paperclip UI should
 * prefer detectModel() plus manual entry over curated placeholder models,
 * since Rok availability depends on the user's local configuration.
 */
export const models: { id: string; label: string }[] = [];

/**
 * Documentation shown in the Paperclip UI when configuring a Rok agent.
 */
export const agentConfigurationDoc = `# Rok Agent Configuration

Rok Agent is a full-featured AI agent by Nous Research with 30+ native
tools, persistent memory, session persistence, skills, and MCP support.

## Prerequisites

- Python 3.10+ installed
- Rok Agent installed: \`pip install rok-agent\`
- At least one LLM API key configured in ~/.rok/.env

## Core Configuration

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| model | string | (Rok configured default) | Optional explicit model in provider/model format. Leave blank to use Rok's configured default model. |
| provider | string | (auto) | API provider: auto, openrouter, nous, openai-codex, zai, kimi-coding, minimax, minimax-cn. Usually not needed — Rok auto-detects from model name. |
| timeoutSec | number | 300 | Execution timeout in seconds |
| graceSec | number | 10 | Grace period after SIGTERM before SIGKILL |

## Tool Configuration

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| toolsets | string | (all) | Comma-separated toolsets to enable (e.g. "terminal,file,web") |

## Session & Workspace

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| persistSession | boolean | true | Resume sessions across heartbeats |
| worktreeMode | boolean | false | Use git worktree for isolated changes |
| checkpoints | boolean | false | Enable filesystem checkpoints |

## Advanced

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| rokCommand | string | rok | Path to rok CLI binary |
| verbose | boolean | false | Enable verbose output |
| extraArgs | string[] | [] | Additional CLI arguments |
| env | object | {} | Extra environment variables |
| promptTemplate | string | (default) | Custom prompt template with {{variable}} placeholders |

## Available Template Variables

- \`{{agentId}}\` — Paperclip agent ID
- \`{{agentName}}\` — Agent display name
- \`{{companyId}}\` — Paperclip company ID
- \`{{companyName}}\` — Company display name
- \`{{runId}}\` — Current heartbeat run ID
- \`{{taskId}}\` — Current task/issue ID (if assigned)
- \`{{taskTitle}}\` — Task title (if assigned)
- \`{{taskBody}}\` — Task description (if assigned)
- \`{{projectName}}\` — Project name (if scoped to a project)
`;
