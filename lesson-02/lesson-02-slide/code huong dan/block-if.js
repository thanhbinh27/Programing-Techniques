var amount = 99.99;
// is amount big enough?
if (amount > 10) // nếu if (amount >100) là > 99.99 sẽ ra kết quả else : 99.99
{
    // <-- block attached to 'if'
    amount = amount * 2;
    console.log(amount); //199.98
}
else
{
    console.log(amount); //99.99
}