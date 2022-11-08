const data1 = {
    name : 'john',
    age : '32',
    describe: () => {
        console.log('${this.name} ${data1.age}')
    }
};



const data2 = {
    name : 'jane',
    age: 28,
}

export default data2;
export  {data1};