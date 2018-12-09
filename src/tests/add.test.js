const add = (a,b) => a+b;
const generateGreeting = (name='Anonymous') => {
    return `Hello ${name}`;
}

test('Should add two numbers', ()=>{
    const result = add(3,5);
   expect(result).toBe(8);
});

test('Should return a greeting', ()=>{
    const res = generateGreeting('World');
    expect(res).toBe('Hello World');
});

test('Should return anonymous greeting',()=>{
    const res = generateGreeting();
    expect(res).toBe('Hello Anonymous');
});