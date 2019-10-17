let currentTraces;
let currentVariables;
let traceIndex = 0;
const examples = [];
const exampleList = document.getElementById("example-list");
const message = document.getElementById("message");
const container = document.getElementById("container");
const variablesDiv = document.getElementById("vars");
const markerElement = document.getElementById("marker");
const lastHighlights = document.getElementsByClassName("highlight");
const lastHints = document.getElementsByClassName("hint");

function trace(line, variable, newValue, highlight, hint) {
    markerElement.style.top = 
        `calc(var(--base-size) * ${ line } + var(--base-size) / 2)`;
    // markerElement.style.top = (23 * line + 9) + "px";

    if(lastHighlights.length > 0) lastHighlights[0].classList.remove("highlight");

    if(lastHints.length > 0) lastHints[0].classList.remove("hint");

    if(variable) {
        const elem = document.createElement("div");
        elem.innerHTML = JSON.stringify(newValue);

        container.onclick = function(event) {
            document.getElementById("var_" + variable).appendChild(elem);
            container.onclick = advanceTrace;
            event.preventDefault();
        };
    }

    if(highlight) 
        document.getElementById(highlight).className = "highlight";
    if(hint) 
        document.getElementById(hint).className = "hint";
}

function addExample(example) {
    const link = document.createElement("li");
    const anchor = document.createElement("a");
    link.appendChild(anchor);
    anchor.innerHTML = example.name;
    anchor.dataset.example = examples.length;
    examples.push(example);
    anchor.onclick = startExample;
    exampleList.appendChild(link);
    if(examples.length == 1) {
        // automatically click first example.
        anchor.click();
    }
}

function drawVars(event) {
    for(let i = 0; i < currentVariables.length; i++) {
        const column = document.createElement("div");
        column.className = "var";
        column.id = "var_" + currentVariables[i];

        const header = document.createElement("div");
        header.innerHTML = currentVariables[i] + ":";

        column.appendChild(header);
        variablesDiv.appendChild(column);
    }
    container.onclick = advanceTrace;
}

function startExample(event) {
    const {name, code, vars, traces} = examples[event.currentTarget.dataset.example];

    const previouslySelected = document.getElementsByClassName("selected");
    if(previouslySelected.length > 0)
        previouslySelected[0].classList.remove("selected");

    event.currentTarget.classList.add("selected");
    message.innerHTML = "Click anywhere inside the box to trace through the code.";
    markerElement.style.top = "calc(var(--base-size) / 2)";
    document.getElementById("code").innerHTML = code;
    variablesDiv.innerHTML = "";
    currentTraces = traces;
    currentVariables = vars;
    traceIndex = -1;
    container.onclick = drawVars;
}

function advanceTrace(event) {
    const lastHints = document.getElementsByClassName("hint");
    if(lastHints.length > 0) lastHints[0].classList.remove("hint");

    traceIndex++;
    if(traceIndex < currentTraces.length) {
        const [line, variable, newValue, highlight, hint] = currentTraces[traceIndex];
        trace(line, variable, newValue, highlight, hint);    
    } else {
        message.innerHTML = "You have finished tracing the code below. Choose another example from the list above."
    }
}
