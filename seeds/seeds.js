//\\--SEED DATA--\\//
router.post('/seed', (req, res) => {
    //\\--BULK BUILDER--\\//
    User.bulkCreate([
    {
    id: '1',
    first_name: 'Adrian',
    last_name: 'Jones',
    password: '12345',
    email: 'fakeEmail@whatever.com'
    },{
    id: '2',
    first_name: 'Brandon',
    last_name: 'Littlejohn',
    password: '123456',
    email: 'fakeEmail2@whatever.com'
    },{
    id: '3',
    first_name: 'Jeniah',
    last_name: 'Turner',
    password: '1234567',
    email: 'fakeEmail3@whatever.com'
   },{
    id: '4',
    first_name: 'Brandon',
    last_name: 'Ochaeta',
    password: '12345678',
    email: 'fakeEmail4@whatever.com'
  },{
    id: '5',
    first_name: 'Faith',
    last_name: 'Wallace',
    password: '123456789',
    email: 'fakeEmail5@whatever.com'
    },{
    id: '6',
    first_name: 'Andrew',
    last_name: 'Simpkins',
    password: '1234567890',
    email: 'fakeEmail6@whatever.com'
   }
  ]).then(() => {
    res.send('Database seeded!');
  })
  .catch((err) => {
    res.json(err);
  });
});