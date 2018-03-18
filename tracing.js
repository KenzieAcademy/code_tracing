var current_traces;
var current_vars;
var trace_index = 0;
var examples = [];
const message = document.getElementById("message");
const container = document.getElementById("container");
const vars_div = document.getElementById("vars");

function trace(line, variable, new_val, highlight, hint) {
    document.getElementById("marker").style.top = (23 * line + 9) + "px";
    var last_highlights = document.getElementsByClassName("highlight");
    if(last_highlights.length > 0) last_highlights[0].classList.remove("highlight");
    var last_hints = document.getElementsByClassName("hint");
    if(last_hints.length > 0) last_hints[0].classList.remove("hint");

    if(variable) {
        var elem = document.createElement("div");
        elem.innerHTML = JSON.stringify(new_val);

        document.getElementById("container").onclick = function(event) {
            document.getElementById("var_" + variable).appendChild(elem);
            container.onclick = advance_trace;
            event.preventDefault();
        };
    }
    if(highlight) {
        document.getElementById(highlight).className = "highlight";
    }
    if(hint) {
        document.getElementById(hint).className = "hint";
    }
}

function add_example(ex) {
    var link = document.createElement("li");
    link.innerHTML = ex.name;
    link.dataset.example = examples.length;
    examples.push(ex);
    link.onclick = start_example;
    document.getElementById("example_list").appendChild(link);
    if(examples.length == 1) {
        // automatically click first example.
        link.click();
    }
}

function draw_vars(event) {
    for(var i = 0; i < current_vars.length; i++) {
        var column = document.createElement("div");
        column.className = "var";
        column.id = "var_" + current_vars[i];
        var header = document.createElement("div");
        header.innerHTML = current_vars[i] + ":";
        column.appendChild(header);
        vars_div.appendChild(column);
    }
    container.onclick = advance_trace;
}

function start_example(event) {
    var ex = examples[event.currentTarget.dataset.example];
    var name, code, vars, traces;
    ({name, code, vars, traces} = ex);

    var prev_selected = document.getElementsByClassName("selected");
    if(prev_selected.length > 0) {
        prev_selected[0].classList.remove("selected");
    }
    event.currentTarget.classList.add("selected");
    message.innerHTML = "Click anywhere inside the box to trace through the code.";
    document.getElementById("marker").style.top = "9px";
    document.getElementById("code").innerHTML = code;
    var vars_div = document.getElementById("vars");
    vars_div.innerHTML = "";
    current_traces = traces;
    current_vars = vars;
    trace_index = -1;
    container.onclick = draw_vars;
}

function advance_trace(event) {
    var line, variable, new_val, highlight, hint;
    var last_hints = document.getElementsByClassName("hint");
    if(last_hints.length > 0) last_hints[0].classList.remove("hint");

    trace_index++;
    if(trace_index < current_traces.length) {
        [line, variable, new_val, highlight, hint] = current_traces[trace_index];
        trace(line, variable, new_val, highlight, hint);    
    } else {
        message.innerHTML = "You have finished tracing the code below. Choose another example from the list above."
    }
}
