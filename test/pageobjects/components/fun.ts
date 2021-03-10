
export class Fun {

    consoler(d: string){
        browser.pause(1000)
        console.log('Fun console : ', d)
    }

    sleep(ms: number){
        console.log('Fun sleep : ', ms)
        browser.pause(ms)
    }

}