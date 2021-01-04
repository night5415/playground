class Flexy extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return [""];
  }

  getTemplate(): HTMLTemplateElement {
    const template = document.createElement("template");
    template.innerHTML = `
    <style>
     :host { }
     ::slotted(*) { }
     .highlight {
       color: blue;
     }
    </style>
    <div class="highlight">Hello Web Component</div>
    <slot></slot>
    <slot></slot>
    `;
    return template;
  }

  connectedCallback() {
    this.shadowRoot?.appendChild(this.getTemplate().content.cloneNode(true));
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    console.log(`${name} ${oldVal} ${newVal}`);
  }
}
customElements.define("me-flex", Flexy);
