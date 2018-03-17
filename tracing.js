var current_traces;
var trace_index = 0;
var examples = [];

function trace(line, variable, new_val) {
    document.getElementById("marker").style.top = (27 * line) + "px";
    var elem = document.createElement("div");
    elem.innerHTML = JSON.stringify(new_val);

    document.body.onclick = function() {
        document.getElementById("var_" + variable).appendChild(elem);
        document.body.onclick = advance_trace;
    };
}

function add_example(ex) {
    var link = document.createElement("li");
    link.innerHTML = ex.name;
    link.dataset.example = examples.length;
    examples.push(ex);
    link.onclick = start_example;
    document.getElementById("example_list").appendChild(link);
}

function start_example(event) {
    var ex = examples[event.currentTarget.dataset.example];
    var name, code, vars, traces;
    ({name, code, vars, traces} = ex);
    document.getElementById("example_name").innerHTML = name;
    document.getElementById("code").innerHTML = code;
    var vars_div = document.getElementById("vars");
    vars_div.innerHTML = "";
    for(var i = 0; i < vars.length; i++) {
        var column = document.createElement("div");
        column.className = "var";
        column.id = "var_" + vars[i];
        var header = document.createElement("div");
        header.innerHTML = vars[i] + ":";
        column.appendChild(header);
        vars_div.appendChild(column);
    }
    current_traces = traces;
    trace_index = -1;
    document.body.onclick = advance_trace;
}

function advance_trace() {
    if(++trace_index >= current_traces.length) return;
    [line, variable, new_val] = current_traces[trace_index];
    trace(line, variable, new_val);
}
