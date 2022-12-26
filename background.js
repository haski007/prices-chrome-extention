chrome.tabs.onUpdated.addListener((tabId, tab) => {
    console.log(`url: ${tab.url}`)
    console.log(JSON.stringify(tab))
    if (tab.url && tab.url.includes("x-kom")) {
        const urlParams = new URLSearchParams(tab.url)
        // console.log(`url: ${tab.url}`)
        // console.log(`url params sended: ${urlParams}`)

        let spanElement = document.querySelector("span.sc-8c7p9j-2.eTfPbp");

        let spanContent = spanElement.textContent;

        console.log("span content:", spanContent);

        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            params: urlParams
        })
    }
})