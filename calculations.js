(() => {
    let zalupa, test;

    chrome.runtime.onMessage.addListener((obj, sender, response) =>  {
        const {type, params}  = obj

        console.log(`I am in a func, got: type: ${type} and  params:    ${JSON.stringify(params)}`)
    })
})();