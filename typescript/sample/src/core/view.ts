export default abstract class View {
    private template: string;
    private renderTemplate: string;
    private container: HTMLElement;
    private htmlList: string[];
    
    constructor(containerId: string, template: string) {
      const containerElement = document.getElementById(containerId);
  
      if (!containerElement) {
        throw "don't exist container";
      }
  
      this.container = containerElement;
      this.renderTemplate = template;
      this.template = template;
      this.htmlList = [];
    }
  
    // 타입 가드
    protected updateView(): void {
      this.container.innerHTML = this.renderTemplate;
      this.renderTemplate = this.template;
    }
  
    protected addHtml(htmlString: string): void {
      this.htmlList.push(htmlString);
    }
  
    protected getHtml(): string {
      const snapshot = this.htmlList.join('');
      this.clearHtmlList();
      return snapshot;
    }
  
    protected setTemplateData(key: string, value: string) {
      this.renderTemplate = this.renderTemplate.replace(`{{__${key}__}}`, value);
    }
  
    private clearHtmlList(): void {
      this.htmlList = [];
    }
  
    abstract render(...params: string[]): void;
  }