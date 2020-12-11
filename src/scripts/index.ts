interface testing {
    target: {
        value: string
    }
}
interface user {
    id: number,
    name: string,
    username: string
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
function setupBrowserAutocomplete() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json() as Promise<user[]>)
        .then(response => {
            let list: string[] = response.map(x => x.name);
            createStore<string>('browser', list); 
        })
        .catch(e => console.error('Failed to fetch', e));
}
/**
 * Creates a datalist for input autocomplete.
 * @param el id of the imput to attach the store to.
 * @param values an array of string or numbers.
 */
function createStore<T>(el: string, values: T[]) {
    const store = document.createElement('datalist'),
        main = document.querySelector('main');

    values.forEach(value => {
        const data = document.createElement('option');
        data.value = `${value}`
        store.appendChild(data)
    });

    store.id = `${el}s`;
    main?.appendChild(store);
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
    setupBrowserAutocomplete();
});

