function integral() {
    function f(x) {
        for (let i of Object.getOwnPropertyNames(Math))
            globalThis[i] = Math[i]
        return eval(document.getElementById("f").value);
    }
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    s = 0;
    n = 9;
    x = []
    t = [-0.911589, -0.601019, -0.528762, -0.167906, 0, 0.167906, 0.528762, 0.601019, 0.911589]
    for (i = 0; i < n; i++)
        x[i] = ((b + a) / 2) + ((b - a) / 2) * t[i];
    for (i = 0; i < n; i++)
        s = s + ((b - a) / n) * f(x[i]);
    document.getElementById('answer').value = s.toFixed(10);
}
