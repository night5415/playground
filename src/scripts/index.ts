function runCode() {
    console.log("hello World");
}

interface testing {
    target: {
        value: string
    }
}



function setupTextArea() {
    const textArea = document.querySelector("textarea");

    textArea?.addEventListener("drag", function (e) {
        if (e.clientX !== 0) {
            textArea.style.left = `${e.clientX}px`;
            textArea.style.top = `${e.clientY}px`;
        }
    });
    textArea?.addEventListener("blur", function (this: HTMLTextAreaElement, ev: FocusEvent) {
        const me = this;

        console.log(me.value);
        me.value = '';
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const ogLog = console.log,
        main = document.querySelector("main");

    console.log = function (data: any[]) {
        const pre = document.createElement("pre");

        pre.innerHTML = data.join(',');
        main?.appendChild(pre);
        ogLog(data);
    };
    setupTextArea();
});
document.addEventListener("DOMContentLoaded", runCode);
