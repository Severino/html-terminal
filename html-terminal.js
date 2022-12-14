const target = document.body
Object.assign(target.style, {
    fontFamily: "Helvetica, Arial, sans-serif",
    backgroundColor: "black",
    color: "white"
})

let htmlTerminalAutoScroll = true

let htmlTerminalStyles = {
    padding: "5px 10px"
}

function log(message, styles = {}) {
    let box = writeLine(message)
    Object.assign(box.style, htmlTerminalStyles, styles)
}

function notice(message, styles = {}) {
    log(message,
        Object.assign({
            color: "aqua"
        }, styles))
}

function error(message, styles = {}) {
    log(message,
        Object.assign({
            color: "tomato"
        }, styles))
}

function warn(message, styles = {}) {
    log(message,
        Object.assign({
            color: "gold"
        }, styles))
}

function writeLine(message) {
    let messageBox = document.createElement("div")
    messageBox.className = "cmd-message-box"
    messageBox.innerHTML = message
    target.appendChild(messageBox)
    if (htmlTerminalAutoScroll)
        messageBox.scrollIntoView({ behavior: "smooth" })
    return messageBox
}

