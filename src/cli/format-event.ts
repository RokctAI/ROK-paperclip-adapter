/**
 * CLI output formatting for Rok Agent adapter.
 *
 * Pretty-prints Rok output lines in the terminal when running
 * Paperclip's CLI tools.
 */

import pc from "picocolors";

/**
 * Format a Rok Agent stdout event for terminal display.
 *
 * @param raw    Raw stdout line from Rok
 * @param debug  If true, show extra metadata with color coding
 */
export function printRokStreamEvent(raw: string, debug: boolean): void {
  const line = raw.trim();
  if (!line) return;

  if (!debug) {
    console.log(line);
    return;
  }

  // Adapter log lines
  if (line.startsWith("[rok]")) {
    console.log(pc.blue(line));
    return;
  }

  // Tool output (┊ prefix)
  if (line.startsWith("┊")) {
    console.log(pc.cyan(line));
    return;
  }

  // Thinking
  if (line.includes("💭") || line.startsWith("<thinking>")) {
    console.log(pc.dim(line));
    return;
  }

  // Errors
  if (
    line.startsWith("Error:") ||
    line.startsWith("ERROR:") ||
    line.startsWith("Traceback")
  ) {
    console.log(pc.red(line));
    return;
  }

  // Session info
  if (/session/i.test(line) && /id|saved|resumed/i.test(line)) {
    console.log(pc.green(line));
    return;
  }

  // Default: gray in debug mode
  console.log(pc.gray(line));
}
