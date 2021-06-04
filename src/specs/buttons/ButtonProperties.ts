export class ButtonProperties {
  public title: string;
  public disabled: boolean;
  public timeoutOnClick: number | null;

  constructor(options: { title: string; disabled?: boolean; timeoutOnClick?: number }) {
    this.title = options.title;
    this.disabled = !!options.disabled;
    this.timeoutOnClick = options.timeoutOnClick ?? null;
  }
}
