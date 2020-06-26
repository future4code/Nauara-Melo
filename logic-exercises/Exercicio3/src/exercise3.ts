let data1: string = "";
let data2: string = "";

export function executeA(data1: string, data2: string): boolean {

    return data1 === data2
}

export function executeB(data1: string, data2: string): boolean {

    return data1.toUpperCase() === data2.toUpperCase()
}
