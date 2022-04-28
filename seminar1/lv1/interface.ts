//===========인터페이스
interface ServerPart{
    name: string;
    age: number;
    group: string;
    mbti: Array<string>; //string[]
}

const serverPart: ServerPart = {
    name:'김소령',
    age: 5,
    group: 'YB',
    mbti: ['enfp','angel']
}
console.log(serverPart);

const serverMembers: Array<ServerPart>=[ //ServerPart[]
    {
        name:'김소령',
        age: 5,
        group: 'YB',
        mbti: ['enfp','angel']
    },
    {
        name:'김소령',
        age: 5,
        group: 'YB',
        mbti: ['enfp','angel']
    }
]

//================선택적 프로퍼티
interface Closet{
    name:string;
    shirt: number;
    pants:number;
    hat?: number;
    sunglass?: number; //optional
}

const closet: Closet[] = [
    {
        name:'채정아',
        shirt:1,
        pants:2
    }
]