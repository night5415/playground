class Progress extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getTemplate(): HTMLTemplateElement {
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
      :host { }
      ::slotted(*) { } 
      </style>
      <progress value="0" max="100"></progress>
      `;
    return template;
  }

  connectedCallback() {
    this.shadowRoot?.appendChild(this.getTemplate().content.cloneNode(true));
    let progress = this.shadowRoot?.querySelector("progress")!;
    setInterval(() => {
      progress.value += 5;
      if (progress.value == 100) progress.value = 0;
    }, 500);
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    console.log(`${name} ${oldVal} ${newVal}`);
  }
}
customElements.define("me-progress", Progress);
