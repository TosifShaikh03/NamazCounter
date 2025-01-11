const fazr = document.getElementById("fazr")
const zuhr = document.getElementById("zuhr")
const asar = document.getElementById("asar")
const magrib = document.getElementById("magrib")
const isha = document.getElementById("isha")

const F = document.getElementById("F")
const Z = document.getElementById("Z")
const A = document.getElementById("A")
const M = document.getElementById("M")
const I = document.getElementById("I")
const total = document.getElementById("total")
const percent = document.getElementById("percent")

fazr.addEventListener("click", f1)
zuhr.addEventListener("click", f2)
asar.addEventListener("click", f3)
magrib.addEventListener("click", f4)
isha.addEventListener("click", f5)

j = 1
function f1() {
   j++;
   localStorage.setItem("fazr", j)
   location.reload()
   f6()
   f7()
}
window.addEventListener("load", fa)
function fa() {
   j = localStorage.getItem("fazr")
   F.innerText = j

}

b = 1;
function f2() {
   b++;
   localStorage.setItem("zuhr", b)
   location.reload()
   f6()
   f7()
}
window.addEventListener("load", fb)
function fb() {
   b = localStorage.getItem("zuhr")
   Z.innerText = b

}

c = 1;
function f3() {
   c++;
   localStorage.setItem("asar", c)
   location.reload()
   f6()
   f7()
}
window.addEventListener("load", fc)
function fc() {
   c = localStorage.getItem("asar")
   A.innerText = c

}

d = 1;
function f4() {
   d++;
   localStorage.setItem("magrib", d)
   location.reload()
   f6()
   f7()
}
window.addEventListener("load", fd)
function fd() {
   d = localStorage.getItem("magrib")
   M.innerText = d
}

e = 1;
function f5() {
   e++;
   localStorage.setItem("isha", e)
   location.reload()
   f6()
   f7()
}
window.addEventListener("load", fe)
function fe() {
   e = localStorage.getItem("isha")
   I.innerText = e
}

function f6() {
   g = eval(e) + eval(d) + eval(j) + eval(b) + eval(c)
   localStorage.setItem("tot", g)
   location.reload();
}
window.addEventListener("load", ff)
function ff() {
   g = localStorage.getItem("tot")
   total.innerText = g
}

function f7() {
   x = g / 1825 * 100
   localStorage.setItem("percent", x)
   location.reload()
}
window.addEventListener("load", fg)
function fg() {
   x = localStorage.getItem("percent")
   percent.innerText = x;
}