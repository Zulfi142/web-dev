setTimeout(() => {
    let flashmsgs = document.querySelectorAll(".flashMsg");

    flashmsgs.forEach((msg) => {
        msg.remove();
    });
}, 3000);