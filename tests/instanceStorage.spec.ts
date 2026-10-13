import { expect, test, type Page } from '@playwright/test';

const editor = (page: Page) => page.locator('.monaco-editor');

const setDiagram = async (page: Page, code: string) => {
  await editor(page).click();
  await page.keyboard.press('Control+KeyA');
  await page.keyboard.insertText(code);
};

const getHash = async (page: Page) => page.evaluate(() => window.location.hash);

test('isolates and restores editor state when an instance is provided', async ({ page }) => {
  await page.goto('/edit');
  await expect(editor(page)).toBeVisible();

  const initialHash = await getHash(page);
  await setDiagram(page, 'flowchart TD\n  A[Starter A]');
  await expect(page.locator('#view')).toContainText('Starter A');
  await expect.poll(() => getHash(page)).not.toBe(initialHash);
  const starterA = await getHash(page);

  await setDiagram(page, 'flowchart TD\n  B[Starter B]');
  await expect(page.locator('#view')).toContainText('Starter B');
  await expect.poll(() => getHash(page)).not.toBe(starterA);
  const starterB = await getHash(page);

  await page.goto(`/edit?instance=quiz-question-a${starterA}`);
  await expect(editor(page)).toContainText('Starter A');
  await setDiagram(page, 'flowchart TD\n  A[Saved A]');
  await expect(page.locator('#view')).toContainText('Saved A');

  await page.goto(`/edit?instance=quiz-question-b${starterB}`);
  await expect(editor(page)).toContainText('Starter B');
  await expect(editor(page)).not.toContainText('Saved A');
  await setDiagram(page, 'flowchart TD\n  B[Saved B]');
  await expect(page.locator('#view')).toContainText('Saved B');

  await page.goto(`/edit?instance=quiz-question-a${starterA}`);
  await expect(editor(page)).toContainText('Saved A');
  await expect(editor(page)).not.toContainText('Starter A');

  const storageKeys = await page.evaluate(() => Object.keys(localStorage));
  expect(storageKeys).toContain('codeStore');
  expect(storageKeys).toContain('codeStore:quiz-question-a');
  expect(storageKeys).toContain('codeStore:quiz-question-b');
  expect(storageKeys).toContain('autoHistoryStore:quiz-question-a');
  expect(storageKeys).toContain('manualHistoryStore:quiz-question-a');
});
