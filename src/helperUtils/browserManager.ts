import { Browser, BrowserContext, Page } from '@playwright/test';

export class BrowserManager {
  private context: BrowserContext | null;
  private page: Page | null;

  constructor() {
    this.context = null;
    this.page = null;
  }

  // =====================
  // 1️⃣ Initialization
  // =====================
  async init(browser: Browser): Promise<Page> {
    this.context = await browser.newContext(); // isolated context
    this.page = await this.context.newPage();  // new page/tab
    return this.page;
  }

  async close(): Promise<void> {
    if (this.context) {
      await this.context.close();
      this.context = null;
      this.page = null;
    }
  }



  
  // =====================
  // 2️⃣ Navigation
  // =====================
  async goto(url: string): Promise<void> {
    if (!this.page) throw new Error('Page not initialized');
    await this.page.goto(url);
  }


}